import Footer from "../components/Footer";
import Header from "../components/Header";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const {
    cart,
    addItemsToCart,
    removeItemsFromCart,
    clearCart,
    itemQuantity,
    total,
    totalItems,
    // isInCart,
    deleteAllItemFromCart,
  } = useContext(CartContext);

  return (
    <>
      <Header />
      <main
        className="flex-1"
      >
        <h1>Cart</h1>
        <div
          className="container mx-auto my-10 w-10/12
      flex flex-col justify-between items-center
      "
        >
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex h-[100px] flex-row items-center
               border-2 border-green-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" h-full w-2/12
                border
                border-green-200
                object-contain object-center"
                  />
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                  <p>
                    Quantity: {itemQuantity(product)}
                    <button onClick={() => removeItemsFromCart(product)}>
                      -
                    </button>
                    <button onClick={() => addItemsToCart(product)}>+</button>
                    <button onClick={() => deleteAllItemFromCart(product)}>
                      Remove all from cart
                    </button>
                  </p>
                </div>
              ))}
              <div>
                <p>Total: {total}</p>
                <p>Total items: {totalItems}</p>
                <button onClick={() => clearCart()}>Clear cart</button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
