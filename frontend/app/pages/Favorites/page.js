"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState, useEffect } from "react";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    const timeout = setTimeout(handleLoad, 100);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-[#19232D]">
        <h1 className="text-[#DCBB87] text-lg font-semibold">Loading...</h1>
      </div>
    );
  }

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