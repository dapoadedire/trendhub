/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsXLg, BsArrowUp } from "react-icons/bs";
import WishList from "./WishList";
import CartContainer from "./CartContainer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 400
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const toggleWishList = () => {
    setIsWishListOpen((isWishListOpen) => !isWishListOpen);
  };

  const toggleCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
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

    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20
    
    "
    >
      <div className="">
        <Link to="/">
          <h1
            className="text-2xl
          font-semibold
         


          "
          >
            TrendHub
          </h1>
        </Link>
      </div>
      <div
        className="
        flex items-center
        gap-4
        md:hidden
        "
      >
        <button
          aria-label="wishlist"
          onClick={toggleWishList}
          className="flex items-center gap-3"
        >
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
        <button
          aria-label="cart"
          className="flex items-center gap-3"
          onClick={toggleCart}
        >
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
         text-sm
         font-semibold
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
              ></div>
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
              aria-label="wishlist"
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
            <button
              aria-label="cart"
              onClick={toggleCart}
              className="flex items-center gap-4"
            >
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
          className="sticky top-0
           z-50
      
      flex
      items-center
      justify-end
      bg-slate-900
      p-4
     
      "
        >
          <button
            aria-label="close wishlist"
            onClick={toggleWishList}
            className="flex items-center justify-center rounded-full
          border
            border-slate-600
            bg-slate-700
            p-3
            hover:bg-slate-600"
          >
            <BsXLg className="scale-[1.1]" />
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
          className="sticky top-0
           z-50
      
      flex
      items-center
      justify-end
      bg-slate-900
      p-4
     
      "
        >
          <button
            aria-label="close cart"
            onClick={toggleCart}
            className="flex items-center justify-center rounded-full
          border
            border-slate-600
            bg-slate-700
            p-3
            hover:bg-slate-600"
          >
            <BsXLg className="scale-[1.1]" />
          </button>
        </div>

        <CartContainer />
      </div>

      {showScrollButton && (
        <button
          aria-label="scroll to top"
          onClick={scrollToTop}
          className="fixed bottom-10 right-10
            rounded-full
            border
            border-white
            bg-slate-900
            p-3
            transition-all
            duration-500

            

            hover:animate-bounce
            hover:bg-white
            hover:text-slate-900

            "
        >
          <BsArrowUp
            className="scale-[1.2]
            font-bold
            "
          />
        </button>
      )}
    </header>
  );
};

export default Header;
