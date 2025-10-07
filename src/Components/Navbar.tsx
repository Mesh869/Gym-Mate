import { useState } from "react";
import { FaBolt } from "react-icons/fa6";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "Trainers", href: "/trainers" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Plans", href: "/plans" },
  { label: "Contact Us", href: "/contact" },
];

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Dropdown Button - Now widens to match dropdown on hover */}
            <button
              className={`flex items-center justify-between gap-3 px-4 py-2 bg-gray-500/30 text-white text-sm rounded-xl transition-all duration-300 ease-in-out ${
                isOpen ? "px-5" : "w-auto"
              }`}
            >
              <span
                className={
                  isOpen ? "opacity-100" : "opacity-100 transition-opacity"
                }
              >
                More
              </span>{" "}
              {/* Optional: Fade out "More" text on expand for cleaner look */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`transition-all duration-300 ease-in-out ml-auto ${
                  isOpen ? "w-6 h-5" : "size-2"
                }`} // ml-auto pushes it to the far right end; keeps size expansion
              >
                <path d="M17 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM17 15.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM3.75 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM4.5 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM10 11a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 10 11ZM10.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.75 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16.25 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </button>

            {/* Dropdown Items */}
            <div
              className={`absolute left-0 mt-2 w-35 bg-gray-500/30 border text-sm text-black rounded-xl shadow-lg transition-all duration-300 ease-in-out transform ${
                isOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-[-10px] scale-95"
              }`}
            >
              <ul className="py-2">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-white hover:text-[#ced4da] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo icon */}
          <div className="flex items-center  ">
            <FaBolt className="text-white" />
            <span className="ml-2 text-lg text-white font-semibold">
              Gym Mate
            </span>
          </div>

          {/* Join now btn */}
          <div className="mt-4">
            <button className="px-6 py-2 bg-white text-black text-lg rounded-3xl shadow hover:bg-gray-100 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale:110 ">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
