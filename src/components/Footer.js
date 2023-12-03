// Footer.js

import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" text-gray-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-red-600">TastyBites</h2>
          <p className="text-sm mt-2">
            Explore our delicious menu and enjoy the best food experience.
          </p>
        </div>

        <div className="flex items-center space-x-4  -ml-80">
          <Link to="/aboutus" className="">
            About Us
          </Link>
          <Link to="/menu" className="">
            Menu
          </Link>
          <Link to="/contact" className="">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
          >
            <IoLogoFacebook size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
          >
            <IoLogoTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
          >
            <IoLogoInstagram size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TastyBites. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
