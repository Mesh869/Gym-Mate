// import React from "react";
import Dumbell from "../assets/dumbells.jpg";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-5xl text-center w-120 m-auto  mt-30">
          Over 200+ reviews from our clients
        </h1>

        <div>
          <div className="grid grid-cols-5 gap-6 w-7xl m-auto mt-20">
            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div>
                  {" "}
                  <img
                    src={user1}
                    alt="user4"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm ">sara Wilson</p>
                  <p className="text-sm">@sara_wilson</p>
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                laudantium debitis harum suscipit velit animi, veritatis
                eligendi! Facilis, fuga qui.
              </p>
              <p className="text-sm ml-20">07.11.2025</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div>
                  {" "}
                  <img
                    src={user2}
                    alt="user4"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm ">sara Wilson</p>
                  <p className="text-sm">@sara_wilson</p>
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                laudantium debitis harum suscipit velit animi, veritatis
                eligendi! Facilis, fuga qui.
              </p>
              <p className="text-sm ml-20 text-[#adb5bd]">15.11.2025</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div>
                  {" "}
                  <img
                    src={user1}
                    alt="user4"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm ">sara Wilson</p>
                  <p className="text-sm">@sara_wilson</p>
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                laudantium debitis harum suscipit velit animi, veritatis
                eligendi! Facilis, fuga qui.
              </p>
              <p className="text-sm ml-20 text-[#adb5bd]">15.11.2025</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div>
                  {" "}
                  <img
                    src={user2}
                    alt="user4"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm ">sara Wilson</p>
                  <p className="text-sm">@sara_wilson</p>
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                laudantium debitis harum suscipit velit animi, veritatis
                eligendi! Facilis, fuga qui.
              </p>
              <p className="text-sm ml-20 text-[#adb5bd]">20.10.2025</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div>
                  {" "}
                  <img
                    src={user1}
                    alt="user4"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm ">sara Wilson</p>
                  <p className="text-sm">@sara_wilson</p>
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                laudantium debitis harum suscipit velit animi, veritatis
                eligendi! Facilis, fuga qui.
              </p>
              <p className="text-sm ml-20 text-[#adb5bd]">10.09.2025</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-20 mb-20 w-7xl m-auto gap-6 bg-[#2d2d2d] p-10 rounded-2xl">
          <div>
            <h1 className="text-5xl w-150 text-white">
              Clearmind, your partner in mental wellness.
            </h1>
            <p className="mt-6 text-lg w-110 text-white">
              Find and book your favorite yoga classes from anywhere with our
              yoga app.
            </p>
            <button className="px-6 py-4 rounded-full bg-white text-[#212529] text-sm mt-10">
              join Member
            </button>
          </div>
          <div>
            <img
              src={Dumbell}
              alt="dumbell"
              className="w-140 h-90 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
