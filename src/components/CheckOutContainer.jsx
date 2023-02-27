import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../utils";
import CartItem from "./CartItem";
import { motion, AnimatePresence } from "framer-motion";
import CheckoutSuccess from "./CheckoutSuccess";
import { useState } from "react";

const CheckOutContainer = () => {
    const { cart, checkout, totalItemsPrice, totalItems } = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);


    const handleCheckout = (e) => {
        e.preventDefault();
        setShowCheckout(true);
        checkout();

        setTimeout(() => {
            setShowCheckout(false);
        }, 5000);
    };

    return (
        <div
            className="
        
        min-h-[50vh]
        "
        >
            {
                showCheckout ? (
                    <CheckoutSuccess />
                ) : (
                    <> {
                        cart.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="mt-20 flex flex-col items-center justify-center space-y-4 p-4"
                            >
                                <h2 className="text-lg font-medium">Your cart is empty</h2>
                                <p className="text-center text-base text-gray-400">
                                    You have no items in your shopping cart. To buy one or more items, click &quot;Add to cart&quot; next to the item.
                                </p>
                            </motion.div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-3xl font-bold">Check out</h1>
                                        <form className="mt-4 flex flex-col  gap-10"
                                        
                                        onSubmit={handleCheckout}
                                        >
                                            <div
                                                className="flex flex-col gap-4"
                                            >
                                                <h2 className="text-lg font-medium
                                    uppercase
                                    ">Shipping Information</h2>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="rounded-md border
                                                            
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="
                                                            rounded-md
                                                            
                                                            border
                                                            p-2
                                                            focus:outline-none
                                                            
                                                            focus:ring-2 focus:ring-slate-600"
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="address">Address</label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        id="address"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="city">City</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600

                                                            "
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="state">State</label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        id="state"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="zip">Zip</label>
                                                    <input
                                                        type="text"
                                                        name="zip"
                                                        id="zip"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="country">Country</label>
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        id="country"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-col gap-4"
                                            >
                                                <h2
                                                    className="text-lg font-medium uppercase"
                                                >
                                                    Payment Information
                                                </h2>

                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="cardNumber">Card number</label>
                                                    <input
                                                        type="text"
                                                        name="cardNumber"
                                                        id="cardNumber"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="cardExpiry">Card expiry</label>
                                                        <input
                                                            type="text"
                                                            name="cardExpiry"
                                                            id="cardExpiry"
                                                            className="rounded-md border
                                                                p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                                "
                                                            placeholder="MM / YY"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="cvc">CVV</label>
                                                        <input
                                                            type="text"
                                                            name="cvc"
                                                            id="cvc"
                                                            className="rounded-md border
                                                                p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                                "
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="nameOnCard">Name on card</label>
                                                    <input
                                                        type="text"
                                                        name="nameOnCard"


                                                        id="nameOnCard"
                                                        className="rounded-md border
                                                            p-2
                                                            
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-slate-600
                                                            "
                                                        required
                                                    />


                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="billingAddress">Billing Address</label>
                                                    <input type="text" name="billingAddress" id="billingAddress" className="border p-2" />
                                                </div>

                                                <button
                                                    className="rounded-md bg-black p-2
                                            font-bold
                                            text-white
                                            "
                                                    type="submit"
                                                    
                                                >
                                                    Checkout
                                                </button>

                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex flex-col gap-4 ">
                                        <h1 className="text-3xl font-bold">Cart</h1>
                                        <div className="flex flex-col gap-4
       
                
                ">
                                            <AnimatePresence>
                                                {cart.map((product) => (
                                                    <CartItem product={product} key={product.id} />
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                        <div className="flex
        flex-col
        justify-between
        gap-4
        rounded-md
        bg-gray-100
        p-4
        font-bold
        ">
                                            <h1>Total Items: {totalItems}</h1>
                                            <h1>Total Price: {formatCurrency(totalItemsPrice)}</h1>

                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    }

                    </>
                )
            }
        </div>


    );
};

export default CheckOutContainer;




