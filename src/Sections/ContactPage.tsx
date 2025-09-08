// import React from "react";
import ContactImg from "../assets/contact-image.jpg";

const ContactPage = () => {
  return (
    <>
      <div className="mt-10 py-20">
        <div className="flex items center justify-between w-7xl m-auto ">
          <div className=" grid grid-cols-2 gap-6 ">
            <div>
              <img
                src={ContactImg}
                alt="contact-img"
                className="rounded-2xl h-150"
              />
            </div>
            <div className="p-13 bg-[#ecf86e] rounded-xl">
              <h1 className="text-5xl">Get in touch.</h1>
              <p className="mt-10 text-lg">
                I want to help you overcome all mental and physical hurdles in
                your everyday life. 6 Years ago, I was electrocuted with 277
                volts.
              </p>

              <div>
                <div className=" mt-8 text-lg flex flex-col gap-6">
                  <label htmlFor="#">Email (required)</label>
                  <input type="text" className="border-b-2" />
                </div>
                <div className=" mt-8 text-lg flex flex-col gap-6">
                  <label htmlFor="#">Message (required)</label>
                  <input type="text" className="border-b-2" />
                </div>
              </div>
              <button className=" mt-8 py-4 px-6 bg-[#212529] rounded-full text-white text-sm">
                Join Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
