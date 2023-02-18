/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  // };

  return (
    <header className="bg-gray-800 p-8 text-white">
      <div>
        <a href="#">Logo</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              <span>Cart</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
        </ul>
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
