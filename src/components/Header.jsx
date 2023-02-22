/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Fade as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { wishlist, totalItems } = useContext(CartContext);
  // console.log(cart);

  const categories = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  return (
    <header
      className="3xl:px-32 sticky top-0 z-50 flex w-full flex-col bg-slate-900 p-4 shadow-2xl md:flex-row md:justify-between md:px-12 lg:px-16 xl:px-20
      2xl:px-24
      "
    >
      <div
        className="flex items-center justify-between
      gap-4
      "
      >
        <Link to="/">
          <h3
            className="text-xl
          text-white
          "
          >
            TrendHub
          </h3>
        </Link>

        <div
          className="flex items-center
        gap-4
        md:hidden

        "
        >
          <Link
            to="/cart"
            className="
             flex
             items-center hover:text-gray-400
            "
          >
            <BsCart className="mr-3
            scale-150
            text-white
            "

            />
            <span
              className=" rounded-full
             bg-green-600
             px-1
             text-xs
             font-medium
             text-white
             "
            >
              {totalItems > 0 ? totalItems : ""}
            </span>

          </Link>
          <Link
            to="/wishlist"
            className="
             flex
             items-center hover:text-gray-400
            "
          >
            <FaRegHeart className="mr-3
            scale-150
            text-white
            " />
            <span
              className=" rounded-full
             
             bg-red-500
             px-1
             text-xs
             
             text-gray-100 
             "
            >
              {wishlist.length > 0 ? wishlist.length : ""}
            </span>



          </Link>
          <Hamburger toggled={isOpen} toggle={toggleMenu} 
          duration={1}
          color="white" />
        </div>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } mt-2 border-t border-white py-4 md:block md:border-none md:py-0`}
      >
        <ul className="
        
        flex flex-col space-y-4 text-white md:flex-row md:space-x-10 md:space-y-0
        
        ">
          {categories.map((category, index) => (
            <li key={index}
            className="
           group
           hover:text-gray-100
            "
            >
              <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
              <p
              className="
              invisible
              h-[1px]
              w-0
              bg-gray-100
              
              transition-all
              duration-500
              group-hover:visible
              group-hover:w-full
              "
              >

              </p>
            </li>
          ))}
          <li
          className="hidden md:block"
          >
            <Link
              to="/cart"
              className="
             flex
             items-center hover:text-gray-400
            "
            >
            <BsCart className="mr-3
            scale-150
            text-white
            " 
            
            />
             <span
             className=" rounded-full
             bg-green-600
             px-1
             text-xs
             font-medium
             text-white
             "
             >
              {totalItems > 0 ? totalItems : ""}
             </span>
              
            </Link>
          </li>
          <li
          className="hidden md:block"
          >
            <Link
              to="/wishlist"
              className="
             flex
             items-center hover:text-gray-400
            "
            >
              <FaRegHeart className="mr-3
            scale-150
            text-white
            " />
              <span
                className=" rounded-full
             
             bg-red-500
             px-1
             text-xs
             
             text-gray-100 
             "
              >
                {wishlist.length > 0 ? wishlist.length : ""}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
