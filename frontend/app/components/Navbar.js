"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ hasBorder, isTransparent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`w-full ${isTransparent ? "bg-transparent" : "bg-[#19232D]"} text-[#DCBB87] ${hasBorder ? "border-b-2 border-[#FFF]" : ""}`}
    >
      <div className="flex items-center justify-between p-4 pl-0 pr-0 lg:p-4 mx-8 relative">
        <Link href="/">
          <img src="/images/AviaGeek-Logo.png" className="w-24 lg:w-36" alt="Logo" />
        </Link>

        <div className={`${isOpen ? "fixed top-4 right-8 z-50" : "relative"} md:hidden`}>
          <button onClick={toggleMenu} className="text-[#DCBB87] text-2xl">
            ☰
          </button>
        </div>

        <ul
          className={`${isOpen ? "fixed top-0 left-0 w-full h-auto bg-[#19232D] border-b-2 border-[#FFF] z-40 flex flex-col justify-start p-8 space-y-6" : "hidden"} md:flex md:space-x-12 md:static md:w-auto md:h-auto md:p-0 md:bg-transparent`}
        >
          <li>
            <Link href="/" className="font-semibold link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages/Aircrafts" className="font-semibold link">
              Aircrafts
            </Link>
          </li>
          <li>
            <Link href="/pages/Compare" className="font-semibold link">
              Compare
            </Link>
          </li>
          <li>
            <Link href="/pages/News" className="font-semibold link">
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;