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
    z-50

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
        <h2
        className="text-xl font-bold"
        >
          TrendHub
        </h2>
      </div>
      <div
        className="
        flex items-center
        gap-4
        md:hidden
        "
      >
        <Link to="/wishlist"
          className="flex items-center gap-3"
        >
          <FaRegHeart
            className="scale-[1.3]"
          />
          <span
            className="flex
            
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-red-500
              p-1
              text-xs
font-bold

              "
          >
            {wishlist.length}
          </span>
        </Link>
        <Link to="/cart"
          className="flex items-center gap-3"
        >
          <BsCart
            className="scale-[1.3] "
          />
          <span
            className="flex
            
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-green-500
              p-1
              text-xs
font-bold"
          >
            {totalItems}
          </span>
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
    md:h-auto
    md:w-auto
    

    
    ${isOpen ? "h-[250px]" : "h-0"}

    `}
    >
        <ul
        className={`
        
        w-full border-t
        border-white
        p-4
        md:gap-6 
         ${isOpen ? "opacity-100" : "opacity-0"}
         transition-all
         duration-500
         md:flex
         md:border-none
         md:opacity-100
        `}
        >
          {
            categories.map((category) => (
              <li key={category.name}
                className="group
                mb-2
                hover:text-slate-300
                md:mb-0
                "

              >
                <Link to={category.link} 
                >
                  {category.name}
                </Link>
                <div
                  className="h-[2px] w-0 bg-slate-300 
                transition-all
                duration-500
                group-hover:w-full

                "
                >
                  
                </div>
              </li>
            ))
          }
          <li className="mb-2
                md:mb-0
                ">
            <Link to="/wishlist"
              className="flex items-center gap-4"
            >
              <FaRegHeart 
              className="scale-150"
              />
              <span
              className="flex
            
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-red-500
              p-1
              text-xs
font-bold

              "
              >
                {wishlist.length}
              </span>
            </Link>
           
          </li>
          <li>
            <Link to="/cart"
              className="flex items-center gap-4"
            >
              <BsCart 
                className="scale-150"
              />
              <span
                className="flex
            
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-green-500
              p-1
              text-xs
font-bold"
              >
              {totalItems}
              </span>
            </Link>
          </li>
        </ul>
    </nav>

     

    </header>
  );
};

export default Header;
