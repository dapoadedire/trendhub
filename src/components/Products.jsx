import all_products from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div
      className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2
    md:grid-cols-3
    "
    >
      {all_products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
