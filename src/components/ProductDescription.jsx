import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const ProductDescription = () =>{
    const {product_id} = useParams({})
    const [description, setDescription] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true)
            const response = await fetch(
                `https://fakestoreapi.com/products/${product_id}`
            );
            const data = await response.json();
            setDescription(data);
            setIsLoading(false);
        };
        fetchDetails();
    }, [product_id]);



    return(
        <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-md md:max-w-2xl lg:max-w-4xl">
           {
                isLoading ? <p>Loading...</p> : (
                
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <img className="w-full object-cover" src={description.image} alt="Backpack" />
                        </div>
                        <div className="flex flex-col ">
                            <div
                                className="grow"
                            >
                                <h1 className="text-2xl font-bold text-gray-900">{description.title}</h1>
                                <h2 className="mt-2 text-xl font-bold text-gray-700">${description.price}</h2>
                                <p className="mt-2 text-base text-gray-700">{description.description}</p>
                                <p className="mt-2 text-base text-gray-500">{description.category}</p>
                            </div>
                            {
                                description.rating && (
                                    <div className="my-4 flex grow items-center">
                                        {getRatingStars(description.rating.rate)}
                                        <span className="ml-2 text-sm text-gray-600">{description.rating.count} reviews</span>
                                    </div>
                                )
                            }

                            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-green-700 p-4 px-5 py-2 font-medium text-indigo-600 shadow-md transition duration-300 ease-out">
                                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-green-700 text-white duration-300 group-hover:translate-x-0">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </span>
                                <span className="ease absolute flex h-full w-full items-center justify-center text-green-700 transition-all duration-300 group-hover:translate-x-full">
                                    Add to Cart
                                </span>
                                <span className="invisible relative">
                                    Add to Cart
                                </span>
                            </button>

                        </div>
                    </div>
                    )
           }
        </div>


    )


   
}


export default ProductDescription;


function getRatingStars(rating) {
    const filledStars = Math.floor(rating);
    const unfilledStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
        stars.push(<svg className="mr-2 h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24"
            key={i}

        >
            <path d="M12 1l3.09 6.38 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.09 3.01 1.18-6.88-5-4.85 6.91-.99L12 1z"></path>
        </svg>);
    }

    for (let i = 0; i < unfilledStars; i++) {
        stars.push(<svg className="mr-2 h-4 w-4 fill-current text-gray-400" viewBox="0 0 24 24"
        key={5+i}
        >
            <path d="M12 1l3.09 6.38 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.09 3.01 1.18-6.88-5-4.85 6.91-.99L12 1z"></path>
        </svg>);
    }

    return stars;
}
