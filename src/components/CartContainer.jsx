import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import CheckoutSuccess from "./CheckoutSuccess";
import { useState } from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { cart, clearCart, totalItemsPrice, totalItems } =
    useContext(CartContext);

  const handleCheckout = () => {
    setShowCheckout(true);
    clearCart();
  };

  return (
    <div className="
    hide-scrollbar
      h-full
    overflow-scroll
    border-t
    pt-4
    ">
      {showCheckout ? (
        <CheckoutSuccess />
      ) : (
        <div>
          <h1
            className="mb-4 text-center
        text-2xl
        "
          >
            Shopping Cart ({cart.length})
          </h1>

          {cart.length === 0 ? (
            <div
            className="flex flex-col items-center justify-center space-y-4"
            >
              <h2>Your cart is empty</h2>
              <p>Add items to your cart to continue shopping.</p>
            </div>
          ) : (
            <>
              <div
                className="flex flex-col justify-between p-2
                pb-80
                "
              >
                {cart.map((product) => (
                  <CartItem product={product} key={product.id} />
                ))}
              </div>
              <div
                className="
                border-t
                absolute
                  inset-x-0
                  bottom-0
                  bg-slate-900
                 
                  p-4
                 
                  "
              >
                <h2
                  className="
                    mb-4
                    text-center
                    text-lg
                    font-medium
                    "
                >
                  Cart Summary
                </h2>
                <div className="">
                  <span
                    className="
                      pr-2
                      font-medium
                      "
                  >
                    Total items:
                  </span>
                  <span>{totalItems}</span>
                </div>
                <div>
                  <span
                    className="
                      font-medium
                      
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

                    "
                >
                  <button
                    className="
                     border
                     
                      p-2
                      
                      "
                    onClick={() => clearCart()}
                  >
                    Clear cart
                  </button>
                  <button
                    className="
                      border
                     
                      
                      p-2
                     
                      
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
