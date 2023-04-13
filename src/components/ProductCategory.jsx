import { useParams } from "react-router";
import Product from "./Product";
import all_products from "../data";

const ProductCategory = () => {
  const { category } = useParams();

  const products = all_products.filter(
    (product) => product.category == category
  );

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center 
        
        "
      >
        <h1 className="text-center text-3xl font-bold capitalize text-gray-800 underline">
          {category}
        </h1>

        <div
          className="my-10 grid grid-cols-1 gap-5  sm:grid-cols-2
              md:grid-cols-3"
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
