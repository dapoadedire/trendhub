import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import all_products from "../data/products";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Productproduct = () => {
  const { product_id } = useParams({});

  const { addItemsToCart, removeItemsFromCart, isInCart, ItemQuantity } =
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
              ${product.price}
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

          {isInCart(product) ? (
            <div className="flex flex-row items-center justify-center space-x-2">
              <button
                className="rounded-md bg-green-100 p-1
            text-lg font-medium text-green-700
            "
                onClick={() => removeItemsFromCart(product)}
              >
                -
              </button>
              <p
                className="rounded-md bg-green-100 p-1
          text-lg font-medium text-green-700
          "
              >
                {ItemQuantity(product)}
              </p>
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
          )}
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
