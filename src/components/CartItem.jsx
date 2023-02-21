import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import { useState } from "react";

const CartItem = ({ product }) => {
  const { addItemToCart, removeItemFromCart, getItemQuantity, getItemPrice } =
    useContext(CartContext);

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
    console.log("Submitted value:", value);
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
      <div className="h-24 w-24 flex-none  bg-gray-200">
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
          flex
          
          items-center
          justify-between
          gap-4
          
          "
        >
          <div
            className="flex  
            
            "
          >
            <button
              type="button"
              onClick={handleDecrease}
              className="
              border border-gray-500
              px-4
              py-2
              "
            >
              {"<"}
            </button>
            <input
              type="number"
              value={value}
              onChange={handleInputChange}
              className="w-16  
                text-center"
            />

            <button
              type="button"
              onClick={handleIncrease}
              className="border border-gray-500
              px-4
              py-2
              "
            >
              {">"}
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="
              border
              border-gray-500 px-4
              py-2
              
              "
            >
              Add to cart
            </button>
          </div>
        </form>
        <div>
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => {
              removeItemFromCart(product);
            }}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
