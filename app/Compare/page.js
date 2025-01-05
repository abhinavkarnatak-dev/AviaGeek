"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState, useEffect } from "react";
import aircraftData from "../data/aircraftData";
import Footer from "@/app/components/Footer";

const ComparePage = () => {
  const [tempSelectedModel1, setTempSelectedModel1] = useState("");
  const [tempSelectedModel2, setTempSelectedModel2] = useState("");
  const [selectedModel1, setSelectedModel1] = useState("");
  const [selectedModel2, setSelectedModel2] = useState("");
  const [showCards, setShowCards] = useState(false);

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

  const getAllModels = () => {
    return aircraftData.flatMap((aircraft) =>
      aircraft.families.flatMap((family) => family.models)
    );
  };

  const allModels = getAllModels();

  const getModelDetails = (modelName) => {
    return allModels.find((model) => model.name === modelName);
  };

  const handleCompare = () => {
    if (tempSelectedModel1 && tempSelectedModel2) {
      setSelectedModel1(tempSelectedModel1);
      setSelectedModel2(tempSelectedModel2);
      setShowCards(true);
    } else {
      setShowCards(false);
      alert("Please select both models to compare!");
    }
  };
  const handleReset = () => {
    setTempSelectedModel1("");
    setTempSelectedModel2("");
    setShowCards(false);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-[#19232D]">
        <Navbar hasBorder={true} isTransparent={false} />
        <div className="container mx-auto p-4 flex-grow">
          <h1
            className="text-2xl lg:text-3xl font-bold mt-6 mb-8 text-[#FFF] text-center"
            style={{ textShadow: "3px 3px 10px black" }}
          >
            Compare
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
              <select
                className="w-48 p-2 rounded bg-gray-700 text-white"
                value={tempSelectedModel1}
                onChange={(e) => setTempSelectedModel1(e.target.value)}
              >
                <option value="">Select Model 1</option>
                {allModels.map((model) => (
                  <option key={model.id} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>

              <select
                className="w-48 p-2 rounded bg-gray-700 text-white"
                value={tempSelectedModel2}
                onChange={(e) => setTempSelectedModel2(e.target.value)}
              >
                <option value="">Select Model 2</option>
                {allModels.map((model) => (
                  <option key={model.id} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
              <button
                className="bg-[#DCBB87] text-[#19232D] font-bold px-4 py-2 rounded hover:bg-[#c5a876]"
                onClick={handleCompare}
              >
                Compare
              </button>
              <button
                className="bg-[#DCBB87] text-[#19232D] font-bold px-4 py-2 rounded hover:bg-[#c5a876]"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
          {showCards && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-8">
              {selectedModel1 && (
                <div className="bg-gray-800 p-4 rounded-2xl text-white border-2 border-[#DCBB87]">
                  <h2 className="text-lg font-bold">{selectedModel1}</h2>
                  <p>{getModelDetails(selectedModel1).desc}</p>
                  <img
                    src={getModelDetails(selectedModel1).image}
                    alt={selectedModel1}
                    className="w-auto h-40 lg:w-full lg:h-72 object-cover mt-8 rounded-xl"
                  />
                  <table className="w-full mt-8">
                    <tbody>
                      {Object.entries(
                        getModelDetails(selectedModel1).features
                      ).map(([key, value]) => (
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
              )}
              {selectedModel2 && (
                <div className="bg-gray-800 p-4 rounded-2xl text-white border-2 border-[#DCBB87]">
                  <h2 className="text-lg font-bold">{selectedModel2}</h2>
                  <p>{getModelDetails(selectedModel2).desc}</p>
                  <img
                    src={getModelDetails(selectedModel2).image}
                    alt={selectedModel2}
                    className="w-auto h-40 lg:w-full lg:h-72 object-cover mt-8 rounded-xl"
                  />
                  <table className="w-full mt-8">
                    <tbody>
                      {Object.entries(
                        getModelDetails(selectedModel2).features
                      ).map(([key, value]) => (
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
              )}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ComparePage;