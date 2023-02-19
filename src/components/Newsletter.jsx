import React, { useState } from "react";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add logic to subscribe user to newsletter
    };

    return (
        <div className="my-20
        rounded-md border
        border-gray-200 
          bg-gradient-to-r
       from-gray-50
       to-gray-100 bg-fixed py-8
       px-4
       
       sm:px-6
       lg:px-8
        ">
            <div className="
            mx-auto w-full
            max-w-4xl
            sm:px-6 lg:px-8

           
            ">
                <div className="">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Stay up-to-date with the latest deals, discounts, and promotions from our store. Sign up for our newsletter and receive exclusive offers, new product announcements, and helpful tips straight to your inbox.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="
                mt-8 ">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="
                        
                        w-full appearance-none rounded-md border border-gray-300 px-5 py-3 leading-5 shadow-sm  "
                    />
                    <button
                        type="submit"
                        className=" 
                        mt-4  w-full rounded-md border border-transparent bg-green-700 px-5 py-3 text-base font-medium text-white shadow-sm transition duration-150 
                        ease-in-out
                        
                        "
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterForm;
