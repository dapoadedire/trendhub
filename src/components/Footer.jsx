/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";

import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";

import { CiLocationOn } from "react-icons/ci";

import { BsTelephone } from "react-icons/bs";

import { AiOutlineMail } from "react-icons/ai";

const categories = [
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

const Footer = () => {
  return (
    <footer className=" bg-slate-900 p-8 text-white">
      <div
        className="container mx-auto
      
      "
      >
        <div
          className="
        grid grid-cols-1 gap-8
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4"
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
            <h2 className="mb-4 text-xl font-bold">Categories</h2>
            <ul className="list-none">
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
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
              <li className="mb-2">
                <CiLocationOn className="mr-2" />
                123 Main St, Anytown USA
              </li>
              <li className="mb-2">
                <BsTelephone className="mr-2" />
                (123) 456-7890
              </li>
              <li className="mb-2">
                <AiOutlineMail className="mr-2" />
                info@website.com
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-4 text-xl font-bold">Connect With Us</h2>
            <div className="flex">
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <SlSocialLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <SlSocialFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <SlSocialInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <SlSocialTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700">
        <div className="container mx-auto py-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} - All Rights Reserved by Dapo
            Adedire &#128526;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
