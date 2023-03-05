import React from "react";
import CheckOutContainer from "../components/CheckOutContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CheckOut = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 w-10/12">
        <CheckOutContainer />
      </main>
      <Footer />
    </>
  );
};

export default CheckOut;
