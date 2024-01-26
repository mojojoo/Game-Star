/** @format */

import React from "react";
import { FaStar } from "react-icons/fa6";
import Reveal from "../Animation/Reveal";

const LastMatchData = ({
  logo_one,
  logo_two,
  title,
  score_one,
  score_two,
  date,
  matchDetail: {
    name_one,
    name_two,
    ratings: { first, second },
  },
}) => {
  const winner = score_one > score_two ? "team1" : "team2";

  return (
    <Reveal>
      <section className="flex md:flex-row flex-col items-center justify-center gap-1 md:gap-2 w-full bg-[#120d21] rounded-2xl py-4 px-3">
        {/* team one */}
        <div
          className={`flex p-2 rounded-xl md:justify-evenly justify-center items-center md:gap-2 gap-5 w-full ${
            winner === "team1"
              ? "bg-gradient-to-t from-[#9900ff] to-[#ff93fb]"
              : "bg-[#ffffff20]"
          }`}
        >
          <div className="bg-[#00000040] overflow-hidden border-2 rounded-xl shrink-0">
            <img
              className="md:h-[60px] h-[70px] rounded-xl "
              src={logo_one}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center gap-3 flex-col text-white">
            <h1 className="font-bold text-[14px]">{name_one}</h1>
            <p className="text-[#feff00] flex items-center gap-2 text-[14px]">
              <span className="">
                <FaStar />
              </span>
              {first}
            </p>
          </div>
        </div>

        {/* details */}
        <div className="text-white text-center w-[100px]">
          <h1 className="font-bold md:text-[15px] ">
            <span className="px-[0.2rem] bg-[#ffffff20]">{score_one}</span>:
            <span className="px-[0.2rem] bg-[#ffffff20]">{score_two}</span>
          </h1>
          <p className="text-[9px]">Details</p>
          <h4 className="text-[9px]">{date}</h4>
        </div>

        {/* team two */}
        <div
          className={`flex p-2 rounded-xl md:justify-evenly justify-center items-center md:gap-2 gap-5 w-full ${
            winner === "team1"
              ? "bg-[#ffffff20]"
              : "bg-gradient-to-t from-[#9900ff] to-[#ff93fb]"
          }`}
        >
          <div className="bg-[#00000040] overflow-hidden border-2 rounded-xl shrink-0">
            <img
              className="md:h-[60px] h-[70px] rounded-xl"
              src={logo_two}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center gap-3 flex-col text-white">
            <h1 className="font-bold text-[14px]">{name_two}</h1>
            <p className="text-[#feff00] flex items-center gap-2 text-[14px]">
              <span className="">
                <FaStar />
              </span>
              {second}
            </p>
          </div>
        </div>
        <h1 className="absolute top-0 text-white rounded-full py-[0.2rem] px-3 border-2 bg-green-600 text-[10px]">
          {title}
        </h1>
      </section>
    </Reveal>
  );
};

export default LastMatchData;
