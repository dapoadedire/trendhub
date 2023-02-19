import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Product from "./Product";


const ProductCategory = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [category]);
    
    return (
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-gray-800">
            {category}
        </h1>
        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
            <Product key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
    };

export default ProductCategory;