/** @format */

import React from "react";
import { matchesHistoryData } from "../../Data/dummyData";
import { FaStar } from "react-icons/fa6";
import Graph from "../../../public/Graph.jpg";

const CardMatchesData = () => {
  const firstItem = matchesHistoryData.slice(0, 1);
  return (
    <>
      {firstItem.map((item) => {
        const {
          logo_one,
          logo_two,
          title,
          score_one,
          score_two,
          matchDetail: {
            name_one,
            name_two,
            ratings: { first, second },
          },
        } = item;

        return (
          <div className="text-white">
            <div className="flex items-center justify-between">
              <p className="text-[13px]">
                <span className="bg-green-500 px-2 rounded-full mr-3">
                  Match
                </span>
                League of Legends
              </p>
              <div className="px-2 py-2 rounded-md bg-green-500">
                <FaStar />
              </div>
            </div>
            <div className="flex items-center gap-2 py-2">
              <h1 className="font-bold text-[25px]">League of Legends</h1>
              <button className="px-3 text-[12px] bg-gradient-to-b from-[#9900ff] to-[#ff93fb] rounded-full">
                Live
              </button>
            </div>
            <p className="text-[14px] text-[#bcbcbc] pb-4">
              Group Stage <span>.</span> Matchday 1 of 5
            </p>
            <div className="flex items-center justify-center gap-5">
              <div className="flex items-center gap-2">
                <div className="text-[13px]">
                  <h1 className="font-bold">{name_one}</h1>
                  <p className="text-end text-yellow-400">{first}</p>
                </div>
                <div className="w-[50px] h-[100px] shrink-0">
                  <img
                    className="w-full h-full object-contain"
                    src={logo_one}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-[18px] px-1 bg-[#ffffff20]">
                  {score_one}
                </h1>
                :
                <h1 className="font-bold text-[18px] px-1  bg-[#ffffff20]">
                  {score_two}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[50px] h-[100px] shrink-0">
                  <img
                    className="w-full h-full object-contain"
                    src={logo_two}
                    alt=""
                  />
                </div>
                <div className="text-[13px]">
                  <h1 className="font-bold">{name_two}</h1>
                  <p className="text-start text-yellow-400">{second}</p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h1 className="flex items-center justify-between font-bold">
                <span>{name_one}</span> <span>{name_two}</span>
              </h1>
              <div className="flex items-center gap-2 py-4">
                <div className="h-[4px] bg-green-600 w-[60%] rounded-full"></div>
                <div className="h-[4px] bg-yellow-600 w-[40%] rounded-full"></div>
              </div>
              <h1 className="flex justify-between items-center text-[10px]">
                <span>60%</span> <span>40%</span>
              </h1>
            </div>
            <div className="py-2">
              <div className="h-[100px] w-full">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={Graph}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardMatchesData;
