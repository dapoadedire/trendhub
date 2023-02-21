import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import CheckoutSuccess from "./CheckoutSuccess";
import { useState } from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const {
    cart,
    clearCart,

    totalItemsPrice,
    totalItems,
  } = useContext(CartContext);

  const handleCheckout = () => {
    setShowCheckout(true);
    clearCart();
  };

  return (
    <div
      className="container mx-auto my-10
      
      "
    >
      {showCheckout ? (
        <CheckoutSuccess />
      ) : (
        <div>
          <h1 className="mb-5 text-center text-2xl font-bold">
            Shopping Cart ({cart.length})
          </h1>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-2xl font-medium">Your cart is empty</h2>
              <p className="text-gray-500">
                Add items to your cart to continue shopping.
              </p>
            </div>
          ) : (
            <>
              <div
                className="
          flex flex-wrap
          justify-between
          gap-4
          
          "
              >
                <div
                  className="
              w-full border
              border-gray-500
              sm:w-7/12
              
              "
                >
                  {cart.map((product) => (
                    <CartItem product={product} key={product.id} />
                  ))}
                </div>
                <div
                  className="
                  h-[fit-content]
                  
                  w-full
                  border
                  
                  border-gray-500 sm:w-4/12
                  "
                >
                  <div
                    className="mb-4  flex
                     w-full 
                    flex-col bg-white
                   
                    p-4
                    
                    "
                  >
                    <h2 className="mb-4 text-lg font-semibold text-gray-700">
                      Cart Summary
                    </h2>
                    <div className="mb-2 flex justify-between">
                      <span className="text-gray-500">Total items:</span>
                      <span className="font-bold text-gray-700">
                        {totalItems}
                      </span>
                    </div>
                    <div
                      className="mb-2 flex 
                      justify-between
                      border-b border-gray-400
                      pb-2
                      "
                    >
                      <span className="text-gray-500">Total:</span>
                      <span className="font-bold text-gray-700">
                        {formatCurrency(totalItemsPrice)}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => clearCart()}
                        className="mt-4 w-full rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-600"
                      >
                        Clear cart
                      </button>
                      <button
                        onClick={() => handleCheckout()}
                        className="mt-4 w-full rounded bg-green-500 py-2 px-4 font-bold text-white "
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
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
