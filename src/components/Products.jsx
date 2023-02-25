import all_products from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div>

      <div
        className="flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-5">Product Display</h2>

      </div>
    <div
      className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2
    md:grid-cols-3
    "
    >
     
      {all_products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default Products;
