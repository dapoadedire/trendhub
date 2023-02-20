import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsletterForm from "../components/Newsletter";
const NotFound = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 w-10/12">
        <div>
          <h1 className="text-2xl font-bold">404</h1>
        </div>
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
