import { useParams } from "react-router";
import { useState } from "react";
import all_products from "../data";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";

const Productproduct = () => {
  const { product_id } = useParams({});

  const { addItemToCart, removeItemFromCart, getItemQuantity } =
    useContext(CartContext);

  let product = all_products.filter((product) => product.id == product_id)[0];

  const [value, setValue] = useState(getItemQuantity(product) || 1);

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", value);
    addItemToCart(product, value);
  };

  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

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
            <h2 className="mt-2 text-xl font-bold text-gray-800">
              {formatCurrency(product.price)}
            </h2>
            <p className="mt-2 text-base text-gray-500">{product.category}</p>

            <p className="mt-2 text-base text-gray-700">
              {product.description}
            </p>
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

          <form
            onSubmit={handleSubmit}
            className="
          flex
          
          items-center
          justify-between
          gap-4
          
          "
          >
            <div
              className="flex  
            
            "
            >
              <button
                type="button"
                onClick={handleDecrease}
                className="
              border border-gray-500
              px-4
              py-2
              "
              >
                {"<"}
              </button>
              <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="w-16  
                text-center"
              />

              <button
                type="button"
                onClick={handleIncrease}
                className="border border-gray-500
              px-4
              py-2
              "
              >
                {">"}
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="
              border
              border-gray-500 px-4
              py-2
              
              "
              >
                Add to cart
              </button>
            </div>
          </form>
          <div>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                removeItemFromCart(product);
              }}
            >
              Remove from cart
            </button>
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
