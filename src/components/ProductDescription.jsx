import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faShoppingCart,
  faMinus,

} from "@fortawesome/free-solid-svg-icons";
import all_products from "../data";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";

const Productproduct = () => {
  const { product_id } = useParams({});

  const { addItemToCart, removeItemFromCart, isInCart, getItemQuantity } =
    useContext(CartContext);

  let product = all_products.filter((product) => product.id == product_id)[0];

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-md border border-gray-200 bg-white p-4 shadow-md md:max-w-2xl lg:max-w-4xl">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <img
            className="w-full object-cover"
            src={product.image}
            alt="Backpack"
          />
        </div>
        <div className="flex flex-col ">
          <div className="grow">
            <h1 className="text-2xl font-bold text-gray-900">
              {product.title}
            </h1>
            <h2 className="mt-2 text-xl font-bold text-gray-700">
              {
                formatCurrency(product.price)
              }
            </h2>
            <p className="mt-2 text-base text-gray-700">{product.product}</p>
            <p className="mt-2 text-base text-gray-500">{product.category}</p>
          </div>
          {product.rating && (
            <div className="my-4 flex grow items-center">
              {getRatingStars(product.rating.rate)}
              <span
                className="ml-2 
                text-base
                 text-gray-600"
              >
                {product.rating.count} reviews.
              </span>
            </div>
          )}

         
          <div
            className="flex space-x-2"
          >
            {isInCart(product) && getItemQuantity(product) > 0 ? (
              <>
                <button
                  className="rounded-md bg-red-100 px-4 py-1
        text-lg font-medium text-red-700
        transition-all duration-200 ease-in-out hover:bg-red-200"
                  onClick={() => removeItemFromCart(product)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p
                  className="rounded-md border border-green-700 bg-green-100
        px-4 py-1 text-lg font-medium text-green-700"
                >
                  {getItemQuantity(product)}
                </p>
                <button
                  className="rounded-md bg-green-100 px-4 py-1
        text-lg font-medium text-green-700 transition-all duration-200 ease-in-out hover:bg-green-200"
                  onClick={() => addItemToCart(product)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </>
            ) : (
              <button
                className="rounded-md bg-green-100 px-4 py-1
      text-lg font-medium text-green-700"
                onClick={() => addItemToCart(product)}
              >
                <span
                className="pr-2"
                >
                  Add to cart
                </span>
                <FontAwesomeIcon icon={faShoppingCart} />

              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Productproduct;

function getRatingStars(rating) {
  const filledStars = Math.floor(rating);
  const unfilledStars = 5 - filledStars;
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <svg
        className="mr-2 h-5 w-5 fill-current text-yellow-500"
        viewBox="0 0 24 24"
        key={i}
      >
        <path d="M12 1l3.09 6.38 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.09 3.01 1.18-6.88-5-4.85 6.91-.99L12 1z"></path>
      </svg>
    );
  }

  for (let i = 0; i < unfilledStars; i++) {
    stars.push(
      <svg
        className="mr-2 h-5 w-5  fill-current text-gray-400"
        viewBox="0 0 24 24"
        key={5 + i}
      >
        <path d="M12 1l3.09 6.38 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.09 3.01 1.18-6.88-5-4.85 6.91-.99L12 1z"></path>
      </svg>
    );
  }

  return stars;
}
