import React from "react";
import Button from "../Button";

const ManufacturerCard = (props) => {
  return (
    <div className="border-2 border-[#FFF] w-[340px] h-[400px] rounded-xl flex-col justify-center overflow-hidden bg-[#19232D] hover:bg-[#121A22]">
      <img
        src={`./images/${props.name}.png`}
        className="w-44 mx-auto pt-4 pb-4"
      />
      <div className="bg-[#FFF] w-full h-52 pl-4 pr-8">
        <h2 className="text-[#19232D] text-xl font-bold pt-4 text-nowrap">
          {props.title}
        </h2>
        <p className="text-[#19232D] text-md font-medium mt-2 text-justify mb-6">
          {props.desc}
        </p>
        <Button text="Learn More" buttonroute={props.pageroute} />
      </div>
    </div>
  );
};

export default ManufacturerCard;