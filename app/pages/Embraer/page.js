"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Plane, Award, Users, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    const timeout = setTimeout(handleLoad, 300);
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
    <div className="min-h-screen bg-[#19232d] text-[#dcbb87]">
      <Navbar hasBorder={true} isTransparent={false} />
      <header className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30">
          <Image
            src="/images/Companies/Embraer.jpg"
            alt="Embraer Background"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Embraer</h1>
          <p className="text-md lg:text-xl max-w-2xl mx-auto text-[#FFF]">
            Revolutionizing Regional Aviation with Cutting-Edge Aircraft
          </p>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Plane, label: "Aircraft Delivered", value: "8,000+" },
            { icon: Award, label: "Years of Excellence", value: "50+" },
            { icon: Users, label: "Employees Worldwide", value: "18,000+" },
            { icon: Globe2, label: "Countries", value: "100+" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="text-center bg-[#1e2831] p-5 rounded-2xl"
            >
              <Icon className="w-8 lg:w-12 h-8 lg:h-12 mx-auto mb-4 opacity-80" />
              <p className="text-2xl lg:text-3xl font-bold mb-2">{value}</p>
              <p className="text-sm opacity-80 text-[#FFF]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1c2831]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Innovation in Regional Aviation
          </h2>
          <div className="space-y-6 text-lg opacity-90 pl-7 lg:pl-0 pr-7 lg:pr-0">
            <p className="text-justify text-[#FFF] text-sm lg:text-lg">
              Embraer is a global leader in designing, manufacturing, and
              delivering regional aircraft that set new standards in efficiency
              and performance. Known for its innovation, Embraer creates
              aircraft that revolutionize air travel for regional routes,
              blending comfort, fuel efficiency, and cutting-edge technology.
            </p>
            <p className="text-justify text-[#FFF] text-sm lg:text-lg">
              Embraer is committed to sustainability and reducing aviation's
              environmental impact. Their aircraft help improve connectivity
              while lowering emissions, ensuring a greener future for the
              industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Discover The Aircraft
          </h2>
          <p className="mb-8 opacity-90 text-[#FFF] text-sm lg:text-lg">
            Explore Embraer’s comprehensive range of aircraft, from the
            versatile E-Jet series to the advanced E2 family.
          </p>
          <Link href="/pages/Aircrafts">
            <button className="group bg-[#dcbb87] text-[#19232d] px-8 py-4 rounded-lg font-semibold transition-all hover:bg-[#c5a876] flex items-center gap-2 mx-auto">
              View Aircraft Models
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;