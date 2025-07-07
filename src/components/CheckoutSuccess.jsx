import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CheckoutSuccess = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="relative z-10 max-w-md rounded-lg bg-white p-8 shadow-xl"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="mb-3 text-2xl font-bold">Thank you for your order!</h1>
          <p className="mb-5">
            Your order has been processed and will be shipped soon. You will
            receive an email confirmation shortly.
          </p>
          <Link
            to="/"
            className="rounded-md bg-green-500 px-4 py-2 font-bold text-white transition-colors hover:bg-green-600"
          >
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutSuccess;
