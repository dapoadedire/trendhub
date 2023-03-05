import React from "react";
import ProductDescription from "../components/ProductDescription";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Description = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 w-10/12">
        <ProductDescription />
      </main>
      <Footer />
    </>
  );
};

export default Description;
