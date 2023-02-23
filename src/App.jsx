import Store from "./pages/Store";
import Description from "./pages/Description";
import Category from "./pages/Category";
import "./App.css";
import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import NotFound from "./pages/NotFound";

function App() {
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const [wishlist, setWishlist] = useState(storedWishlist);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addItemToWishlist = (product) => {
    const newWishlist = [...wishlist];
    const itemInWishlist = getItemInWishlist(product);

    if (!itemInWishlist) {
      newWishlist.push(product);
    }

    setWishlist(newWishlist);
  };

  const removeItemFromWishlist = (product) => {
    const newWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(newWishlist);
  };

  const getItemInWishlist = (product) => {
    return wishlist.find((item) => item.id === product.id);
  };

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (product, quantity) => {
    const newCart = [...cart];
    const itemInCart = getItemInCart(product);

    if (quantity === 0) {
      removeItemFromCart(product);
      return;
    }

    if (itemInCart) {
      itemInCart.quantity = quantity;
    } else {
      newCart.push({ ...product, quantity });
    }

    setCart(newCart);
  };

  const removeItemFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
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
        getItemPrice,
        wishlist,
        addItemToWishlist,
        removeItemFromWishlist,
        getItemInWishlist,
      }}
    >
      <HashRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Store />} />
          {/* cart */}
          {/* description */}
          <Route path="/product/:product_id" element={<Description />} />
          {/* about */}
          {/* Category */}
          <Route path="/category/:category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </CartContext.Provider>
  );
}

export default App;
