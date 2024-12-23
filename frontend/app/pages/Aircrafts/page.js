"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, ChevronUp, Heart } from "lucide-react";
import { aircraftData } from "../../data/aircraftData";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const Button = ({ children, onClick, className = "", variant = "default" }) => {
  const baseStyle =
    "px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-start font-bold";
  const variantStyles = {
    default: "bg-[#DCBB87] text-[#19232D] bg-[#DCBB87]/80",
    outline:
      "border border-[#DCBB87] text-[#19232D] bg-[#DCBB87] text-md lg:text-lg",
    ghost:
      "text-[#DCBB87] mt-4 border border-[#DCBB87] hover:bg-[#DCBB87]/20 font-semibold text-sm lg:text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-[#19232d] text-white border border-[#DCBB87] rounded-lg overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export default function AircraftDetails() {
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [expandedFamily, setExpandedFamily] = useState(null);
  const [expandedModel, setExpandedModel] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const toggleCompany = (companyId) => {
    setExpandedCompany(expandedCompany === companyId ? null : companyId);
    setExpandedFamily(null);
    setExpandedModel(null);
  };

  const toggleFamily = (familyId) => {
    setExpandedFamily(expandedFamily === familyId ? null : familyId);
    setExpandedModel(null);
  };

  const toggleModel = (modelId) => {
    setExpandedModel(expandedModel === modelId ? null : modelId);
  };

  const toggleFavorite = (modelId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(modelId)) {
        newFavorites.delete(modelId);
      } else {
        newFavorites.add(modelId);
      }
      return newFavorites;
    });
  };

  const renderModel = (model) => (
    <Card key={model.id} className="mb-4 mt-4">
      <div className="flex items-center justify-between p-4 border-b border-[#DCBB87]/20">
        <h3 className="text-lg font-semibold text-[#DCBB87]">{model.name}</h3>
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => toggleModel(model.id)}
        >
          {expandedModel === model.id ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      {expandedModel === model.id && (
        <div className="p-6">
          <div className="grid gap-6">
            <Image
              src={model.image}
              alt={model.name}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <p className="text-white text-sm lg:text-base">{model.desc}</p>
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                className="text-sm font-bold hover:bg-[#c5a876]"
                onClick={() => toggleFavorite(model.id)}
              >
                <Heart
                  className={`mr-2 h-4 w-4 ${
                    favorites.has(model.id) ? "fill-pink-600" : ""
                  }`}
                />
                {favorites.has(model.id)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </Button>
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
      )}
    </Card>
  );

  const renderFamily = (family) => (
    <div key={family.id} className="ml-6 mb-4">
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => toggleFamily(family.id)}
      >
        {expandedFamily === family.id ? (
          <ChevronDown className="mr-2 h-4 w-4" />
        ) : (
          <ChevronRight className="mr-2 h-4 w-4" />
        )}
        {family.name}
      </Button>
      {expandedFamily === family.id && (
        <div className="ml-6 mt-2">{family.models.map(renderModel)}</div>
      )}
    </div>
  );

  const renderCompany = (company) => (
    <div key={company.id} className="mb-4">
      <Button
        variant="outline"
        className="w-full justify-start"
        onClick={() => toggleCompany(company.id)}
      >
        {expandedCompany === company.id ? (
          <ChevronDown className="mr-2 h-4 w-4" />
        ) : (
          <ChevronRight className="mr-2 h-4 w-4" />
        )}
        {company.name}
      </Button>
      {expandedCompany === company.id && company.families.map(renderFamily)}
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-[#19232d] text-white">
        <Navbar hasBorder={true} isTransparent={false} />
        <div className="container mx-auto p-4">
          <h1
            className="text-2xl lg:text-3xl font-bold mt-6 mb-8 text-[#FFF] text-center"
            style={{ textShadow: "3px 3px 10px black" }}
          >
            Aircrafts
          </h1>
          {aircraftData.map(renderCompany)}
        </div>
      </div>
      <Footer />
    </>
  );
}