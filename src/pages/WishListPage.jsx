import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsletterForm from "../components/Newsletter";
import WishList from "../components/WishList";
const WishListPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 w-10/12 ">
        <WishList />
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
};

export default WishListPage;
