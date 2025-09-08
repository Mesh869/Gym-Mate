// import React from "react";
import { FaBolt } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full min-h-120  bg-[#2d2d2d] text-white ">
        <div className="max-w-7xl flex items-center justify-between mx-auto py-20 px-4 ">
          <div className="w-250 h-20 ">
            <div className="">
              <div className="flex items-center">
                <FaBolt className="text-white text-5xl" />
                <span className="ml-2 text-2xl text-white font-semibold">
                  Gym Mate
                </span>
              </div>
              <p className="text-[20px] text-gray-300 mt-5">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <div className="flex gap-6 items-center mt-5">
                <div className="flex flex-col">
                  <label htmlFor="#" className="text-[20px] text-gray-200">
                    Enter your email
                  </label>
                  <input
                    type="text"
                    className="border-b border-gray-400 bg-transparent w-70"
                  />
                </div>
                <button className="bg-white text-[#868e96] text-[17px] px-8 py-4 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>

            {/*contact icons */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-gray-300  p-2 bg-white rounded-md ">
                {/* Add your icon here */}
                <FaXTwitter className="text-[#868e96] text-sm" />
              </a>
              <a href="#" className="text-gray-300 p-2 rounded-md bg-white ">
                {/* Add your icon here */}
                <FaFacebookF className="text-[#868e96] text-sm" />
              </a>
              <a href="#" className="text-gray-300 p-2 rounded-md bg-white">
                {/* Add your icon here */}
                <SlSocialInstagram className="text-[#868e96] text-sm" />
              </a>
              <a href="#" className="text-gray-300 p-2 rounded-md bg-white">
                {/* Add your icon here */}
                <FaLinkedinIn className="text-[#868e96] text-sm " />
              </a>
            </div>
          </div>

          <div className="  flex  items-center  justify-around w-3/5 h-40">
            <div className="grid grid-cols-4 gap-2 w-full mt-20">
              <ul className="text-sm">
                <li className="text-[#a9a9a9]">
                  <a href="#" className="mb-2">
                    Style Guide
                  </a>
                </li>
                <li className="text-[#a9a9a9] p-6">
                  <a href="#">hello</a>
                </li>
                <li className="text-[#a9a9a9] p-6">
                  <a href="#">hello</a>
                </li>
              </ul>
              <ul className="text-sm">
                <li className="text-[#a9a9a9]">
                  <a href="#" className="mb-2">
                    Lisencing
                  </a>
                </li>
                <li className="text-[#a9a9a9] p-6">
                  <a href="#">hello</a>
                </li>
                <li className="text-[#a9a9a9] p-6">
                  <a href="#">hello</a>
                </li>
              </ul>
              <ul className="text-sm">
                <li className="text-[#a9a9a9]">
                  <a href="#" className="pl-6">
                    Blog
                  </a>
                </li>
                <li className="text-[#a9a9a9] p-6">
                  <a href="#">hello</a>
                </li>
                <li className="text-[#a9a9a9] p-6">
                  <a href="#">hello</a>
                </li>
              </ul>
              <ul className="text-sm">
                <li className="text-[#a9a9a9]">
                  <a href="#" className="mb-2">
                    Contact Us
                  </a>
                </li>
                <li className="text-[#a9a9a9] p-4">
                  <a href="#">hello</a>
                </li>
                <li className="text-[#a9a9a9] p-4">
                  <a href="#">hello</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
