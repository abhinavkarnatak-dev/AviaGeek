"use client";
import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import ManufacturerCard from "./components/ManufacturerCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Page = () => {
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

  const handleScroll = () => {
    const element = document.getElementById("section-two");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section>
        <div
          className="h-screen w-full bg-cover bg-center relative bg-[#19232D] border-b-2 border-[#FFF]"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dn8lt4rqf/image/upload/v1736059385/front-pattern_vwboqg.png')" }}
        >
          <Navbar hasBorder={false} isTransparent={true} />

          <div className="pt-24 lg:pt-32">
            <h1
              className="text-[#FFF] text-2xl lg:text-[40px] font-sans font-bold ml-0 lg:ml-24 text-center lg:text-start"
              style={{ textShadow: "3px 3px 10px black" }}
            >
              Welcome to <span className="text-[#DCBB87]">"AviaGeek"</span>
            </h1>
            <h1
              className="text-[#FFF] text-xl lg:text-[40px] mt-0 lg:mt-8 ml-0 lg:ml-24 font-sans font-bold text-center lg:text-start"
              style={{ textShadow: "3px 3px 10px black" }}
            >
              Your Aircraft Model{" "}
              <span className="text-[#DCBB87]">
                <ReactTyped
                  strings={["Guide", "Details", "Insights", "Resource"]}
                  typeSpeed={150}
                  backSpeed={150}
                  loop={true}
                  showCursor={true}
                />
              </span>
            </h1>
            <p
              className="w-full lg:w-5/12 text-base lg:text-xl text-[#FFF] pl-12 lg:pl-0 pr-12 lg:pr-0 font-sm ml-0 lg:ml-24 mt-10 text-justify lg:text-start"
              style={{ textShadow: "3px 3px 10px black" }}
            >
              AviaGeek is your ultimate destination for in-depth information on
              a wide range of aircraft models.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              className="text-white bg-[#19232D] text-xs lg:text-xl font-bold border lg:border-2 rounded-lg lg:rounded-xl p-2 ml-0 lg:ml-24 mt-16
        shadow-[1px_1px_5px_#FFF] hover:text-[#DCBB87] hover:border-[#DCBB87] hover:shadow-[1px_1px_5px_#DCBB87]"
              onClick={handleScroll}
            >
              Read More
            </button>
          </div>

          <div className="animate-icon-01 absolute top-[48%] left-[62%] lg:top-[33%] lg:left-[52%] transform -translate-x-1/2 animate-cross-rotate z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.094"
              height="21.094"
              viewBox="0 0 21.094 21.094"
            >
              <g data-name="Group1" opacity="0.505">
                <rect
                  data-name="Rectangle1"
                  width="26"
                  height="3"
                  transform="translate(2.207 0) rotate(45)"
                  fill="#f8b65d"
                ></rect>
                <rect
                  data-name="Rectangle2"
                  width="26"
                  height="3"
                  transform="translate(21.093 2.207) rotate(135)"
                  fill="#f8b65d"
                ></rect>
              </g>
            </svg>
          </div>
          <div className="animate-icon-02 absolute top-[10%] left-[20%] transform -translate-x-1/2 animate-cross-rotate z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.094"
              height="21.094"
              viewBox="0 0 21.094 21.094"
            >
              <g data-name="Group1" opacity="0.50">
                <rect
                  data-name="Rectangle3"
                  width="26"
                  height="3"
                  transform="translate(2.207 0) rotate(45)"
                  fill="#f8b65d"
                ></rect>
                <rect
                  data-name="Rectangle4"
                  width="26"
                  height="3"
                  transform="translate(21.093 2.207) rotate(135)"
                  fill="#f8b65d"
                ></rect>
              </g>
            </svg>
          </div>
          <div className="animate-icon-03 absolute bottom-[12%] left-[15%] transform -translate-x-1/2 animate-cross-rotate z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.094"
              height="21.094"
              viewBox="0 0 21.094 21.094"
            >
              <g data-name="Group1" opacity="0.50">
                <rect
                  data-name="Rectangle5"
                  width="26"
                  height="3"
                  transform="translate(2.207 0) rotate(45)"
                  fill="#f8b65d"
                ></rect>
                <rect
                  data-name="Rectangle6"
                  width="26"
                  height="3"
                  transform="translate(21.093 2.207) rotate(135)"
                  fill="#f8b65d"
                ></rect>
              </g>
            </svg>
          </div>

          <div className="bg-home-pattern absolute top-[15%] left-[65%] bottom-[-10px] z-1 scale-50 bg-no-repeat bg-bottom-right"></div>

          <img
            src="https://res.cloudinary.com/dn8lt4rqf/image/upload/v1736059386/front-image_kfx6gl.png"
            className="absolute top-[5%] left-[33%] transform scale-0 animate-scale-once origin-center hidden md:block lg:block"
          />
        </div>
      </section>

      <section id="section-two">
        <div
          className="h-auto w-full bg-[#19232D] gap-10 p-10 flex flex-wrap justify-center"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255, 0.25), rgba(255,255,255, 0.25) 1px, transparent 1px, transparent 6px)",
            backgroundSize: "4px 4px",
          }}
        >
          <h1
            className="text-[#FFF] text-2xl lg:text-4xl font-sans font-bold text-center mb-10"
            style={{ textShadow: "3px 3px 10px black" }}
          >
            Top Aircraft Manufacturers
          </h1>
          <div className="flex flex-row flex-wrap gap-20 justify-center">
            <ManufacturerCard
              name="Airbus-Logo"
              title="Airbus"
              desc="A global leader in innovative aircraft design and manufacturing."
              pageroute="manufacturers/Airbus"
            />
            <ManufacturerCard
              name="Boeing-Logo"
              title="Boeing"
              desc="A pioneering aerospace company renowned for its iconic airplanes."
              pageroute="manufacturers/Boeing"
            />
            <ManufacturerCard
              name="Bombardier-Logo"
              title="Bombardier"
              desc="Leader in business jets and advanced aerospace solutions."
              pageroute="manufacturers/Bombardier"
            />
            <ManufacturerCard
              name="Cessna-Logo"
              title="Cessna"
              desc="Aviation pioneer specializing in small, efficient aircraft manufacturing."
              pageroute="manufacturers/Cessna"
            />
            <ManufacturerCard
              name="Embraer-Logo"
              title="Embraer"
              desc="A global leader in regional aircraft and aviation solutions."
              pageroute="manufacturers/Embraer"
            />
            <ManufacturerCard
              name="Mitsubishi-Logo"
              title="Mitsubishi Aircraft Corporation"
              desc="Leading innovator in advanced regional jet manufacturing."
              pageroute="manufacturers/Mitsubishi"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;