import Store from "./pages/Store";
import Description from "./pages/Description";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import NotFound from "./pages/NotFound";

function App() {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (product) => {
    const newCart = [...cart];
    const itemInCart = getItemInCart(product);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
  };
  const removeItemFromCart = (product) => {
    const newCart = [...cart];
    const itemInCart = getItemInCart(product);

    if (itemInCart) {
      if (itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      } else {
        // Remove item with quantity of zero from cart
        newCart.splice(newCart.indexOf(itemInCart), 1);
      }
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);
  };


  const clearCart = () => {
    setCart([]);
  };

  const getItemPrice = (product) => {
    const item = getItemInCart(product);
    return item ? (item.price * item.quantity).toFixed(2) : 0;
  };

  const totalItemsPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isInCart = (product) => {
    return !!getItemInCart(product);
  };

  const removeAllItemsFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  const getItemInCart = (product) => {
    return cart.find((item) => item.id === product.id);
  };

  const getItemQuantity = (product) => {
    const item = getItemInCart(product);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getItemQuantity,
        totalItemsPrice,
        totalItems,
        isInCart,
        removeAllItemsFromCart,
        getItemPrice,
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
          <Route
          path="*"
          element={<NotFound />}/>
            
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
