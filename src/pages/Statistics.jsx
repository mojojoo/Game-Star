/** @format */

import React from "react";
import Graph from "../../public/Graph.jpg";
import { statisticsPowerData } from "../Data/dummyData";
import PowerData from "../components/ListData/PowerData";
import LogoOne from "../../public/LastmatchImgs/Logo01.jpg";
import LogoTwo from "../../public/LastmatchImgs/Logo02.jpg";
import Stats from "../../public/bgStats.png";

const Statistics = () => {
  return (
    <section className="py-3 md:px-5 px-2 overflow-x-hidden mb-10">
      <div className="w-full md:flex bg-[#120d21] rounded-lg  relative">
        <div className="flex md:flex-row flex-col md:gap-3 gap-10 md:p-10 px-3 py-3">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-center text-white font-bold">Power Level</h1>
            <div className="h-[150px] w-full">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={Graph}
                alt=""
              />
            </div>
            <div className="bg-[#1c1632] rounded-lg p-3 w-full">
              {statisticsPowerData.map((item) => (
                <PowerData key={item.name} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-center text-white font-bold">
              Statistics and Analysis
            </h1>
            <div className="bg-[#1c1632]  w-full rounded-lg p-3">
              <h1 className="font-bold text-[10px] text-white flex gap-2 items-center">
                <span className="bg-green-500 px-2 rounded-full">Match</span>
                Fortnite
              </h1>
              <div className="flex items-center gap-3 text-white py-4">
                <h1 className="font-bold text-[18px]">Fortnite</h1>
                <button className="bg-gradient-to-b from-[#9900ff] to-[#ff93fb] px-2 rounded-full text-[12px]">
                  Live
                </button>
              </div>
              <p className="text-[#a2a2a2] text-[10px]">
                Play now | matches 1 of 8
              </p>
              <div className="text-[19px] text-white font-bold">
                <span>Last Matches</span> where the battle was improved.
              </div>
              <div className="flex items-center justify-center gap-5 text-white">
                <div className="flex items-center gap-2">
                  <div className="text-[13px]">
                    <h1 className="font-bold">FireFlux</h1>
                    <p className="text-end text-yellow-400">10.2</p>
                  </div>
                  <div className="w-[50px] h-[100px] shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      src={LogoOne}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h1 className="font-bold text-[18px] px-1 bg-[#ffffff20]">
                    0
                  </h1>
                  :
                  <h1 className="font-bold text-[18px] px-1  bg-[#ffffff20]">
                    0
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[50px] h-[100px] shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      src={LogoTwo}
                      alt=""
                    />
                  </div>
                  <div className="text-[13px]">
                    <h1 className="font-bold">Congers</h1>
                    <p className="text-start text-yellow-400">9.2</p>
                  </div>
                </div>
              </div>
              <div className=" text-white">
                <h1 className="flex items-center justify-between font-bold">
                  <span>FireFlux</span> <span>Congers</span>
                </h1>
                <div className="flex items-center gap-2 py-4">
                  <div className="h-[4px] bg-green-600 w-[60%] rounded-full"></div>
                  <div className="h-[4px] bg-yellow-600 w-[40%] rounded-full"></div>
                </div>
                <h1 className="flex justify-between items-center text-[10px]">
                  <span>60%</span> <span>40%</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#9900ff] to-[#ff93fb] w-full rounded-tl-[50%] rounded-bl-[50%] hidden md:flex items-center justify-center">
          <div className="">
            <img src={Stats} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
