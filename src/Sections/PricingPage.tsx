import React from "react";

const PricingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-row md:flex-col  items-center justify-center mt-10 p-8 bg-gray-100">
      <h1 className="text-7xl text-center w-85">Community Classes</h1>
      <p className="mt-8 text-[19px] text-center w-2xl">
        If you're looking to supplement your current fitness routine with small
        group training or just want to join a few classes a month then take a
        look at our class pass options below.
      </p>
      <div className="mt-8 w-7xl flex items-center justify-center gap-6 p-6 ">
        <div className=" bg-[#d0ebff] rounded-2xl shadow-md p-10">
          <div className="">
            <h1>Starter Plans</h1>
            <p className="mt-6">$14.</p>
          </div>
          <p className="text-sm text-left mt-7">Per Use, per month</p>
          <button className="mt-8 bg-[#212529] text-lg text-center w-80 text-white py-2 px-4 rounded-full">
            Contact
          </button>
          <p className="text-sm pt-6">10 fitness training sessions per month</p>
          <p className="text-sm pt-5">Access to online resources</p>
          <p className="text-sm pt-5">Monthly wellness newsletter</p>
        </div>

        <div className=" bg-white rounded-2xl shadow-md p-10">
          <div className="">
            <h1>Basic Plans</h1>
            <p className="mt-6">$29.</p>
          </div>
          <p className="text-sm text-left mt-8">Per Use, per month</p>
          <button className="mt-8 bg-[#212529] text-lg text-center w-80 text-white py-2 px-4 rounded-full">
            Start my 15/days trial
          </button>
          <p className="text-sm pt-6">10 fitness training sessions per month</p>
          <p className="text-sm pt-5">Access to online resources</p>
          <p className="text-sm pt-5">Monthly wellness newsletter</p>
          <p className="text-sm pt-5">
            1 personalized coaching session per monthr
          </p>
        </div>

        <div className=" bg-[#d0ebff] rounded-2xl shadow-md p-10">
          <div className="">
            <h1>Premium Plans</h1>
            <p className="mt-6">$139.</p>
          </div>
          <p className="text-sm text-left mt-7">Per Use, per month</p>
          <button className="mt-8 bg-[#212529] text-lg text-center w-80 text-white py-2 px-4 rounded-full">
            Contact
          </button>
          <p className="text-sm pt-6">10 fitness training sessions per month</p>
          <p className="text-sm pt-5">Access to online resources</p>
          <p className="text-sm pt-5">Monthly wellness newsletter</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
