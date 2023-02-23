/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
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
  const categories = [
    { name: "Electronics", link: "/category/electronics" },
    { name: "Jewelery", link: "/category/jewelery" },
    { name: "Men's Clothing", link: "/category/mens-clothing" },
    { name: "Women's Clothing", link: "/category/womens-clothing" },
  ];

  return (
    <header
    className="
    sticky
    inset-x-0
    top-0
    flex

    h-[80px]
    w-full
    items-center
    justify-between
    bg-slate-900
    px-4
    text-white
    ">
      <div
      className=""
      >
        TrendHub
      </div>
      <div
        className="
        flex items-center
        gap-4
        md:hidden
        "
      >
        <Link to="/wishlist"
          className="flex items-center gap-2"
        >
          <FaRegHeart />
          {wishlist.length}
        </Link>
        <Link to="/cart"
          className="flex items-center gap-2"
        >
          <BsCart />
          {totalItems}
        </Link>

        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          size={20}
          label="Show menu"
        />

      </div>
    <nav
    className={`
    absolute
    top-[80px]
    left-0
    w-full
    

    overflow-hidden
    bg-slate-900
    transition-all
    duration-500
    md:static
    md:w-auto
    md:h-auto
    

    
    ${isOpen ? "h-[250px]" : "h-0"}

    `}
    >
        <ul
        className={`
        
        w-full border-t
        border-white
        p-4
        md:gap-3 
         ${isOpen ? "opacity-100" : "opacity-0"}
         transition-all
         duration-500
         md:flex
         md:opacity-100
        `}
        >
          {
            categories.map((category) => (
              <li key={category.name}
                className="mb-2
                md:mb-0
                "

              >
                <Link to={category.link} 
                >
                  {category.name}
                </Link>
              </li>
            ))
          }
          <li className="mb-2
                md:mb-0
                ">
            <Link to="/wishlist"
              className="flex items-center gap-2"
            >
              <FaRegHeart />
              {wishlist.length}
            </Link>
           
          </li>
          <li>
            <Link to="/cart"
              className="flex items-center gap-2"
            >
              <BsCart />
              {totalItems}
            </Link>
          </li>
        </ul>
    </nav>

     

    </header>
  );
};

export default Header;
