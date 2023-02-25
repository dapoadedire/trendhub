import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import { useState } from "react";

const CartItem = ({ product }) => {
  const {
    addItemToCart,
    removeItemFromCart,
    getItemQuantity,
    isInCart,
    getItemPrice,
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
      relative mt-4

      border-b
      border-gray-500
      p-2
      pb-10
      "
    >
      <div className="mb-2 flex gap-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-36 w-36 flex-none border
          border-slate-600
         
          object-cover
          "
          loading="lazy"
        />
        <div>
          <h2
            className="mb-2 
          text-base
          text-gray-300
          "
          >
            {product.title}
          </h2>
          <p
            className="
          text-sm
          text-gray-400
          "
          >
            {getItemQuantity(product)} x {formatCurrency(product.price)} ={" "}
            {formatCurrency(getItemPrice(product))}
          </p>
        </div>
      </div>
      <div
        className="mt-6 flex
      w-full
     
       flex-wrap
      "
      >
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
              type="button"
              onClick={handleDecrease}
              className="
              border
              border-slate-600
              p-2
              px-4
              font-semibold
              hover:bg-slate-700
              "
            >
              {"<"}
            </button>
            <input
              type="number"
              value={value}
              onChange={handleInputChange}
              className="w-16                 
                
                bg-slate-900
                p-2
                text-center
               outline-none
                "
            />

            <button
              type="button"
              onClick={handleIncrease}
              className="
              border
              border-slate-600
              p-2
             
              px-4
              
              font-semibold
              hover:bg-slate-700
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
              border-slate-600
              px-4
              py-2
              font-medium
             
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
                type="button"
                className="
              p-2
              
            text-pink-500

            
              
              
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
  );
};

export default CartItem;
