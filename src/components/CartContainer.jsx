import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import CheckoutSuccess from "./CheckoutSuccess";
import { useState } from "react";
import CartItem from "./CartItem";
import { AnimatePresence, motion } from "framer-motion";

const CartContainer = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { cart, clearCart, totalItemsPrice, totalItems } =
    useContext(CartContext);

  const handleCheckout = () => {
    setShowCheckout(true);
    clearCart();
  };

  return (
    <div
      className="
    hide-scrollbar
      h-full
    overflow-scroll
    
    p-4
    "
    >
      {showCheckout ? (
        <CheckoutSuccess />
      ) : (
        <div>
          <h1
            className="mb-4 text-center
        text-2xl
        uppercase
        "
          >
            Shopping Cart ({cart.length})
          </h1>

          {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1, }}
                exit={{ opacity: 0 }}
         className="mt-20 flex
         flex-col
         items-center justify-center space-y-4">
                <h2 className="text-lg font-medium">Your cart is empty</h2>
                <p className="text-base text-gray-400">Add items to your cart to continue shopping.</p>
            </motion.div>
          ) : (
            <>
              <div
                className="flex flex-col justify-between p-2
                pb-80
                "
              >
                    <AnimatePresence initial={false}
                      mode="popLayout"
                    >
                {cart.map((product) => (
                  <CartItem product={product} key={product.id} />
                ))}
                </AnimatePresence>
              </div>
              <div
                className="
                absolute
                inset-x-0
                  bottom-0
                  border-t
                  border-gray-400
                  bg-slate-900
                 
                  p-4
                 
                  "
              >
                <h2
                  className="
                    mb-3
                    text-center
                    text-lg
                    font-medium
                    uppercase
                    "
                >
                  Cart Summary
                </h2>
                <div className="
                py-2
                ">
                  <span
                    className="
                      pr-2
                      
                      font-bold
                      "
                  >
                    Total items:
                  </span>
                  <span>{totalItems}</span>
                </div>
                <div>
                  <span
                    className="
                       pr-2
                       font-bold
                      "
                  >
                    Total:
                  </span>
                  <span>{formatCurrency(totalItemsPrice)}</span>
                </div>
                <div
                  className="
                    mt-4
                    flex
                    justify-between
                    gap-4
                    ">
                  <button
                    className="
                     border
                     
                      p-2
                      font-medium
                      hover:bg-red-600
                      
                      "
                    onClick={() => clearCart()}
                  >
                    Clear cart
                  </button>
                  <button
                    className="
                      border
                     
                      
                      p-2
                      font-medium
                      hover:bg-green-600
                     
                      
                      "
                    onClick={() => handleCheckout()}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartContainer;
