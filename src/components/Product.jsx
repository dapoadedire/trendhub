/* eslint-disable tailwindcss/no-custom-classname */

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../utils";
import { Link } from "react-router-dom";

import { HiOutlineHeart } from "react-icons/hi";




const Product = ({ product }) => {
  const { addItemToWishlist, removeItemFromWishlist, getItemInWishlist } =
    useContext(CartContext);

  return (
    <div
      className="group flex flex-col items-center justify-center  
     
      bg-gray-50
      p-4
    "
    >
      <Link to={`/product/${product.id}`} className="grow">
        <div className="">
          <img
            className="mx-auto mb-4 h-64 w-64 object-contain
            object-center
           saturate-50
           transition-all
            duration-500
            ease-in-out
            group-hover:scale-110
            group-hover:saturate-100"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <h3
            className="font-inter mb-1
          text-sm
          
          text-gray-900"
          >
            {product.title}
          </h3>
        </div>
      </Link>

      <div
        className="flex w-full items-center
      justify-between
      "
      >
        <div>
          <p
            className="
            font-inter
           
            self-start
            py-2  text-start
            text-base
            text-gray-800
            "
          >
            {formatCurrency(product.price)}
          </p>
        </div>

        <div>
          {getItemInWishlist(product) ? (
            <button
              onClick={() => removeItemFromWishlist(product)}
              className="font-inter
              hover:animated-pulse
              text-red-500
              transition-all
              duration-300
              ease-in-out
              hover:text-red-600
              "
            >
              <HiOutlineHeart
                className="hover:animated-pulse
              scale-125
              fill-current

              "
              />
            </button>
          ) : (
            <button
              onClick={() => addItemToWishlist(product)}
              className="font-inter
              text-black
              transition-all
              duration-300
              ease-in-out
              hover:text-red-600
              
              "
            >
              <HiOutlineHeart
                className="fill-white
              scale-125
              
              "
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
