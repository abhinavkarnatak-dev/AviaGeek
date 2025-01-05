"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    if (!session?.user?.email) return;

    try {
      const response = await axios.get("/api/getfavorites", {
        params: { email: session.user.email },
      });
      if (response.data && response.data.favorites) {
        setFavorites(response.data.favorites);
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [session]);

  const handleRefresh = () => {
    setIsLoading(true);
    fetchFavorites();
  };

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

        <div className="flex justify-center mt-8">
          <button
            onClick={handleRefresh}
            className="bg-[#DCBB87] hover:bg-[#c5a876] text-[#19232D] text-sm lg:text-base  font-bold px-4 py-2 rounded-md shadow-md"
          >
            Refresh
          </button>
        </div>

        <div className="max-w-4xl mx-auto mt-6 p-4">
          {favorites.length > 0 ? (
            <ul className="space-y-4">
              {favorites.map((model, index) => (
                <li
                  key={index}
                  className="bg-[#1E293B] text-[#FFF] p-4 rounded-md shadow-md"
                >
                  {model}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#DCBB87] text-center">
              No favorite models found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
