import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiGitlabLogoBold } from "react-icons/pi";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className=" bg-white">
        <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4 shadow-md">
          {/* For large and Medium-sized Screen */}
          <div className="flex justify-between ">
            <div className="hidden sm:flex flex-row items-center space-x-6">
              <FaXTwitter className="text-gray-800"/>
              <FaFacebookF className="text-gray-800"/>
              <FaLinkedinIn className="text-gray-800"/>
              <FaInstagram className="text-gray-800"/>
            </div>
            <div className=" flex space-x-3 items-center">
              <PiGitlabLogoBold className="text-3xl text-gray-800"/>
              <h1 className=" font-semibold text-2xl leading-6 text-gray-800">
                CornerShop
              </h1>
            </div>
            <div className="hidden sm:flex flex-row space-x-4 text-gray-800">
              <Link to="/" className="font-semibold">Home</Link>
              <Link to="/" className="font-semibold">Categories</Link>
              <Link to="/" className="font-semibold">About Us</Link>
              <Link to="/" className="font-semibold">Contact</Link>
              
            </div>
            {/* Burger Icon */}
            <div
              id="bgIcon"
              onClick={() => setshow(!show)}
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
            >
              <svg
                className={`${show ? "hidden" : ""}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" transform duration-150"
                  d="M4 6H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className=" transform duration-150"
                  d="M4 18H20"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className={`${show ? "block" : "hidden"}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Mobile and small-screen devices (toggle Menu) */}
          <div
            id="MobileNavigation"
            className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
          >
            <div className="gird grid-cols items-center justify-center mx-auto">
            <div className="grid grid-cols lg:gap-x-12">
              <Link to="/" class="text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-800 hover:text-white px-2 mb-2">
                Home
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-800 hover:text-white px-2 mb-2">
                Categories
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-800 hover:text-white px-2 mb-2">
                About Us
              </Link>
              <Link to="/" className="text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-800 hover:text-white px-2 mb-2">
                Contact Us
              </Link>
              
              {/* <div className="hidden sm:flex flex-row space-x-4">
                <Link to="/signup" className="rounded-sm flex space-x-2 px-2 h-8 font-semibold text-sm leading-3 text-white bg-green-500 focus:outline-none hover:bg-green-600 duration-150 justify-center items-center">
                  Create New Account
                </Link>
                <Link  to="/login" className="rounded-sm flex space-x-2 h-8 font-semibold text-sm leading-3 text-white bg-none border bg-transparent px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-white hover:text-gray-900 duration-150 justify-center items-center">
                  Go to your Account
                </Link>
              </div> */}
            </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-6">
              <FaXTwitter className="text-gray-800"/>
              <FaFacebookF className="text-gray-800"/>
              <FaLinkedinIn className="text-gray-800"/>
              <FaInstagram className="text-gray-800"/>
            </div>
            
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
