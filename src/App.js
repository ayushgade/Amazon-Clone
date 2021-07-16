import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe
  ("pk_test_51JCrbISJTUyKK3jcrJeixeGCoiTssOkEoUiocCHJ8cR8wE5IQ9OcG2HvnsGKT5qyHSn5nlwoMa83d7uTMxROEtGV0018FfOS4v");

// Default Route should be at bottom 
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Will only load once when components are relodad
    auth.onAuthStateChanged(authuser => {

      if (authuser) {
        // The user just logged in / The user was Logged in

        //This code sends the user to data Layer
        dispatch({
          type: 'SET_USER',
          user: authuser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;