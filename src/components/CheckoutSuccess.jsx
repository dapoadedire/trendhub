import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const CheckoutSuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      className="

    flex
    flex-col
    items-center

    justify-center
    space-y-4
    py-4
    px-6
      "
    >
      <h1 className="mb-5 text-2xl font-bold">Thank you for your order!</h1>
      <p className="mb-5">
        Your order has been processed and will be shipped soon. You will receive
        an email confirmation shortly.
      </p>
      <Link
        to="/"
        className="rounded-md bg-green-500 py-2 px-4 font-bold text-white
        hover:bg-green-600
        "
      >
        Continue Shopping
      </Link>
    </motion.div>
  );
};

export default CheckoutSuccess;
