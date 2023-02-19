import ProductDescription from "../components/ProductDescription";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsletterForm from "../components/Newsletter";
const Description = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto my-10 w-10/12
      ">
                
                <ProductDescription />
                <NewsletterForm />

            </main>
            <Footer />
        </>
    );
};

export default Description;
