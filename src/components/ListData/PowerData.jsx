/** @format */

import React from "react";
import { upStreamsOneData } from "../../Data/dummyData";

const PowerData = ({ icon, name, power }) => {
  return (
    <div className="flex items-center gap-2 m-1">
      <div className="text-[20px] bg-[#ffffff40] p-2 text-green-500 rounded-md">
        {icon}
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-white font-bold text-[10px] flex justify-between items-center">
          <span>{name}</span>
          <span>{power}</span>
        </h1>
        <div className="flex gap-2">
          {upStreamsOneData.map((item, index) => (
            <div
              className={`h-[3px] w-4 ${index < power ? "bg-green-500" : "bg-[#ffffff60]"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerData;
