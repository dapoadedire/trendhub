/* eslint-disable tailwindcss/no-custom-classname */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../utils";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import RatingStars from "./RatingStars";

const Product = ({ product }) => {
  const {
    addItemToWishlist,
    addItemToCart,
    removeItemFromCart,
    isInCart,
    removeItemFromWishlist,
    getItemInWishlist,
  } = useContext(CartContext);
  return (
    <div
      className="flex flex-col items-center justify-center  
      rounded-lg
     
      border
    border-slate-300
    p-4
    transition-all
    duration-200
    ease-in-out
   
    "
    >
      <Link
        to={`/product/${product.id}`}
        className="w-full
      grow
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
            loading="lazy"
          />
        </div>

        <div>
          <h3
            className="mb-1 text-left
         
          text-sm
          font-semibold
          text-gray-900"
          >
            {product.title}
          </h3>
        </div>
      </Link>

      {product.rating && (
        <div
          className=" my-2 flex  flex-wrap items-center
        justify-start gap-2 self-start
        "
        >
          <div className="flex items-center justify-center">
            <RatingStars rating={product.rating.rate} />
          </div>
          <span
            className=" 
                text-sm
                 text-gray-600"
          >
            {product.rating.count} reviews.
          </span>
        </div>
      )}

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
            font-bold
           
            "
          >
            {formatCurrency(product.price)}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {isInCart(product) ? (
            <button
              aria-label="Remove from cart"
              className="
                flex
                items-center
                
                justify-center
                rounded-lg
                p-2
                font-bold
                text-slate-900
                transition-all
                duration-200 ease-in-out hover:bg-red-200
                
                "
              onClick={() => removeItemFromCart(product)}
            >
              <BsBagCheck className="scale-[1.3]" />
            </button>
          ) : (
            <button
              aria-label="Add to cart"
              onClick={() => addItemToCart(product, 1)}
              className="flex
                items-center
                justify-center
                 rounded-lg
                   p-2
                transition-all
                duration-200 ease-in-out hover:bg-green-200
                "
            >
              <BsCart className="scale-[1.3]" />
            </button>
          )}
          {getItemInWishlist(product) ? (
            <button
              aria-label="Remove from wishlist"
              onClick={() => removeItemFromWishlist(product)}
              className="  flex
                items-center
                justify-center
                rounded-lg
                p-2 text-slate-900 hover:bg-red-200
                "
            >
              <BsHeartFill
                className="
              scale-[1.3]"
              />
            </button>
          ) : (
            <button
              aria-label="Add to wishlist"
              onClick={() => addItemToWishlist(product)}
              className="  flex
            items-center
            justify-center
rounded-lg p-2 hover:bg-green-200

            "
            >
              <BsHeart
                className="scale-[1.3]
          
              
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
