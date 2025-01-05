"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import aircraftData from "../../data/aircraftData";
import Image from "next/image";

const Page = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);

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
    const filterModels = () => {
      const models = [];
      favorites.forEach((favoriteId) => {
        aircraftData.forEach((aircraft) => {
          aircraft.families.forEach((family) => {
            const matchingModel = family.models.find(
              (model) => model.id === favoriteId
            );
            if (matchingModel) {
              models.push(matchingModel);
            }
          });
        });
      });
      setFilteredModels(models);
    };

    if (favorites.length > 0) {
      filterModels();
    }
  }, [favorites]);

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
            className="bg-[#DCBB87] hover:bg-[#c5a876] text-[#19232D] text-sm lg:text-base font-bold px-4 py-2 rounded-md shadow-md"
          >
            Refresh
          </button>
        </div>

        <div className="max-w-5xl mx-auto mt-6 p-4 space-y-4">
          {filteredModels.length > 0 ? (
            filteredModels.map((model) => (
              <DropdownCard key={model.uniquenumber} model={model} />
            ))
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

const DropdownCard = ({ model }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#19232D] text-[#DCBB87] p-4 rounded-md shadow-md border border-[#DCBB87]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold">{model.name}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="mt-4">
          <div className="p-6">
          <div className="grid gap-6">
            <Image
              src={model.image}
              alt={model.name}
              width={300}
              height={200}
              className="rounded-lg object-cover"
              priority={true}
            />
            <p className="text-white text-sm lg:text-base">{model.desc}</p>
            <div className="flex justify-between items-center">
            </div>
            <table className="w-full">
              <tbody>
                {Object.entries(model.features).map(([key, value]) => (
                  <tr key={key} className="border-b border-[#DCBB87]/20">
                    <td className="py-2 text-[#DCBB87] font-semibold text-sm lg:text-base pr-8 lg:pr-0">
                      {key}
                    </td>
                    <td className="py-2 text-white text-sm lg:text-base">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Page;
