import Store from "./pages/Store";
import Description from "./pages/Description";
import Category from "./pages/Category";
import CheckOut from "./pages/CheckOut";
import "./App.css";
import { useEffect, useReducer } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./hooks/ScrollToTop";
import { Toaster, toast } from "react-hot-toast";

const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
  CLEAR_CART: "clear-cart",
  ADD_TO_WISHLIST: "add-to-wishlist",
  REMOVE_FROM_WISHLIST: "remove-from-wishlist",
  CHECKOUT: "checkout",
  UPDATE_ITEM_QUANTITY: "update-item-quantity",
};

function CartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    case ACTIONS.ADD_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case ACTIONS.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case ACTIONS.CHECKOUT:
      return { ...state, cart: [] };

    case ACTIONS.UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}

function App() {
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [state, dispatch] = useReducer(CartReducer, {
    wishlist: storedWishlist,
    cart: storedCart,
  });

  const addItemToWishlist = (product) => {
    const itemInWishlist = getItemInWishlist(product);

    if (!itemInWishlist) {
      toast.success("Added to wishlist");
      dispatch({ type: ACTIONS.ADD_TO_WISHLIST, payload: product });
    }
  };

  

  const removeItemFromWishlist = (product) => {
    toast.error("Removed from wishlist");
    dispatch({ type: ACTIONS.REMOVE_FROM_WISHLIST, payload: product });
  };

  const getItemInWishlist = (product) => {
    return state.wishlist.find((item) => item.id === product.id);
  };


  const updateItemQuantity = (product, quantity) => {
    dispatch({
      type: ACTIONS.UPDATE_ITEM_QUANTITY,
      payload: { ...product, quantity },
    });
  };

  const addItemToCart = (product, quantity) => {
    const itemInCart = getItemInCart(product);

    if (quantity === 0) {
      toast.error("Removed from cart");
      removeItemFromCart(product);
      return;
    }

    if (itemInCart) {
      toast.success("Item quantity updated");
      updateItemQuantity(product, quantity);
    } else {
      toast.success("Added to cart");
      dispatch({
        type: ACTIONS.ADD_TO_CART,
        payload: { ...product, quantity },
      });
    }
  };


  const removeItemFromCart = (product) => {
    toast.error("Removed from cart");
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: product });
  };

  const clearCart = () => {
    toast.error("Cart cleared");
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  const checkout = () => {
    toast.success("Checkout successful");
    dispatch({ type: ACTIONS.CHECKOUT });
  };

  const getItemPrice = (product) => {
    const item = getItemInCart(product);
    return item ? (item.price * item.quantity).toFixed(2) : 0;
  };

  const getItemQuantity = (product) => {
    const item = getItemInCart(product);
    return item ? item.quantity : 0;
  };

  const totalItems = state.cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalItemsPrice = state.cart
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  const getItemInCart = (product) => {
    return state.cart.find((item) => item.id === product.id);
  };

  const isInCart = (product) => {
    return !!getItemInCart(product);
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getItemQuantity,
        totalItemsPrice,
        totalItems,
        isInCart,
        getItemPrice,
        wishlist: state.wishlist,
        addItemToWishlist,
        removeItemFromWishlist,
        getItemInWishlist,
        checkout,
      }}
    >
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* home */}
          <Route path="/" element={<Store />} />
          {/* cart */}
          {/* description */}
          <Route path="/product/:product_id" element={<Description />} />
          {/* about */}
          {/* Category */}
          <Route path="/category/:category" element={<Category />} />
          {/* checkout */}
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </CartContext.Provider>
  );
}

export default App;
