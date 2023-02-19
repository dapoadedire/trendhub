import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartContainer = () => {
    const {
        cart,
        
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getItemQuantity,
        totalItemsPrice,
        totalItems,
        getItemPrice,

        
        removeAllItemsFromCart,
    } = useContext(CartContext);

    return (
        
            <main
                className="flex-1"
            >
                <h1>Cart</h1>
                <div
                    className="container mx-auto my-10 w-10/12
      flex flex-col justify-between items-center
      "
                >
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cart.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex h-[100px] flex-row items-center
               border-2 border-green-300"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className=" h-full w-2/12
                border
                border-green-200
                object-contain object-center"
                                    />
                                    <h3>{product.title}</h3>
                                    <p
                                    
                                    >
                                        Price: 
                                        {product.price}</p>
                                    <p>
                                        Total Price:
                                        {getItemPrice(product)}</p>
                                    <p>
                                        Quantity: {getItemQuantity(product)}
                                        <button onClick={() => removeItemFromCart(product)}>
                                            -
                                        </button>
                                        <button onClick={() => addItemToCart(product)}>+</button>
                                        <button onClick={() => removeAllItemsFromCart(product)}>
                                            Remove all from cart
                                        </button>
                                    </p>
                                </div>
                            ))}
                            <div>
                                <p>Total: {totalItemsPrice}</p>
                                <p>Total items: {totalItems}</p>
                                <button onClick={() => clearCart()}>Clear cart</button>
                            </div>
                        </>
                    )}
                </div>
            </main>
         
    );
};

export default CartContainer;
