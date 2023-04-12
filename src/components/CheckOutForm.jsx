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
                            <InputLabel htmlFor="name">Name</InputLabel>



                            <InputField
                                name="name"
                                type="text"
                                register={register}
                                placeholder="John Doe"
                                error={errors?.name?.message}
                            />


                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <InputField
                                name="email"
                                type="email"
                                register={register}
                                placeholder="johndoe@gmail.com"
                                error={errors?.email?.message}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="address">Address</InputLabel>
                            <InputField
                                name="address"
                                type="text"
                                register={register}
                                placeholder="1234 Main St"
                                error={errors?.address?.message}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="city">City</InputLabel>
                            <InputField
                                name="city"
                                type="text"
                                register={register}
                                placeholder="New York"
                                error={errors?.city?.message}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="state">State</InputLabel>
                            <InputField
                                name="state"
                                type="text"
                                register={register}
                                placeholder="New York"
                                error={errors?.state?.message}
                            />

                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="zip">Zip</InputLabel>
                            <InputField
                                name="zip"
                                type="text"
                                register={register}
                                placeholder="10001"
                                error={errors?.zip?.message}
                            />

                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="country">Country</InputLabel>

                            <InputField
                                name="country"
                                type="text"
                                register={register}
                                placeholder="United States"
                                error={errors?.country?.message}
                            />

                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="phone">Phone</InputLabel>
                            <InputField
                                name="phone"
                                type="text"
                                register={register}
                                placeholder="1234567890"
                                error={errors?.phone?.message}
                            />

                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-medium uppercase">
                            Payment Information
                        </h2>

                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="nameOnCard">Name on card</InputLabel>
                            <InputField
                                name="nameOnCard"
                                type="text"
                                register={register}
                                placeholder="John Doe"
                                error={errors?.nameOnCard?.message}
                            />

                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2">
                                <InputLabel htmlFor="cardNumber">Card number</InputLabel>
                                <InputField
                                    name="cardNumber"
                                    type="text"
                                    register={register}
                                    placeholder={'1234 1234 1234 1234'}
                                    error={errors?.cardNumber?.message}
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <InputLabel htmlFor="cardExpiry">Card expiry</InputLabel>
                                <InputField
                                    name="cardExpiry"
                                    type="text"
                                    register={register}
                                    placeholder="MM/YY"
                                    error={errors?.cardExpiry?.message}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="cardCVV">Card CVV</InputLabel>
                            <InputField
                                name="cardCVV"
                                type="text"
                                register={register}
                                placeholder="123"
                                error={errors?.cardCVV?.message}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="billingAddress">Billing address</InputLabel>
                            <InputField
                                name="billingAddress"
                                type="text"
                                register={register}
                                placeholder="1234 Main St"
                                error={errors?.billingAddress?.message}
                            />
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
                <div className="flex flex-col gap-4"
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

};



const InputLabel = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor}>
            {children}
        </label>
    );
};



const InputField = ({ name, type, register, placeholder, error }) => {
    return (
        <>
            <input
                {...register(name)}
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                className={`rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400 ${error ? 'border-red-500 focus:ring-0' : ''
                    }`}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </>
    );
};
