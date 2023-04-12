import { formatCurrency } from "../utils";
import CartItem from "./CartItem";
import { AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const schema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long' }).max(50, { message: 'Name must be no longer than 50 characters' }),
    email: z.string().email({ message: 'Please provide a valid email address' }),
    address: z.string().min(3, { message: 'Address must be at least 3 characters long' }).max(50, { message: 'Address must be no longer than 50 characters' }),
    city: z.string().min(3, { message: 'City must be at least 3 characters long' }).max(50, { message: 'City must be no longer than 50 characters' }),
    state: z.string().min(3, { message: 'State must be at least 3 characters long' }).max(50, { message: 'State must be no longer than 50 characters' }),
    zip: z.string().min(3, { message: 'Zip must be at least 3 characters long' }).max(50, { message: 'Zip must be no longer than 50 characters' }),
    country: z.string().min(3, { message: 'Country must be at least 3 characters long' }).max(50, { message: 'Country must be no longer than 50 characters' }),
    phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }).max(20, { message: 'Phone number must be no longer than 20 digits' }),
    cardNumber: z.string().length(16, { message: 'Card number must be exactly 16 digits long' }),
    cardExpiry: z.string().length(5, { message: 'Card expiry must be in the format MM/YY' }),
    cardCVV: z.string().length(3, { message: 'Card CVV must be exactly 3 digits long' }),
    nameOnCard: z.string().min(3, { message: 'Name on card must be at least 3 characters long' }).max(50, { message: 'Name on card must be no longer than 50 characters' }),
    billingAddress: z.string().min(3, { message: 'Billing address must be at least 3 characters long' }).max(50, { message: 'Billing address must be no longer than 50 characters' }),
});




export const CheckOutForm = ({ handleCheckout }) => {

    const { cart, totalItemsPrice, totalItems } =
        useContext(CartContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const processCheckout = (data) => {
        console.log(data);
        handleCheckout();
        reset();
    };




    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Check out</h1>
                <form
                    className="mt-4 flex flex-col  gap-10"
                    onSubmit={handleSubmit(processCheckout)}
                >
                    <div className="flex flex-col gap-4">
                        <h2
                            className="text-lg font-medium uppercase
                                    ">
                            Shipping Information
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input
                                {...register("name")}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John Doe"

                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                            />
                            {errors?.name?.message && (
                                <span className="text-red-500">{errors.name.message}</span>
                            )}

                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                {...register("email")}

                                type="email"
                                name="email"
                                id="email"
                                placeholder="johndoe@gmail.com" 
                                
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"

                                />

                            {errors?.email?.message && (
                                <span className="text-red-500">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="1234 Main St"
                                id="address"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"



                                {...register("address")}


                            />

                            {errors?.address?.message && (
                                <span className="text-red-500">{errors.address.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="New York"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                {...register("city")}


                            />
                            {errors?.city?.message && (
                                <span className="text-red-500">{errors.city.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                name="state"
                                placeholder="NY"
                                id="state"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"

                                {...register("state")} />
                            {errors?.state?.message && (
                                <span className="text-red-500">{errors.state.message}</span>
                            )}

                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="zip">Zip Code</label>
                            <input
                                type="text"
                                placeholder="10001"
                                name="zip"
                                id="zip"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                {...register("zip")}

                            />

                            {errors?.zip?.message && (
                                <span className="text-red-500">{errors.zip.message}</span>
                            )}


                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                placeholder="United States"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                {...register("country")}



                            />

                            {errors?.country?.message && (
                                <span className="text-red-500">{errors.country.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="123-456-7890"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                {...register("phone")}



                            />

                            {errors?.phone?.message && (
                                <span className="text-red-500">{errors.phone.message}</span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-medium uppercase">
                            Payment Information
                        </h2>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="cardNumber">Card number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                id="cardNumber"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                {...register("cardNumber")}


                            />
                            {errors?.cardNumber?.message && (
                                <span className="text-red-500">{errors.cardNumber.message}</span>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="cardExpiry">Card expiry</label>
                                <input
                                    type="text"
                                    placeholder="09 / 25"
                                    name="cardExpiry"
                                    id="cardExpiry"
                                    className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                    {...register("cardExpiry")}



                                />
                                {errors?.cardExpiry?.message && (
                                    <span className="text-red-500">{errors.cardExpiry.message}</span>
                                )}

                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="cvc">CVV</label>
                                <input
                                    type="text"
                                    name="cvc"
                                    id="cvc"
                                    placeholder="123"
                                    className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                    {...register("cardCVV")}



                                />
                                {errors?.cardCVV?.message && (
                                    <span className="text-red-500">{errors.cardCVV.message}</span>
                                )}

                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nameOnCard">Name on card</label>
                            <input
                                type="text"
                                name="nameOnCard"
                                placeholder="John Doe"
                                id="nameOnCard"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                {...register("nameOnCard")}

                            />
                            {errors?.nameOnCard?.message && (
                                <span className="text-red-500">{errors.nameOnCard.message}</span>
                            )}

                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="billingAddress">Billing Address</label>
                            <input type="text" name="billingAddress" id="billingAddress" placeholder="1234 Main St"
                                className="rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400"


                                {...register("billingAddress")}

                            />

                            {
                                errors?.billingAddress?.message && (
                                    <span className="text-red-500">{errors.billingAddress.message}</span>
                                )

                            }
                        </div>

                        <button
                            className="mt-6 rounded-md
border-2 border-transparent  
                                                    bg-slate-900
                                                    p-4

                                                    font-bold
                                                    text-white
                                                    hover:border-slate-800
                                                    hover:bg-slate-100
                                                    hover:text-slate-800
                                                    
                                            focus:outline-none
                                            focus:ring-2
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
                <div
                    className="flex flex-col gap-4
       
                
                "
                >
                    <AnimatePresence>
                        {cart.map((product) => (
                            <CartItem product={product} key={product.id} />
                        ))}
                    </AnimatePresence>
                </div>
                <div
                    className="mt-10
                    flex
                    flex-col
                    justify-between
                    gap-4
                    rounded-md
                    border
                    border-slate-400
                    bg-gray-100
                    p-4
                    font-bold
                    "
                >
                    <h1>Total Items: {totalItems}</h1>
                    <h1>Total Price: {formatCurrency(totalItemsPrice)}</h1>
                </div>
            </div>
        </div>
    )

}
