import { useParams } from "react-router";
import { useState } from "react";
import all_products from "../data";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import RatingStars from "./RatingStars";

const Productproduct = () => {
  const { product_id } = useParams({});

  const { addItemToCart, removeItemFromCart, getItemQuantity, isInCart } =
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
    addItemToCart(product, value);
  };

  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <div
        className="mb-10 flex flex-col items-center
   justify-center
   "
      >
        <h2 className="text-center text-2xl font-bold text-gray-800 underline">
          Product Details
        </h2>
      </div>
      <div className="mx-auto max-w-md overflow-hidden rounded-md border border-slate-200 bg-white p-4 md:max-w-2xl lg:max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <img
              className="h-96
            w-96
            object-contain
            "
              src={product.image}
              alt="Backpack"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col ">
            <div className="grow">
              <h1
                className="mb-4 text-xl font-bold
            text-gray-800
            "
              >
                {product.title}
              </h1>
              <h2
                className=" w-max  text-base
            font-bold
            text-green-600
            underline
            

            "
              >
                {formatCurrency(product.price)}
              </h2>
              <p className="mt-2 text-base text-gray-500">{product.category}</p>

              <p className="mt-2 text-base text-gray-800">
                {product.description}.
              </p>
            </div>
            {product.rating && (
              <div className="my-4 flex grow items-center">
                <RatingStars rating={product.rating.rate} />
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
          flex-wrap
          items-center
        gap-4
          text-sm
          "
            >
              <div
                className="flex items-center
          
            "
              >
                <button
                  aria-label="Decrease quantity"
                  type="button"
                  onClick={handleDecrease}
                  className="
              rounded-md
              border
              border-slate-600
              p-2
              px-4
              font-semibold
              hover:bg-slate-300
              "
                >
                  {"<"}
                </button>
                <label htmlFor="cartquantity">
                  <span className="sr-only">Quantity</span>
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={handleInputChange}
                  className="w-16                 
                
                
                p-2
                text-center
               font-semibold
               outline-none
                "
                />

                <button
                  aria-label="Increase quantity"
                  type="button"
                  onClick={handleIncrease}
                  className="
              rounded-md
              border
              border-slate-600
             
              p-2
              
              px-4
              font-semibold
              hover:bg-slate-300
              "
                >
                  {">"}
                </button>
              </div>

              <div>
                <button
                  aria-label="Add to cart"
                  type="submit"
                  className="
             rounded-md
              border
              border-slate-600
              px-4
              py-2
               font-medium

               hover:bg-slate-300
             
              "
                >
                  Add to cart
                </button>
              </div>
              {isInCart(product) && (
                <div
                  className="
            justify-self-end
            
            "
                >
                  <button
                    aria-label="Remove item from cart"
                    type="button"
                    className="
              rounded-md
              
             p-2

            text-pink-500
              
              hover:bg-pink-200
              hover:text-pink-700

            
              
              
              "
                    onClick={() => {
                      removeItemFromCart(product);
                    }}
                  >
                    Remove item
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productproduct;
