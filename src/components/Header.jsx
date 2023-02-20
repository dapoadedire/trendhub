/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { cart } = useContext(CartContext);
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
      <div className="flex items-center justify-between
      gap-4
      ">
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
          <Link to="/cart" className="relative">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="h-6 w-6
            pr-2 pt-2"
              color="white"
            />
            <span
              className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full  border-2 
              border-white bg-black text-white 
              "
            >
              {cart.length}
            </span>
          </Link>
          <Hamburger toggled={isOpen} toggle={toggleMenu} color="white" />
        </div>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } mt-2 border-t border-white py-4
      md:block md:border-none
      md:py-0
      `}
      >
        <ul className="flex flex-col space-y-4 text-white md:flex-row md:space-x-10 md:space-y-0">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category.toLowerCase()}`}>
                {category}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/cart"
              className="relative pr-2
            pt-2 hover:text-gray-400
            "
            >
              <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
              <span
                className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full  border-2 
              border-white bg-black text-white 
              "
              >
                {cart.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
