import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.yzec_fashionslogo} className="mb-5 w-32" />
          <p className="w-full md:w-6/12 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            nostrum, ipsum libero saepe veniam cupiditate dolorem rerum, vero
            asperiores
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@yzecfashion.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-200" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ yzecfashions.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
