import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-[#19232D] border-t-2 border-[#FFF] flex items-center justify-between px-4">
      <p className="text-[#FFF] text-xs lg:text-sm font-sans font-medium">
        © 2024 AviaGeek
      </p>
      <div className="flex text-md lg:text-xl space-x-8 lg:space-x-12">
        <Link href="https://www.linkedin.com/in/abhinav-karnatak-9a7667206/">
          <FaLinkedinIn className="text-[#FFF] hover:scale-150 hover:text-[#DCBB87] transition duration-200" />
        </Link>
        <Link href="https://x.com/AbhinavKar941">
          <FaXTwitter className="text-[#FFF] hover:scale-150 hover:text-[#DCBB87] transition duration-200" />
        </Link>
        <Link href="https://github.com/abhinavkarnatak-dev">
          <FaGithub className="text-[#FFF] hover:scale-150 hover:text-[#DCBB87] transition duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;