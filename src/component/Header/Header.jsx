import React, { useState } from "react"
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="2xl:container bg-[#a97e55] mx-auto p-3">
      <div className="w-[90%] text-white  text-xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {/* logo */}
        <div className="flex justify-between">
          <div className="flex flex-row justify-center items-center">
            <Link to="/">
              <img className="h-20 mr-1" src="https://ik.imagekit.io/pvrlbjuaj/MERN%20stack/Bakery%20Logo.png" alt="" />
            </Link>
            <p className="text-[#5e2614] lg:text-3xl sm:text-2xl font-bold">Premium Bakery</p>

          </div>
          {/* <div className="flex flex-col justify-center items-center ml-2 md:ml-0">
          </div> */}
          <div className="fle">
            {/* Menu Toggle Icon */}
            {show ? (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
                aria-label="Close menu">
                <g fill="none" fillRule="evenodd" stroke="currentColor">
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            ) : (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                aria-label="Open menu">
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
              </svg>
            )}
          </div>
        </div>
        {/* content */}
        <div className={show ? "block" : "hidden md:block"}>
        
            <ul className="p-4 lg:border-4 lg:bg-black border-rose-800 rounded-full text-white font-bold text-xl flex flex-col justify-center items-center md:flex-row md:justify-end gap-4">
              <li id="home">
                <Link className="hover:text-white" to="/" onClick={toggle}>
                  {/* onClick - TO GET Auto Close Feature */}
                  Home
                </Link>
              </li>
              <Link className="relative text-white hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" to="/fresh" onClick={toggle}>
                FreshBakes
              </Link>
              <Link className="relative text-white hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" to="/features1" onClick={toggle}>
                Features
              </Link>
              <Link className="relative text-white hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" to="/rating" onClick={toggle}>
                Ratings
              </Link>
              <Link className="relative text-white hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" to="/contact" onClick={toggle}>
                Contact
              </Link>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header