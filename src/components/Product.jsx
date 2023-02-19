import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Product = ({ product }) => {
  const {
    addItemToCart,
    removeItemFromCart,
    getItemQuantity,
    isInCart,
  } =
    useContext(CartContext);

  return (
    <div className="group flex flex-col items-center justify-start rounded-md border border-gray-200 bg-white p-4">
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
            group-hover:saturate-100

            "
            src={product.image}
            alt={product.title}

          />
        </div>
        <div className="grow">
          <h3
          className="text-base font-medium
          text-gray-900
          
          "
          >{product.title}</h3>
        </div>
      </Link>

      <div
        className="mt-4 flex w-full flex-row items-center justify-between
      space-x-4
      "
      >
        <p
          className="rounded-md bg-green-100 px-3
              py-1
         text-lg font-medium text-green-700
        "
        >
          ${product.price}
        </p>

        {isInCart(product) ? (
          <div className="flex flex-row items-center justify-center space-x-2">
            <button
              className="rounded-md bg-red-100 px-4
              py-1
            text-lg font-medium text-red-700
            hover:bg-red-200
            transition-all
            duration-200
            ease-in-out
            "
              onClick={() => removeItemFromCart(product)}
            >
              -
            </button>
            <p
              className="rounded-md border border-green-700
              bg-green-100
          px-4 py-1 text-lg
          font-medium text-green-700
          "
            >
              {getItemQuantity(product)}
            </p>
            <button
              className="rounded-md bg-green-100 px-4
              py-1
            text-lg font-medium text-green-700
             transition-all
            duration-200
            ease-in-out
            hover:bg-green-200
            "
              onClick={() => addItemToCart(product)}
            >
              +
            </button>
          </div>
        ) : (
          <button
              className="rounded-md bg-green-100 px-4
              py-1
          text-lg font-medium text-green-700
          "
            onClick={() => addItemToCart(product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span 
            className="ml-2
            text-xl
            "
            >
              +
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
