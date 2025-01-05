"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { LogIn, UserPlus } from "lucide-react";
import { useSession } from "next-auth/react";
import Profile from "./Profile";

const Navbar = ({ hasBorder, isTransparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggleMenu = () => setIsOpen(!isOpen);

  const dropdownRef = useRef(null);

  useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <nav
      className={`w-full ${
        isTransparent ? "bg-transparent" : "bg-[#19232D]"
      } text-[#DCBB87] ${hasBorder ? "border-b-2 border-[#FFF]" : ""}`}
    >
      <div className="flex items-center justify-between p-4 pl-0 pr-0 lg:p-4 mx-8 relative" ref={dropdownRef}>
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dn8lt4rqf/image/upload/v1736059385/AviaGeek-Logo_pow1r7.png"
            className="w-24 lg:w-36"
            alt="Logo"
          />
        </Link>

        <div
          className={`${
            isOpen ? "fixed top-4 right-8 z-50" : "relative"
          } lg:hidden`}
        >
          <button onClick={toggleMenu} className="text-[#DCBB87] text-2xl">
            ☰
          </button>
        </div>

        <ul
          className={`${
            isOpen
              ? "fixed top-0 left-0 w-full h-auto bg-[#19232D] border-b-2 border-[#FFF] z-40 flex flex-col items-start lg:items-center p-8 space-y-6"
              : "hidden"
          } lg:flex lg:space-x-8 lg:static lg:w-auto lg:h-auto lg:p-0 lg:bg-transparent lg:items-center`}
        >
          <li className="text-center">
            <Link href="/" className="font-semibold link">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link href="/Aircrafts" className="font-semibold link">
              Aircrafts
            </Link>
          </li>
          <li className="text-center">
            <Link href="/Compare" className="font-semibold link">
              Compare
            </Link>
          </li>

          {status === "authenticated" ? (
            <>
              <li>
                <Profile />
              </li>
            </>
          ) : (
            <>
              <li className="text-center">
                <Link href="/pages/login">
                  <button className="h-10 bg-[#dcbb87] text-[#19232d] font-semibold py-2 px-4 rounded-xl hover:bg-[#c5a876] transition-colors duration-300 flex items-center space-x-2">
                    <LogIn size={18} />
                    <span>Login</span>
                  </button>
                </Link>
              </li>
              <li className="text-center">
                <Link href="/pages/signup">
                  <button className="w-32 h-10 bg-[#19232D] border-2 border-[#dcbb87] text-[#dcbb87] font-semibold py-2 px-4 rounded-xl hover:bg-[#dcbb87] hover:text-[#19232d] transition-colors duration-300 flex items-center space-x-2">
                    <UserPlus size={18} />
                    <span>Sign Up</span>
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;