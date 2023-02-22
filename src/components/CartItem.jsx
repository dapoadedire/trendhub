import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import { useState } from "react";

const CartItem = ({ product }) => {
  const {
    addItemToCart,
    removeItemFromCart,
    getItemQuantity,
    isInCart,
    getItemPrice,
  } = useContext(CartContext);

  const [value, setValue] = useState(getItemQuantity(product) || 1);

  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleDecrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItemToCart(product, value);
  };

  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div
      key={product.id}
      className=" flex items-center border-b  border-gray-400
                  bg-white p-2
                  
                  "
    >
      <div className="h-24 w-24 flex-none bg-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex-auto p-4">
        <h2
          className="mb-2 
                      text-base
                      text-gray-700"
        >
          {product.title}
        </h2>
        <p
          className="text-sm
                      text-gray-500
                      "
        >
          {getItemQuantity(product)} x {formatCurrency(product.price)} ={" "}
          {formatCurrency(getItemPrice(product))}
        </p>
        <form
          onSubmit={handleSubmit}
          className="
          my-4
          flex
          flex-wrap
          items-center
        
          gap-4
          "
        >
          <div
            className="flex items-center
            border border-gray-500
            "
          >
            <button
              type="button"
              onClick={handleDecrease}
              className="
             
              
              p-2
              font-semibold
              hover:bg-gray-200
              "
            >
              {"<-"}
            </button>
            <input
              type="number"
              value={value}
              onChange={handleInputChange}
              className="w-16                 
                
                p-2
                text-center
                outline-none
               
               
                "
            />

            <button
              type="button"
              onClick={handleIncrease}
              className="
             
              p-2
              
              font-semibold
              hover:bg-gray-200
              "
            >
              {"->"}
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="
             border
              border-gray-500
              px-4
              py-2
              font-medium
              hover:border-green-700
              
              hover:bg-green-200
              hover:text-green-700"
            >
              Add to cart
            </button>
          </div>
          {isInCart(product) && (
            <div className="flex justify-end">
              <button
                type="button"
                className="
              p-2
              font-medium
              hover:text-red-700
              
              "
                onClick={() => {
                  removeItemFromCart(product);
                }}
              >
                Remove item
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CartItem;
