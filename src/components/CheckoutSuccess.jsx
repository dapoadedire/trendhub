import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="mb-5 text-2xl font-bold">Thank you for your order!</h1>
      <p className="mb-5">
        Your order has been processed and will be shipped soon. You will receive
        an email confirmation shortly.
      </p>
      <Link
        to="/"
        className="bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-600"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
