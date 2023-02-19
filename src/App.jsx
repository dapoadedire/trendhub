import Store from "./pages/Store";
import Description from "./pages/Description";
import Category from "./pages/Category";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* home */}
      <Route path="/" element={<Store />} />
      {/* cart */}
      {/* description */}
      <Route path="/description/:product_id" element={<Description />} />
      {/* about */}
      {/* Category */}
      <Route path="/category/:category" element={<Category />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
