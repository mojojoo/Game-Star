/** @format */

import React from "react";
import headerLogo from "../../public/lolLogo.png";
import matchesHeader from "../../public/matchesHeader.jpg";
import CardMatchesData from "../components/ListData/CardMatchesData";
import MatchesCarousels from "../components/MatchesCarousels";
import Banner2 from "../../public/Banner2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Matches = () => {
  return (
    <section className="py-3 md:px-5 px-2 overflow-x-hidden mb-10">
      <div className="relative h-[550px] w-full overflow-hidden rounded-3xl ">
        <div className="w-full h-full absolute element flex justify-start p-4 text-white">
          <div className="flex justify-center flex-col w-full md:w-1/2 px-10">
            <div className="shrink-0 md:w-[300px] w-[250px]">
              <img src={headerLogo} alt="" />
            </div>
            <h1 className="md:text-[5rem] text-[2rem] w-full font-black text-[#c15aec]">
              Connect
            </h1>
            <h3 className="md:text-[2.7rem] text-[1rem] font-semibold">
              League of Legends
            </h3>
            <p className="md:text-[11px] text-[9px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              molestias accusamus ipsum aliquam a ut cum harum commodi ducimus
              ullam ex beatae.
            </p>
            <Link
              to="/404"
              className="rounded-full text-center py-2 font-black md:text-[1.4rem] text-[1rem] px-5 bg-[#341d8d] my-3 md:w-1/2"
            >
              Connect to stream
            </Link>
          </div>
        </div>
        <div className="shrink-0 h-full">
          <img
            className="w-full h-full object-cover  "
            src={matchesHeader}
            alt=""
          />
        </div>
        <div className="absolute right-0 bg-[#120d21] h-full w-[400px] z-[999] top-0 rounded-3xl py-4 px-6 md:block hidden">
          <CardMatchesData />
        </div>
      </div>
      <MatchesCarousels />
      <div className="md:px-[5rem] ">
        <div className="relative w-full mt-14 md:h-[300px] h-[200px] rounded-xl  bg-gradient-to-t from-[#9900ff] to-[#ff93fb]">
          <div className="w-full flex justify-between text-white">
            <div className="flex flex-col py-10 md:px-10 px-3 w-1/2 md:justify-evenly justify-center">
              <p className="md:text-[3rem] font-black">Will Join the</p>
              <p className="md:text-[5rem] text-[20px] font-bold text-[#1c1632]">
                Stream
              </p>
              <p className="md:text-[14px] text-[11px] z-30">
                Participate on upcoming event and win your favorite champions
              </p>
            </div>
            <div className="p-2 z-30">
              <div className="lg:block hidden">
                <Link to="/404">
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    className=" bg-[#00000040] px-6 py-1 text-white rounded-2xl text-[13px]"
                  >
                    Live
                  </motion.p>
                </Link>
              </div>
            </div>
            <div className="shrink-0 absolute md:top-[-17%] top-[-0%] md:right-[0%] right-[-20%]">
              <img
                className="md:h-[350px] h-[200px]"
                src={Banner2}
                alt="Champions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;
