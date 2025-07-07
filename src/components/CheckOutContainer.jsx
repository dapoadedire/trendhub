import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import CheckoutSuccess from "./CheckoutSuccess";
import { CheckOutForm } from "./CheckOutForm";

const CheckOutContainer = () => {
  const { cart, checkout } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    processCheckout();
  };

  const processCheckout = () => {
    setShowCheckout(true);
    checkout();

    setTimeout(() => {
      setShowCheckout(false);
    }, 5000);
  };

  return (
    <div className="min-h-[50vh]">
      {/* Show checkout success modal when checkout is complete */}
      {showCheckout && <CheckoutSuccess />}

      {/* Show empty cart message or checkout form */}
      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="mt-20 flex flex-col items-center justify-center space-y-4 p-4"
        >
          <h2 className="text-lg font-medium">Your cart is empty</h2>
          <p className="text-center text-base text-gray-400">
            You have no items in your shopping cart. To buy one or more items,
            click &quot;Add to cart&quot; next to the item.
          </p>
        </motion.div>
      ) : (
        <CheckOutForm handleCheckout={handleCheckout} />
      )}
    </div>
  );
};

export default CheckOutContainer;
