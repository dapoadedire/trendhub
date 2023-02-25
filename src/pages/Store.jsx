import Products from "../components/Products";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
const Store = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 w-10/12  ">
        <Hero />
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default Store;
