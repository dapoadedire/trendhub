/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const categories = [
  //   "Electronics",
  //   "Jewelery",
  //   "Men's Clothing",
  //   "Women's Clothing",
  // ];

  return (
    <header className="3xl:px-32 sticky top-0 z-50 flex w-full flex-col bg-gray-800 p-4 text-white shadow-2xl sm:flex-row sm:justify-between sm:px-8 md:px-12 lg:px-16 xl:px-20
    2xl:px-24 
    ">
      <div className="flex items-center justify-between">
        <Link to="/">
          <h3 className="text-xl">TrendHub</h3>
        </Link>

        <div className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
      </div>

      <nav className={`${isOpen ? "block" : "hidden"} mt-2 border-t border-white py-4
      sm:block sm:border-none
      sm:py-0
      `}>
        <ul className="flex flex-col space-y-4 text-white sm:flex-row sm:space-x-4 sm:space-y-0">
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
          <li className="relative">
            <a className="hover:text-gray-400" href="#">
              Category
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#">
              <span className="pr-4">Cart</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
        </ul>
        {/* <div className="hidden sm:block">
          <ul className="flex space-x-4 text-gray-400">
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/category/${category.toLowerCase()}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
