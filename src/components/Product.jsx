import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Product = ({ product }) => {
  const { 
    addItemsToCart ,
    removeItemsFromCart,
    isInCart,
    itemQuantity,
  } = useContext(CartContext);
  
  return (
    <div className="flex flex-col items-center justify-start rounded-md border border-gray-200 bg-white p-4">
      <Link to={`/product/${product.id}`} className="grow">
        <div className="">
          <img
            className="mb-4 h-64 w-64 object-contain object-center"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="grow">
          <h3>{product.title}</h3>
        </div>
      </Link>

      <div className="mt-4 flex w-full flex-row items-center justify-between
      space-x-4
      ">
        <p className="rounded-md bg-green-100 p-1
         text-lg font-medium text-green-700
        ">${product.price}</p>

    {
      isInCart(product) ? (
        <div className="flex flex-row items-center justify-center space-x-2">
          <button
            className="rounded-md bg-green-100 p-1
            text-lg font-medium text-green-700
            "
            onClick={() => removeItemsFromCart(product)}
          >
            -
          </button>
          <p className="rounded-md bg-green-100 p-1
          text-lg font-medium text-green-700
          ">{itemQuantity(product)}</p>
          <button

            className="rounded-md bg-green-100 p-1
            text-lg font-medium text-green-700
            "
            onClick={() => addItemsToCart(product)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="rounded-md bg-green-100 p-1
          text-lg font-medium text-green-700
          "
          onClick={() => addItemsToCart(product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      )
    }
      

        
      </div>
    </div>
  );
};

export default Product;
