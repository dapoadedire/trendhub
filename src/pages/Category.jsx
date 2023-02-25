import ProductCategory from "../components/ProductCategory";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Category = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 w-10/12">
        <ProductCategory />
      </main>
      <Footer />
    </>
  );
};

export default Category;
