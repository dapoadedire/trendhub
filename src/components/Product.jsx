import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
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

      <div className="mt-4 flex w-full flex-row items-center justify-between">
        <p className="rounded-md bg-green-100 px-4
        py-2 text-lg font-medium text-green-700
        ">${product.price}</p>

        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-green-700 p-4 px-5 py-2 font-medium text-indigo-600 shadow-md transition duration-300 ease-out">
          <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-green-700 text-white duration-300 group-hover:translate-x-0">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="ease absolute flex h-full w-full items-center justify-center text-green-700 transition-all duration-300 group-hover:translate-x-full">
            Add to Cart
          </span>
          <span className="invisible relative">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
