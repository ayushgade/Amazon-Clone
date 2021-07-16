import React from "react";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />
        <div className="checkout_title">
        <h4>Hello,{user?.email}</h4>           
        {/* user? is optional Chaining */}
          <h2>Your Shopping Basket</h2>
        </div>
            {basket.map(item =>(
              <BasketItem 
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;