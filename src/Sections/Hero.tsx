// import React from "react";
import Navbar from "../Components/Navbar";
import gymvid from "../../public/videos/gym.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={gymvid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay (optional for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-[#868e96">Gym Mate</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl w-full  max-w-2xl text-center">
          Join us in transforming your body and mind through our comprehensive
          yoga and fitness programs.
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-red-600 rounded-lg text-lg font-semibold">
          Join Now
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
