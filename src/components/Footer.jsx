/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";



import { BsTelephone, BsInstagram, BsTwitter, BsFacebook, BsLinkedin, BsFillGeoAltFill, BsFillEnvelopeFill } from "react-icons/bs";



const categories = [
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 p-8 text-white">
      <div
        className="container mx-auto
      
      "
      >
        <div
          className="
        grid grid-cols-1 gap-10
        sm:grid-cols-2
        
        xl:grid-cols-4
        "
        >
          <div
            className="
                    "
          >
            <h2 className="mb-4 text-xl font-bold">About Us</h2>
            <p
              className="
          
            leading-relaxed
            text-gray-400
            "
            >
              Shop the Latest Electronics, Jewelry, and Clothing Trends. From
              the latest smartphones and home electronics to stylish men&apos;s
              and women&apos;s clothing, and stunning jewelry pieces, we&apos;ve
              got everything you need to stay on-trend and make a statement, all
              in one convenient online destination.
            </p>
          </div>
          <div className="">
            <h2 className="mb-4 text-xl font-bold">Connect With Us</h2>
            <div
              className="flex
            gap-4
            "
            >
              <h2
                className="font-bold
              text-gray-300
              "
              >
                Follow Us On Social Media:
              </h2>
              {" "}
              <a href="#" className="text-gray-400 hover:text-white"
              aria-label="Twitter"
              >
                <BsTwitter className="h-5 w-5
                hover:text-[#1DA1F2]
                " />
              </a>
              <a href="#" className=" text-gray-400 hover:text-white"
                aria-label = "Linkedin"
              >
                <BsLinkedin className="h-5 w-5
                hover:text-[#0A66C2]
                " />
              </a>
              <a href="#" className=" text-gray-400 hover:text-white"
                aria-label = "Facebook"
              >
                <BsFacebook className="h-5 w-5
                hover:text-[#1877F2]
                " />
              </a>
              <a href="#" className=" text-gray-400 hover:text-white"
                aria-label = "Instagram"
              >
                <BsInstagram className="h-5 w-5
                hover:text-[#E1306C]
                " />
              </a>
            </div>
            <div
              className="mb-10"
            >
              <p className="mt-4 text-gray-400">
                Subscribe to our newsletter to get the latest updates on
                products, offers and more.
              </p>
              <form
                className="mt-4 flex gap-4"

                onSubmit={(e) => {
                  e.preventDefault();
                }
                }

              >
                <label htmlFor="email">
                  <span className="sr-only">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-md border-2 border-gray-400
                  p-2
                  text-gray-900

                  outline-none
                  focus:border-green-700

                  "
                />
                <button
                  aria-label="Subscribe to newsletter"
                  type="submit"
                  className="rounded-md   border-2 border-gray-400
                  bg-green-700 p-2
                  font-bold
                  text-white
                  transition duration-500
                  ease-in-out
                  hover:bg-gray-900
                  hover:text-white
                  "
                >
                  Subscribe
                </button>
              </form>

            </div>
            

          </div>
          <div className="">
            <h2 className="mb-4 text-xl font-bold">Categories</h2>
            <ul className="list-none">
              {categories.map((category, index) => (
                <li key={index} className="mb-2 text-gray-400 hover:text-white">
                  <Link to={`/category/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
            <ul className="list-none">
              <li className="mb-2  flex items-center text-gray-300 hover:text-white">
                <BsFillGeoAltFill className="mr-4" />
               {/* google maps link */}

                <a href="https://goo.gl/maps/4Q4Z9Z9Z9Z9Z9Z9Z9" target="_blank" rel="noreferrer">
                  1234, Main Street, Lagos, Nigeria.
                </a>
              </li>
              <li className="mb-2  flex items-center text-gray-400 hover:text-white">
                <BsTelephone className="mr-4" />
                <a href="tel:(+234) 902 123 4567" target="_blank" rel="noreferrer">(+234) 902 123 4567</a>
              </li>
              <li className="mb-2 flex items-center text-gray-400 hover:text-white">
                <BsFillEnvelopeFill className="mr-4" />
              <a href="mailto:admin@trendhub.com" target="_blank" rel="noreferrer">

admin@trendhub.com
            </a>
              </li>
            </ul>
          </div>
        
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700">
        <div className="container mx-auto py-4">
          <p className="text-center text-gray-200">
            &copy; {new Date().getFullYear()} - <a href="https://twitter.com/dapo_adedire" target="_blank" rel="noreferrer">All Rights Reserved by Dapo
              Adedire &#128526;</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
