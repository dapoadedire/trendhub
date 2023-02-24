import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import WishListItem from "./WishListItem";

const WishList = () => {
  const { wishlist } = useContext(CartContext);

  return (
    <div
      className=" 
      mx-auto mb-10
      max-w-screen-lg
    p-4
  
    "
    >
      <h1
        className="mb-4 text-center
        text-2xl
        "
      >
        Wish List ({wishlist.length})
      </h1>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-lg font-medium">Your wishlist is empty</h2>
          <p
            className="text-sm text-gray-400">
            Add items to your wishlist to continue shopping.
          </p>
        </div>
      ) : (
        <>
          <div className="flex  flex-col justify-between gap-4 p-3">
            {wishlist.map((product) => (
              <WishListItem product={product} key={product.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WishList;
