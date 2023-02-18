const Product = ({ product }) => {
  return (
    <div
      className="flex  flex-col items-center  justify-start border border-gray-200
        bg-white p-4 
        hover:shadow-md
        "
    >
      <div
        className="
            "
      >
        <img
          className="
                    mb-4 h-64
                 w-64 object-contain
                 object-center
                 "
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="grow">
        <h3>{product.title}</h3>
      </div>

      <div className="mt-4 flex w-full flex-row items-center justify-between">
        <p className=" font-medium text-green-800"> ${product.price} </p>
        <button className="bg-green-800 px-4 py-2 font-medium text-white hover:bg-green-900">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
