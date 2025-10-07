import React from "react";
// import contact from "../assets/contact-image.jpg";
import User from "../assets/user1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="w-full text-lg">
      <div className="mt-20  ml-30 ">
        <h2 className="text-2xl">Our Team</h2>
        <h2 className="text-5xl mt-3">Meet Our Team</h2>
      </div>
      <div className=" grid grid-cols-4 gap-3 max-w-7xl m-auto mt-10 p-3">
        <div className="bg-[#ecf86e] p-8 rounded-2xl shadow-md flex flex-col items-center h-114  gap-4">
          <h3 className="text-3xl">Personalized coaching</h3>
          <p className="align-left">
            One-on-one sessions with our fitness and yoga experts. Get
            personalized guidance and encouragement to reach your specific
            goals.
          </p>

          <button className="mt-24 py-3 px-8 bg-black text-amber-50 rounded-full mr-20">
            View More
          </button>
        </div>

        <div className="group ">
          {/* Image container */}
          <div className="rounded-7xl shadow-md flex flex-col items-center gap-4 overflow-hidden">
            <img
              src={User}
              alt=""
              loading="lazy"
              className="  rounded-3xl h-114 transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Name + role + arrow */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl text-center mt-4">John Doe</h3>
            </div>
            <div className="flex justify-center items-center mt-5 gap-2">
              <p className="text-sm text-center">Fitness Coach</p>
              <FaArrowRightLong className="transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0" />
            </div>
          </div>
        </div>

        <div className="group">
          <div className="rounded-7xl shadow-md flex flex-col items-center gap-4 overflow-hidden">
            <img
              src={User}
              alt=""
              loading="lazy"
              className=" rounded-3xl transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl text-center mt-4">John Doe</h3>
            </div>
            <div className="flex justify-center items-center mt-5 gap-2">
              <p className="text-sm text-center">Fitness Coach</p>
              <FaArrowRightLong className="transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0" />
            </div>
          </div>
        </div>

        <div className="group">
          <div className="rounded-7xl shadow-md flex flex-col items-center gap-4 overflow-hidden">
            <img
              src={User}
              alt=""
              loading="lazy"
              className="rounded-3xl transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl text-center mt-4">John Doe</h3>
            </div>
            <div className="flex justify-center items-center mt-5 gap-2">
              <p className="text-sm text-center">Fitness Coach</p>
              <FaArrowRightLong className="transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
