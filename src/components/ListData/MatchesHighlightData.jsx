/** @format */

import React from "react";
import { FaStar } from "react-icons/fa6";

const MatchesHighlightData = ({ title, match_one }) => {
  return (
    <div className="relative  md:pt-[5rem] pt-[3rem] md:pb-0 pb-[3rem]">
      <div className=" h-[250px] flex flex-wrap">
        <h1 className="absolute top-0 font-bold text-[20px]">{title}</h1>
        {match_one.map((item) => (
          <div className="flex p-2 bg-[#120d21] m-1 rounded-xl items-center justify-between md:w-[48%] w-full gap-2">
            <div className="px-2 py-1 rounded-lg bg-[#ffffff40] flex items-center ">
              <div className="h-[40px] w-[40px] shrink-0">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={item.team_one}
                  alt=""
                />
              </div>
              <div className="px-2">
                <h1 className="font-bold text-[8px]">
                  {item.matchOne_teamOne}
                </h1>
                <p className="flex items-center gap-2 text-[10px] text-yellow-400">
                  <span>{item.matchOne_rateOne}</span>
                  <FaStar />
                </p>
              </div>
            </div>
            <div>
              <h1 className="flex items-center justify-center gap-1">
                <span className="px-[0.2rem] py-[0.1rem] bg-[#ffffff30] rounded-sm">
                  {item.matchOne_scoreOne}
                </span>
                :
                <span className="px-[0.2rem] py-[0.1rem] bg-[#ffffff30] rounded-sm">
                  {item.matchOne_scoreTwo}
                </span>
              </h1>
              <p className="text-[10px]">{item.date}</p>
            </div>
            <div className="px-2 py-1 rounded-lg bg-[#ffffff40] flex items-center ">
              <div className="h-[40px] w-[40px] shrink-0">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={item.team_two}
                  alt=""
                />
              </div>
              <div className="px-2">
                <h1 className="font-bold text-[8px]">
                  {item.matchOne_teamTwo}
                </h1>
                <p className="flex items-center gap-2 text-[10px] text-yellow-400">
                  <span>{item.matchOne_rateTwo}</span>
                  <FaStar />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesHighlightData;
