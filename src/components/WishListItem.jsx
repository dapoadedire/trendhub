/* eslint-disable tailwindcss/no-custom-classname */
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

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
      relative rounded-xl
      border
      border-slate-600
      px-3
      py-6
      
      "
    >
      <div className="
      mb-3 flex 
      gap-3
      
      
      ">
        <img src={product.image} alt={product.title} className="
        h-24
        w-24
        flex-none
        rounded-xl
        object-cover
        " />
       <div>
          <h2 className="
        mb-2 text-sm
        ">{product.title}</h2>
          <p className="underline">{formatCurrency(product.price)}</p>
       </div>
      </div>
        <form onSubmit={handleSubmit} className="
        flex
        gap-2
        ">
          <div
            className="
            rounded-md
            border
            border-slate-600
            "
          >
            <button type="button" onClick={handleDecrease} className="
            p-2
            ">
              {"<-"}
            </button>
            <input
              type="number "
              value={value}
              onChange={handleInputChange}
            className="w-10 border-x border-slate-600
            bg-slate-900
            p-2 text-center"
            />
          <button type="button" onClick={handleIncrease} className="p-2">
              {"->"}
            </button>
          </div>

          <div>
          <button type="submit" className="rounded-md
           bg-green-500
                p-2
                text-white
          ">
              Add to cart
            </button>
          </div>
          {isInCart(product) && (
            <div className="">
              <button
                type="button"
                className="
                rounded-md
                bg-red-500
                p-2
                text-white
                "
                onClick={() => {
                  removeItemFromCart(product);
                }}
              >
                Remove
              </button>
            </div>
          )}
        </form>
     

      <div
      className="
      absolute
      top-2

      right-2
      text-red-500
      w-6
      h-6
      bg-slate-600
      border
      rounded-full
      flex
      items-center
      justify-center

      "
      >
        {getItemInWishlist(product) && (
          <button onClick={() => removeItemFromWishlist(product)}>
            <VscChromeClose
            color="white"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default WishListItem;
