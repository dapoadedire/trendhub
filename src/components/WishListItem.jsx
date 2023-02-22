/* eslint-disable tailwindcss/no-custom-classname */
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import { useState } from "react";

const WishListItem = ({ product }) => {
  const {
    addItemToCart,
    removeItemFromWishlist,
    getItemInWishlist,
    getItemQuantity,
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
          {formatCurrency(product.price)}
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
      </div>

      <div>
        {getItemInWishlist(product) && (
          <button
            onClick={() => removeItemFromWishlist(product)}
            className="font-inter
              text-red-400
              transition-all
              duration-300
              ease-in-out
              hover:text-red-500"
          >
            Remove from wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default WishListItem;
