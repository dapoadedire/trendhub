import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import WishListItem from "./WishListItem";

import { AnimatePresence, motion } from "framer-motion";

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
        uppercase
        "
      >
        Wish List ({wishlist.length})
      </h1>
      {wishlist.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="mt-20 flex 
        flex-col
        items-center justify-center space-y-4
         p-4
        "
        >
          <h2 className="text-lg font-medium">Your wishlist is empty</h2>
          <p
            className="text-center text-base
          text-gray-400
          "
          >
            Add items to your wishlist to continue shopping.
          </p>
        </motion.div>
      ) : (
        <div className="flex  flex-col justify-between gap-4 p-3">
          <AnimatePresence initial={false}>
            {wishlist.map((product) => (
              <WishListItem product={product} key={product.id} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default WishList;
