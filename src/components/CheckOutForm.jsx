import { formatCurrency } from "../utils";
import CartItem from "./CartItem";
import { AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PaystackButton } from "react-paystack";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be no longer than 50 characters" }),
  email: z.string().email({ message: "Please provide a valid email address" }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters long" })
    .max(50, { message: "Address must be no longer than 50 characters" }),
  city: z
    .string()
    .min(3, { message: "City must be at least 3 characters long" })
    .max(50, { message: "City must be no longer than 50 characters" }),
  state: z
    .string()
    .min(3, { message: "State must be at least 3 characters long" })
    .max(50, { message: "State must be no longer than 50 characters" }),
  zip: z
    .string()
    .min(3, { message: "Zip must be at least 3 characters long" })
    .max(50, { message: "Zip must be no longer than 50 characters" }),
  country: z
    .string()
    .min(3, { message: "Country must be at least 3 characters long" })
    .max(50, { message: "Country must be no longer than 50 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be no longer than 20 digits" }),
});

// Get Paystack public key from environment variable
const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

export const CheckOutForm = ({ handleCheckout }) => {
  const { cart, totalItemsPrice, totalItems } = useContext(CartContext);

  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const processCheckout = (data) => {
    console.log(data);
    setFormData(data);
  };

  const handlePaystackSuccess = (reference) => {
    console.log("Payment successful! Reference:", reference);
    handleCheckout();
    reset();
    setFormData(null);
  };

  const handlePaystackClose = () => {
    console.log("Payment canceled by user");
  };

  const paystackConfig = formData
    ? {
        reference: (() => {
          const date = new Date();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          const year = String(date.getFullYear()).slice(-2);
          const randomNum = Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0");
          return `order_${month}_${day}_${year}_${randomNum}`;
        })(),
        email: formData.email,
        amount: totalItemsPrice * 100, // Paystack amount is in kobo (1 Naira = 100 kobo)
        publicKey: PAYSTACK_PUBLIC_KEY,
        firstname: formData.name.split(" ")[0],
        lastname: formData.name.split(" ").slice(1).join(" "),
        phone: formData.phone,
        metadata: {
          custom_fields: [
            {
              display_name: "Address",
              variable_name: "address",
              value: formData.address,
            },
            {
              display_name: "City",
              variable_name: "city",
              value: formData.city,
            },
            // Add cart items as separate custom fields
            ...cart.map((item) => ({
              display_name: `Product ${item.id}`,
              variable_name: `product_${item.id}`,
              value: `${item.title} (Qty: ${item.quantity})`,
            })),
          ],
        },
        onSuccess: handlePaystackSuccess,
        onClose: handlePaystackClose,
      }
    : null;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Check out</h1>
        {!formData ? (
          <form
            className="mt-4 flex flex-col gap-10"
            onSubmit={handleSubmit(processCheckout)}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium uppercase">
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
                            focus:ring-2"
              type="submit"
            >
              Continue to Payment
            </button>
          </form>
        ) : (
          <div className="mt-4 flex flex-col gap-6">
            <h2 className="text-lg font-medium uppercase">
              Payment Information
            </h2>
            <div className="rounded-md border border-gray-300 p-4">
              <h3 className="font-medium">Shipping Details</h3>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Address: {formData.address}</p>
              <p>
                City: {formData.city}, {formData.state} {formData.zip}
              </p>
              <p>Country: {formData.country}</p>
              <p>Phone: {formData.phone}</p>
            </div>
            <div className="rounded-md border border-gray-300 p-4">
              <h3 className="font-medium">Order Summary</h3>
              <p>Total Items: {totalItems}</p>
              <p>Total Amount: {formatCurrency(totalItemsPrice)}</p>
            </div>
            <div className="flex flex-col gap-2">
              <PaystackButton
                className="mt-6 rounded-md
                                border-2 border-transparent  
                                bg-green-600
                                p-4
                                font-bold
                                text-white
                                hover:bg-green-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-green-500"
                {...paystackConfig}
                text="Pay with Paystack"
              />
              <button
                className="mt-2 rounded-md
                                border-2 border-slate-300  
                                bg-white
                                p-4
                                font-bold
                                text-slate-700
                                hover:bg-slate-100
                                focus:outline-none
                                focus:ring-2"
                onClick={() => setFormData(null)}
              >
                Back to Shipping Information
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold">Cart</h1>
        <div className="flex flex-col gap-4">
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
                    font-bold"
        >
          <h1>Total Items: {totalItems}</h1>
          <h1>Total Price: {formatCurrency(totalItemsPrice)}</h1>
        </div>
      </div>
    </div>
  );
};

const InputLabel = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
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
        className={`rounded-md border border-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-slate-400 ${
          error ? "border-red-500 focus:ring-0" : ""
        }`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </>
  );
};
