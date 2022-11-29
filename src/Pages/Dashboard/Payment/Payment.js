import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../../Shared/Loader/Loader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const orderData = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  return (
    <div>
      <h1 className="text-xl">Payment for {orderData?.productName}</h1>
      <p>Please pay ${orderData?.price} for confirm this order!</p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm orderData={orderData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
