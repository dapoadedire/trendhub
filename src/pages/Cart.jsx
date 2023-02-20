import Footer from "../components/Footer";
import Header from "../components/Header";
import CartContainer from "../components/CartContainer";

const Cart = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 w-10/12  grow">
        <CartContainer />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
