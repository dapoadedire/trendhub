/* eslint-disable tailwindcss/no-custom-classname */
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import { useState } from "react";

import { GrClose } from "react-icons/gr";

const WishListItem = ({ product }) => {
  const {
    addItemToCart,
    removeItemFromWishlist,
    getItemInWishlist,
    getItemQuantity,
    isInCart,
    removeItemFromCart,
  } = useContext(CartContext);

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
    <div
      key={product.id}
      className=" 
      border border-gray-400
      "
    >
      <div className="">
        <img src={product.image} alt={product.title} className="" />
      </div>
      <div className="">
        <h2 className="">{product.title}</h2>
        <p className="">{formatCurrency(product.price)}</p>
        <form onSubmit={handleSubmit} className="">
          <div
            className="
            "
          >
            <button type="button" onClick={handleDecrease} className="">
              {"<-"}
            </button>
            <input
              type="number"
              value={value}
              onChange={handleInputChange}
              className=""
            />

            <button type="button" onClick={handleIncrease} className="">
              {"->"}
            </button>
          </div>

          <div>
            <button type="submit" className="">
              Add to cart
            </button>
          </div>
          {isInCart(product) && (
            <div className="">
              <button
                type="button"
                className=""
                onClick={() => {
                  removeItemFromCart(product);
                }}
              >
                Remove
              </button>
            </div>
          )}
        </form>
      </div>

      <div>
        {getItemInWishlist(product) && (
          <button onClick={() => removeItemFromWishlist(product)} className="">
            <GrClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default WishListItem;
