import React from "react";
import Store from "./pages/Store";
import Description from "./pages/Description";
import Category from "./pages/Category";
import CheckOut from "./pages/CheckOut";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./hooks/ScrollToTop";
import { Toaster } from "sonner";
import CartState from "./context/CartState";

function App() {
  return (
    <CartState>
      <Toaster position="bottom-left" richColors />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/product/:product_id" element={<Description />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </CartState>
  );
}

export default App;
