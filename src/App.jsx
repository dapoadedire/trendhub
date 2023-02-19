import Store from "./pages/Store";
import Description from "./pages/Description";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  const [cart, setCart] = useState([]);

  const addItemsToCart = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find((item) => item.id === product.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);
  };
  const removeItemsFromCart = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find((item) => item.id === product.id);

    if (itemInCart) {
      if (itemInCart.quantity > 0) {
        itemInCart.quantity -= 1;
      }
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };

  const itemQuantity = (product) => {
    const item = cart.find((item) => item.id === product.id);
    return item ? item.quantity : 0;
  };

  const deleteAllItemFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItemsToCart,
        removeItemsFromCart,
        clearCart,
        itemQuantity,
        total,
        totalItems,
        isInCart,
        deleteAllItemFromCart,
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Store />} />
          {/* cart */}
          {/* description */}
          <Route path="/product/:product_id" element={<Description />} />
          {/* about */}
          {/* Category */}
          <Route path="/category/:category" element={<Category />} />
          {/* cart */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
