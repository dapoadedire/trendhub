/* eslint-disable tailwindcss/no-custom-classname */
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

import { motion } from "framer-motion";

const WishListItem = ({ product }) => {
  const {
    addItemToCart,
    removeItemFromWishlist,
    getItemInWishlist,
    getItemQuantity,
    isInCart,
    removeItemFromCart,
  } = useContext(CartContext);

  const [value, setValue] = useState(getItemQuantity(product) || 1);

  const handleIncrease = () => {
    if (value < 10) {
      setValue(value + 1);
    }

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
    <motion.div
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: "100%", transition: { duration: 0.2 } }}
      layout
      key={product.id}
      className=" 
      relative 
       rounded-md
      bg-slate-800
      p-3
      pr-5
      "
    >
      <div
        className="
      mb-3 flex 
      gap-3"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-24 w-24 flex-none rounded-md
          border
          border-slate-600
          object-cover
          "
          loading="lazy"
        />
        <div>
          <h2
            className="
        mb-2 w-11/12
        text-sm
        font-semibold
        text-white
        "
          >
            {product.title}
          </h2>
          <p
            className="text-gray-300
          underline
          "
          >
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
          
          flex
          flex-wrap
          items-center
        gap-4
          text-sm
          "
      >
        <div
          className="flex items-center
          
            "
        >
          <button
            aria-label="Decrease quantity"
            type="button"
            onClick={handleDecrease}
            className="
              rounded-md
              border
              border-slate-600
              p-2
              px-4
              font-semibold
              hover:bg-slate-700
              "
          >
            {"<"}
          </button>
          <label htmlFor="cartquantity">
            <span className="sr-only">Quantity</span>
          </label>
          <input
            type="number"
            value={value}
            onChange={handleInputChange}
            min="0" max="10"
            className="w-16                 
                
                bg-slate-800
                p-2
                text-center
               font-semibold
               outline-none
                "
          />

          <button
            aria-label="Increase quantity"
            type="button"
            onClick={handleIncrease}
            className="
              rounded-md
              border
              border-slate-600
             
              p-2
              
              px-4
              font-semibold
              hover:bg-slate-700
              "
          >
            {">"}
          </button>
        </div>

        <div>
          <button
            aria-label="Add to cart"
            type="submit"
            className="
             rounded-md
              border
              border-slate-600
              px-4
              py-2
               font-medium

               hover:bg-slate-700
             
              "
          >
            Add to cart
          </button>
        </div>
        {isInCart(product) && (
          <div
            className="
            justify-self-end
            
            "
          >
            <button
              aria-label="Remove item"
              type="button"
              className="
              rounded-md
              
             p-2

            text-pink-500
              
              hover:bg-pink-200
              hover:text-pink-700

            
              
              
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
      <div
        className="
      absolute
      top-2
      right-2
      flex
      items-center
      justify-center
      rounded-full
   
      border
    
      border-slate-600
bg-slate-700
      p-2
      hover:bg-slate-600


      "
      >
        {getItemInWishlist(product) && (
          <button
            aria-label="Remove from wishlist"
            onClick={() => removeItemFromWishlist(product)}
          >
            <VscChromeClose color="white" size="1.2rem" className="scale-120" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default WishListItem;
