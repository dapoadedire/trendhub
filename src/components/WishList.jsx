import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import WishListItem from "./WishListItem";



const WishList = () => {
    const {wishlist} = useContext(CartContext);
  

  return(
    <div className="container mx-auto my-10">
        <h1 className="mb-5 text-center text-2xl font-bold">
            WishList ({wishlist.length})
        </h1>
        {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-medium">Your wishlist is empty</h2>
                <p className="text-gray-500">
                    Add items to your wishlist to continue shopping.
                </p>
            </div>
        ) : (
            <>
                <div className="flex flex-wrap justify-between gap-4">
                    {wishlist.map((product) => (
                        <WishListItem product={product} key={product.id} />
                    ))}
                </div>
            </>
        )}
    </div>
    
  )

};

export default WishList;
