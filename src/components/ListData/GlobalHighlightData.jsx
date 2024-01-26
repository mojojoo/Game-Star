/** @format */

import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const GlobalHighlightData = ({
  logo,
  name_one,
  name_two,
  score_one,
  score_two,
}) => {
  return (
    <Link to="/404" className="">
      <div className="  h-[200px] mx-2 rounded-3xl px-5 pt-2 cursor-pointer matchesID relative">
        <div className="w-[90px] h-[70px] shrink-0">
          <img className="w-full h-full object-contain" src={logo} alt="" />
        </div>
        <div className="py-3">
          <h4 className="flex items-center justify-between font-bold">
            <span
              className={`${
                score_one > score_two ? "text-[#9900ff]" : "text-white"
              }`}
            >
              {name_one}
            </span>
            <span
              className={`py-1 px-[0.3rem] rounded-lg ${
                score_one > score_two ? "bg-[#9900ff] text-black" : "bg-none"
              }`}
            >
              {score_one}
            </span>
          </h4>
          <h4 className="flex items-center justify-between font-bold">
            <span
              className={`${
                score_one < score_two ? "text-[#9900ff]" : "text-white"
              }`}
            >
              {name_two}
            </span>
            <span
              className={`py-1 px-[0.3rem] rounded-lg ${
                score_one < score_two ? "bg-[#9900ff] text-black" : "bg-none"
              }`}
            >
              {score_two}
            </span>
          </h4>
        </div>
        <div className="flex justify-between items-center text-[10px]">
          <div className="flex items-center gap-3">
            <button className="bg-[#341d8d] rounded-full px-2 py-1">
              Watch
            </button>
            <FaPlay />
          </div>
          <h1 className="bg-green-500 rounded-full px-4">Live</h1>
        </div>
        <div className="absolute bg-[#ffffff40] h-[100px] w-[45px] top-12 left-[40%] rotate-45 rounded-full "></div>
        <div className="absolute bg-[#ffffff40] h-[80px] w-[40px] top-[45%] left-[54%] rotate-45 rounded-full "></div>
      </div>
    </Link>
  );
};

export default GlobalHighlightData;
