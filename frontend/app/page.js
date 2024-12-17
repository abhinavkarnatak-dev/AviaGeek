"use client";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import ManufacturerCard from "./components/Home/ManufacturerCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Page = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (!isLoggedIn) {
  //     router.push("/pages/Login");
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [router]);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-[#19232D]">
  //       <p className="text-[#DCBB87] text-xl font-semibold">Loading...</p>
  //     </div>
  //   );
  // }
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
          style={{ backgroundImage: "url('/images/front-pattern.png')" }}
        >
          <Navbar hasBorder={false} isTransparent={true}/>

          <div className="pt-32">
            <h1
              className="text-[#FFF] text-[40px] font-sans font-bold pl-24"
              style={{ textShadow: "3px 3px 10px black" }}
            >
              Welcome to <span className="text-[#DCBB87]">"AviaGeek"</span>
            </h1>
            <h1
              className="text-[#FFF] text-[40px] font-sans font-bold ml-24"
              style={{ textShadow: "3px 3px 10px black" }}
            >
              Your Aircraft Model{" "}
              <span className="text-[#DCBB87]">
                <ReactTyped
                  strings={["Encyclopedia", "Guide", "Resource", "Compendium"]}
                  typeSpeed={150}
                  backSpeed={150}
                  loop={true}
                  showCursor={true}
                />
              </span>
            </h1>
            <p
              className="w-5/12 text-xl text-[#FFF] font-sm ml-24 mt-6"
              style={{ textShadow: "3px 3px 10px black" }}
            >
              AviaGeek is your ultimate destination for in-depth information on
              a wide range of aircraft models.
            </p>
          </div>
          <button
            className="text-white text-xl font-bold border-2 rounded-xl p-2 ml-24 mt-16
        shadow-[1px_1px_5px_#FFF] hover:text-[#DCBB87] hover:border-[#DCBB87] hover:shadow-[1px_1px_5px_#DCBB87]"
            onClick={handleScroll}
          >
            Read More
          </button>

          <div className="animate-icon-01 absolute top-[33%] left-[52%] transform -translate-x-1/2 animate-cross-rotate z-20">
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
            src="/images/front-image.png"
            className="absolute top-[10%] left-[33%] transform scale-0 animate-scale-once origin-center"
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
            className="text-[#FFF] text-4xl font-sans font-bold text-center mb-10"
            style={{ textShadow: "3px 3px 10px black" }}
          >
            Top Aircraft Manufacturers
          </h1>
          <div className="flex flex-row flex-wrap gap-20 justify-center">
            <ManufacturerCard
              name="Airbus-Logo"
              title="Airbus"
              desc="A global leader in innovative aircraft design and manufacturing ..."
              pageroute="pages/Aircrafts"
            />
            <ManufacturerCard
              name="Boeing-Logo"
              title="Boeing"
              desc="A pioneering aerospace company renowned for its iconic airplanes ..."
            />
            <ManufacturerCard
              name="Embraer-Logo"
              title="Embraer"
              desc="A global leader in regional aircraft and aviation solutions ..."
            />
            <ManufacturerCard
              name="Mitsubishi-Logo"
              title="Mitsubishi Aircraft Corporation"
              desc="Innovative manufacturer of advanced regional jets and aircraft systems ..."
            />
            <ManufacturerCard
              name="Bombardier-Logo"
              title="Bombardier"
              desc="Leader in business jets and advanced aerospace solutions ..."
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;