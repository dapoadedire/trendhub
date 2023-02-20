import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlus,
  faShoppingCart,
  faMinus,

} from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../utils";

import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Product = ({ product }) => {
  const { addItemToCart, removeItemFromCart, getItemQuantity, isInCart } =
    useContext(CartContext);

  return (
    <div className="group flex flex-col items-center justify-start 
    border border-gray-200
    bg-white p-5">
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
        <div >
          <h3
            className="text-base font-medium
          text-gray-900
          font-inter
          "
          >
            {product.title}
          </h3>
        </div>
      </Link>

      <div className="mt-3
      flex
      w-full
      flex-row flex-wrap items-center justify-between
      gap-4
      ">
        <div>
          <p 
            className="
            font-inter
                            
                            py-2 px-4 font-bold text-gray-800"

          >
            {
              formatCurrency(product.price)
            }
          </p>

          
        </div>

<div
          className="flex items-center border  border-gray-400 "
>
          {isInCart(product) && getItemQuantity(product) > 0 ? (
            <>
              <button
                className="mr-2  
                            border-r border-gray-400
                            py-2 px-4 font-bold text-gray-800 hover:bg-gray-300"

                onClick={() => removeItemFromCart(product)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="w-6
                          
                          text-center font-bold
                          
                          text-gray-700">{getItemQuantity(product)}</span>
              <button
                className="ml-2  
                            border-l border-gray-400
                            py-2 px-4 font-bold text-gray-800 hover:bg-gray-300"
         onClick={() => addItemToCart(product)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </>
          ) : (
            <button
                className="
                            
                            py-2 px-4 font-bold text-gray-800 hover:bg-gray-300"

              onClick={() => addItemToCart(product)}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              
            </button>
          )}

</div>


      

      </div>
    </div>
  );
};

export default Product;
