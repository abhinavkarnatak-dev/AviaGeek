import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#19232D] ">
        <Navbar hasBorder={true} isTransparent={false} />
        <div className="mt-8">
          <h1
            className="text-[#FFF] text-center text-2xl lg:text-3xl font-sans font-bold"
            style={{ textShadow: "3px 3px 10px black" }}
          >
            Mitsubishi
          </h1>
          <p className="text-[#DCBB87] text-center mt-10">
            This page is under development
          </p>
          <p className="text-[#FFF] text-center mt-2">
            <Link href="/" className="text-blue-600">
              Click Here
            </Link>{" "}
            to go to the home page
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
