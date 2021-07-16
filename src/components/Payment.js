import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import BasketItem from "./BasketItem";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./axios";

function Payment() {
  const history = useHistory();
  const [{ user, basket }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, seterror] = useState(null);
  const [disabled, setdisabled] = useState(null);
  const [clientSecret, setclientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge
    // a customer
    const getclientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe experts currencies total in subunites
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setclientSecret(response.data.clientSecret);
    };

    getclientSecret();
  }, [basket]);

  console.log("The secret is >>>>", clientSecret);
  console.log("User", user);

  //The above code states that the whenever the basket changes getClientSecret will make the request
  //and it will update the special stripe secret which will allows us charge the client correct amount...

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = pament confirmation

        setSucceeded(true);
        seterror(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        })

        history.replace("/orders");
      })
  }

  const handleChange = (event) => {
    //  Listen for change in card Element
    // and display any error as customer type card detailes

    setdisabled(event.empty);
    seterror(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>- - - - - - - -</p>
            <p>- - - - - - - -</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <BasketItem
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button className="payment_button" disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
