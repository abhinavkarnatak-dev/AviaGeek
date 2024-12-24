import React from "react";
import Button from "../Button";

const ManufacturerCard = (props) => {
  return (
    <div className="border-2 border-[#FFF] w-[240px] h-[340px] lg:w-[340px] lg:h-[400px] rounded-lg lg:rounded-xl flex-col justify-center overflow-hidden bg-[#19232D] hover:bg-[#19232D] lg:hover:bg-[#121A22]">
      <img
        src={`./images/${props.name}.png`}
        className="w-28 lg:w-44 mx-auto pt-4 pb-4 transform transition-transform duration-200 ease-in-out hover:scale-105"
      />

      <div className="bg-[#FFF] w-full h-52 pl-4 pr-8">
        <h2 className="text-[#19232D] text-sm lg:text-xl font-bold pt-4 text-nowrap">
          {props.title}
        </h2>
        <p className="text-[#19232D] text-xs lg:text-base font-medium mt-2 text-justify mb-12 lg:mb-8">
          {props.desc}
        </p>
        <Button text="Learn More" buttonroute={props.pageroute} />
      </div>
    </div>
  );
};

export default ManufacturerCard;