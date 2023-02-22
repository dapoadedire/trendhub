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
      className="flex flex-col items-center justify-center  
      p-4
      rounded-lg
    "
    >
      <Link
        to={`/product/${product.id}`}
        className="grow
      w-full
      "
      >
        <div>
          <img
            className="mx-auto mb-4 h-64 w-64 object-contain
            object-center
           transition-all
           duration-1000
            ease-in-out
            "
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <h3
            className="font-inter mb-1
          text-sm
          text-left
          
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
            text-gray-800"
          >
            {formatCurrency(product.price)}
          </p>
        </div>

        <div>
          {getItemInWishlist(product) ? (
            <button onClick={() => removeItemFromWishlist(product)}>
              <HiOutlineHeart
                className="hover:animated-pulse
              scale-150
              text-black
              fill-black
             
             
             


              "
              />
            </button>
          ) : (
            <button onClick={() => addItemToWishlist(product)}>
              <HiOutlineHeart
                className="scale-150
              fill-white
              text-black
              transition-all
              duration-200
              ease-in-out
              hover:fill-black
              hover:text-black

              
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
