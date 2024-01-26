/** @format */

import React from "react";
import { motion } from "framer-motion";

const SideHeaderData = ({
  title,
  team_one,
  team_two,
  name_one,
  name_two,
  id,
  first,
  second,
  score_one,
  score_two,
  matchDetail,
}) => {
  return (
    <div className="flex flex-col p-6 text-white bg-[#120d21] border-b-2 rounded-2xl border-2">
      <p className="text-center mb-5">
        <span className="bg-green-600 font-bold py-[0.2rem] px-4 rounded-full text-[10px]">
          MATCH
        </span>{" "}
        {title}
      </p>
      <div className="flex items-center justify-center gap-3 py-3">
        <h2 className="font-bold ">{title}</h2>
        <p className="bg-gradient-to-b from-[#9900ff] to-[#ff93fb] font-bold text-[13px] px-4 py-[0.2rem] rounded-full">
          Live
        </p>
      </div>
      <p className="text-[12px] text-center">Group stage, Matchdy 1 of 5</p>
      <div className="flex gap-2 justify-center py-4">
        <div className="w-[80px] h-[80px] shrink-0 overflow-hidden rounded-2xl">
          <img className="h-full w-full object-contain" src={team_one} alt="" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <h1>{score_one}</h1>:<h1>{score_two}</h1>
        </div>
        <div className="w-[80px] h-[80px] shrink-0 overflow-hidden rounded-2xl">
          <img className="h-full w-full object-contain" src={team_two} alt="" />
        </div>
      </div>
      <h1 className="text-center font-bold rounded-full py-1 bg-gradient-to-b from-[#9900ff] to-[#ff93fb] w-1/2 m-auto">
        Match Detail
      </h1>
      <ul
        className={`mt-4 ${
          matchDetail ? "bg-[#ffffff20] rounded-2xl p-3" : ""
        }`}
      >
        {matchDetail
          ? matchDetail.map((item) => (
              <li key={item.id} className="my-[0.6rem] ">
                <p className="flex gap-3 items-center justify-center text-[11px]">
                  <span className="timeSideHeader rounded-full">
                    {item.time}
                  </span>
                  .<span>{name_one}</span>VS
                  <span>{name_two}</span>
                  <span>.</span>
                  <span className="timeSideHeader rounded-full">
                    {item.time}
                  </span>
                </p>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default SideHeaderData;
