import Navbar from "@/app/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#19232D]">
        <Navbar hasBorder={true} isTransparent={false} />
        <h1
          className="text-[#FFF] text-center text-2xl lg:text-3xl font-sans font-bold mt-8"
          style={{ textShadow: "3px 3px 10px black" }}
        >
          My Favorite Models
        </h1>
      </div>
    </>
  );
};

export default page;