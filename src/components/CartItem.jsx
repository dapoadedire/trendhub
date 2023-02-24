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
      relative mb-4
      rounded-xl
      border
      border-slate-600
      
      p-2
      "
    >
      <div className="mb-2 flex gap-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-24 w-24 flex-none object-contain"
        />
        <div>
          <h2 className="mb-2 ">{product.title}</h2>
          <p>
            {getItemQuantity(product)} x {formatCurrency(product.price)} ={" "}
            {formatCurrency(getItemPrice(product))}
          </p>
        </div>
      </div>
      <div className="flex-auto p-2">
        <form
          onSubmit={handleSubmit}
          className="
          
          flex
          flex-wrap
          items-center
        
          gap-4
          "
        >
          <div
            className="flex items-center
            border border-gray-500
            "
          >
            <button
              type="button"
              onClick={handleDecrease}
              className="
              p-2
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
             
              p-2
              
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
              border-gray-500
              px-4
              py-2
              font-medium
              hover:border-green-700
              
              hover:bg-green-200
              hover:text-green-700"
            >
              Add to cart
            </button>
          </div>
          {isInCart(product) && (
            <div className="flex justify-end">
              <button
                type="button"
                className="
              p-2
              font-medium
              hover:text-red-700
              
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
