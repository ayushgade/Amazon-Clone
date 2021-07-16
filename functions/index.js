const functions = require("firebase-functions");
const express = require("express");
const cors  = require("cors");
const stripe = require("stripe")
("sk_test_51JCrbISJTUyKK3jck0Yu8zSvgKEghkNNxbMlpRuetzKT38GeJ3nwoyKWVixaLXn1UQ7cb8rtdXJN2ksqF0HwwF2f00DXkiySud");

// API

// App config

const App = express();

// -Middlewares
App.use(cors({ origin: true}));
App.use(express.json());

// -API routes

App.get("/", (request, response) => response.status(200).send('hello world'))

App.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('payment Total >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({  //* gets the client detailes
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(App);
