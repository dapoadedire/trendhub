/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="3xl:px-32 flex
     w-full
     flex-col
     bg-gray-800
    p-4
    text-white

    sm:flex-row
    sm:justify-between
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20
    2xl:px-24
    "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl">$tyloForm</h3>

        <div className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
      </div>
      <nav
        className={`
      
      ${isOpen ? "block" : "hidden"}
      py-4
      sm:block
      sm:py-0
      `}
      >
        <ul
          className="flex flex-col space-y-4
        text-white
        sm:flex-row
        sm:space-x-4 sm:space-y-0
        "
        >
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#">
              Products
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
      </nav>
    </header>
  );
};
export default Header;


