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
            {/* Dropdown Button */}
            <button className="flex items-center justify-between gap-3 px-4 py-2 bg-gray-500/30 text-white text-sm rounded-md  ">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-4"
              >
                <path d="M17 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM17 15.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM3.75 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM4.5 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM10 11a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 10 11ZM10.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.75 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16.25 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </button>

            {/* Dropdown Items */}
            {isOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border text-sm text-black  rounded-md shadow-lg">
                <ul className="py-2">
                  {menuItems.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/*logo icon */}
          <div className="flex items-center">
            <FaBolt className="text-white" />
            <span className="ml-2 text-lg text-white font-semibold">
              Gym Mate
            </span>
          </div>

          {/*join now btn */}
          <div className="mt-4">
            <button className="px-8 py-3 bg-white text-black text-lg rounded-3xl shadow hover:bg-gray-100 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
