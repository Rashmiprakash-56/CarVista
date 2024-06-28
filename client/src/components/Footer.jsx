import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.svg'

function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700 pt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start pt-10 mb-0 md:pt-10 md:space-x-10 px-4">
        <div className="flex flex-col space-y-4">
        <img src={Logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full" />
          <p>Best Cars around the world</p>
          <h3 className="text-lg font-semibold">Subscribe Now</h3>

          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your Email"
              aria-label="Email"
            />
          </div>
          <button className="bg-black text-white px-4 py-2 mt-2">
            Subscribe
          </button>
        </div>

        {/* Information */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Information</h3>
          <NavLink to="" className="hover:underline">
            About Us
          </NavLink>
          <NavLink to="" className="hover:underline">
            More Search
          </NavLink>
          <NavLink to="" className="hover:underline">
            Testimonials
          </NavLink>
          <NavLink to="" className="hover:underline">
            Events
          </NavLink>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Helpful Links</h3>
          <NavLink to="" className="hover:underline">
            Services
          </NavLink>
          <NavLink to="" className="hover:underline">
            Supports
          </NavLink>
          <NavLink to="" className="hover:underline">
            Terms & Condition
          </NavLink>
          <NavLink to="" className="hover:underline">
            Privacy Policy
          </NavLink>
        </div>

        {/* Our Services */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Our Services</h3>
          <NavLink to="" className="hover:underline">
            Brands list
          </NavLink>
          <NavLink to="" className="hover:underline">
            Order
          </NavLink>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <span>+91 9999 999 999</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>carplace@gmail.com</span>
          </div>
        </div>
      </div>

      {/*bottom part*/}
      <div className="container mx-auto px-4 pt-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 mt-10">
        <p className="text-sm text-gray-600">
          &copy; 2024 company, Ltd. | All Right reserved
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <NavLink to="" className="text-sm text-gray-600 hover:underline">
            FAQ
          </NavLink>
          <NavLink
            to=""
            className="text-sm text-gray-600 hover:underline"
          >
            Privacy
          </NavLink>
          <NavLink
            to=""
            className="text-sm text-gray-600 hover:underline"
          >
            Terms & Condition
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
