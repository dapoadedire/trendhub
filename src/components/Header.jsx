/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import WishList from "./WishList";
import CartContainer from "./CartContainer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleWishList = () => {
    setIsWishListOpen(!isWishListOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const { wishlist, totalItems } = useContext(CartContext);
  const categories = [
    { name: "Electronics", link: "/category/electronics" },
    { name: "Jewelery", link: "/category/jewelery" },
    { name: "Men's Clothing", link: "/category/men's clothing" },
    { name: "Women's Clothing", link: "/category/women's clothing" },
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
    "
    >
      <div className="">
        <Link to="/">
          {" "}
          <h1 className="text-2xl font-bold">TrendHub</h1>
        </Link>
      </div>
      <div
        className="
        flex items-center
        gap-4
        md:hidden
        "
      >
        <button onClick={toggleWishList} className="flex items-center gap-3">
          <FaRegHeart className="scale-[1.3]" />
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
        </button>
        <button className="flex items-center gap-3" onClick={toggleCart}>
          <BsCart className="scale-[1.3] " />
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
        </button>

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
    border-b
    bg-slate-900
    transition-all
    duration-500
    md:static
    md:h-auto

    md:w-auto
    
    md:border-none

    
    ${isOpen ? "h-[250px]" : "h-0"}

    `}
      >
        <ul
          className={`
        
        w-full 
        p-4 
        md:gap-6 
         ${isOpen ? "opacity-100" : "opacity-0"}
         py-6
         text-center
         transition-all
         duration-500
         md:flex
         md:border-none
         md:text-left

         md:opacity-100
         
        `}
        >
          {categories.map((category) => (
            <li
              key={category.name}
              className="group
                mb-6
                hover:text-slate-300
                md:mb-0"
            >
              <Link
                to={category.link}
                className="
                  transition-all
                  duration-500
                  group-hover:border-slate-300
                 
                  "
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
          ))}
          <li
            className="mb-2
                hidden
                md:mb-0
                md:block
                "
          >
            <button
              onClick={toggleWishList}
              className="flex items-center gap-3"
            >
              <FaRegHeart className="scale-150" />
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
            </button>
          </li>
          <li
            className=" hidden
                md:block"
          >
            <button onClick={toggleCart} className="flex items-center gap-4">
              <BsCart className="scale-150" />
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
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={`
      hide-scrollbar
     fixed
      top-0
     
     right-0
      z-50
      h-full
      w-full
      border-t
      bg-slate-900
      sm:w-[50vw]
      

      md:w-[40vw]
      ${isWishListOpen ? "translate-x-0" : "translate-x-full"}
    
      overflow-scroll
      transition-all

      duration-[600ms]

              `}
      >
        <div
          className="sticky top-0 z-50
      
      flex
      h-[80px]
      items-center
      justify-end
      bg-slate-900
      px-6
      py-4
      "
        >
          <button
            onClick={toggleWishList}
            className="flex items-center justify-center rounded-full bg-slate-600 p-2"
          >
            <BsXLg className="scale-[1.3]" />
          </button>
        </div>

        <WishList />
      </div>

      <div
        className={`
      
     fixed
      top-0
     right-0
     z-50
      h-full
      w-full
      border-t
      bg-slate-900
      text-white
      sm:w-[50vw]
      md:w-[40vw]
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}
      
      transition-all
      duration-[600ms]

              `}
      >
        <div
          className="sticky top-0 z-50 flex
      h-[80px]
      items-center
      justify-end bg-slate-900 px-6 py-4"
        >
          <button
            onClick={toggleCart}
            className="flex items-center justify-center rounded-full bg-slate-600 p-2"
          >
            <BsXLg className="scale-[1.3]" />
          </button>
        </div>

        <CartContainer />
      </div>
    </header>
  );
};

export default Header;
