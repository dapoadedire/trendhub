import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  // delete bin
  faTrashCan,
  

} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const CartContainer = () => {
  const {
    cart,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    getItemQuantity,
    totalItemsPrice,
    totalItems,
    getItemPrice,
    removeAllItemsFromCart,
  } = useContext(CartContext);

  return (
    
      <div className="container mx-auto my-10
      
      ">
        <h1 className="mb-5 text-center text-2xl font-bold">Shopping Cart ({cart.length})</h1>

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
              <div className="
              w-full border
              border-gray-500
              sm:w-7/12
              
              ">
                {cart.map((product) => (
                  <div key={product.id} className=" flex items-center border-b  border-gray-400
                  bg-white p-2
                  
                  ">
                    <div className="h-24 w-24 flex-none  bg-gray-200">
                      <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-auto p-4">
                      <h2 className="mb-2 
                      text-base
                      text-gray-700">{product.title}</h2>
                      <p className="text-sm
                      text-gray-500
                      ">
                        {getItemQuantity(product)} x {formatCurrency(product.price)} = {formatCurrency(getItemPrice(product))}
                      </p>
                      <div className="mt-2 flex items-center
                     justify-between 
                     
                     
                      ">
                        <div
                        className="flex items-center border  border-gray-400 "
                        >
                          <button
                            onClick={() => removeItemFromCart(product)}
                            className="mr-2  
                            border-r border-gray-400
                            py-2 px-4 font-bold text-gray-800 hover:bg-gray-300"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="w-6
                          
                          text-center font-bold
                          
                          text-gray-700">{getItemQuantity(product)}</span>
                          <button
                            onClick={() => addItemToCart(product)}
                            className="ml-2  
                            border-l border-gray-400
                            py-2 px-4 font-bold text-gray-800 hover:bg-gray-300"
                          >
                            <FontAwesomeIcon icon={faPlus} 
                            
                            />
                          </button>
                        </div>
                        <button
                          onClick={() => removeAllItemsFromCart(product)}
                          className="ml-4
                          py-2 px-4 text-sm font-bold text-gray-800
                          
                          hover:bg-red-300 hover:text-red-600
                          rounded-lg
                          "
                        >
                          <FontAwesomeIcon icon={faTrashCan} 
                          className="h-5 w-5"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                  <div className="
                  
                  w-full
                  border
                  
                  border-gray-500 sm:w-4/12
                  ">
                    <div className="mb-4  flex
                    h-full w-full 
                    flex-col bg-white
                   
                    p-4
                    
                    ">
                      <h2 className="mb-4 text-lg font-semibold text-gray-700">Cart Summary</h2>
                      <div className="mb-2 flex justify-between">
                        <span className="text-gray-500">Total items:</span>
                        <span className="font-bold text-gray-700">{totalItems}</span>
                      </div>
                      <div className="mb-2 flex grow
                      justify-between
                   
                      ">
                        <span className="text-gray-500">Total:</span>
                        <span className="font-bold text-gray-700">{formatCurrency(totalItemsPrice)}</span>
                      </div>
                      <button
                        onClick={() => clearCart()}
                        className="mt-4 w-full rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-600"
                      >
                        Clear cart
                      </button>
                      <button
                      className="mt-4 w-full rounded bg-green-500 py-2 px-4 font-bold text-white "
                      >
                        <Link to="/checkout">Checkout</Link>
                       
                      </button>
                    </div>
                  </div>
              </div>
            
             
          </>
        )}
      </div>
  );
};

export default CartContainer;
