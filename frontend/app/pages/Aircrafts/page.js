"use client";

import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-[#19232D]">
      {/* Navbar */}
      <div className="border-b-2 border-[#FFF]">
        <Link href={"/"}>
          <img src="/images/AviaGeek-Logo.png" className="w-36 p-4" />
        </Link>
        <ul className="absolute top-0 right-0 flex space-x-10 p-6 mr-8 text-[#DCBB87] hover:text-[#FFF] font-sans font-semibold">
          <li>
            <Link href={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/pages/Aircrafts"} className="link">
              Aircrafts
            </Link>
          </li>
          <li>
            <Link href={"/pages/Compare"} className="link">
              Compare
            </Link>
          </li>
          <li>
            <Link href={"/pages/News"} className="link">
              News
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Section */}
      <div className="mt-8">
        <h1
          className="text-[#FFF] text-center text-3xl font-sans font-bold"
          style={{ textShadow: "3px 3px 10px black" }}
        >
          Aircrafts
        </h1>
      </div>
    </div>
  );
};

export default Page;