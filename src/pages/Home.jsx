/** @format */

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../../public/HeroBanner.png";
import UpcomingStreams01 from "../components/UpcomingStreams01";
import { useStateContext } from "../context/ContextProvider";
import LastMatches from "../components/LastMatches";
import Banner2 from "../../public/Banner2.png";
import { sideHeaderData } from "../Data/dummyData";
import SideHeaderData from "../components/ListData/SideHeaderData";
import Reveal from "../components/Animation/Reveal";
import ListReveal from "../components/Animation/ListReveal";

const Home = () => {
  const { initialData } = useStateContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 1) {
        setScrolled(true);
        console.log("scrolled");
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={`md:flex block md:px-5 px-2 py-2 overflow-x-hidden justify-center  customScrollbar`}
    >
      <div className="px-3 py-2 lg:w-[70%]">
        <div className="relative py-4 mb-2">
          <div className="w-full flex lg:justify-between relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-t from-[#9900ff] to-[#ff93fb] pl-[2rem] md:pl-[4rem] pr-3 py-2">
            <div className="flex flex-col md:justify-center justify-end w-1/2 md:gap-2 z-30">
              <Reveal>
                <ListReveal>
                  <h1 className="sm:text-[4rem] text-[3rem] font-black text-white z-30">
                    Connect
                  </h1>
                  <h3 className="sm:text-[1.7rem] text-[1.2rem] font-black text-white">
                    To Stream <span className="text-[#53f1ff]">Valorant</span>
                  </h3>
                  <p className="sm:text-[12px] text-[9px] text-white">
                    i don't know what to say, this website is a streaming
                    platform, i guess.
                  </p>
                </ListReveal>
                <Link
                  className=" text-center md:text-[16px] text-[10px] text-white font-bold"
                  to="/404"
                >
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    className="md:bg-[#00000040] bg-[#00000090]  px-4 py-2 rounded-2xl w-full"
                  >
                    Connect to Stream
                  </motion.p>
                </Link>
              </Reveal>
            </div>
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
            <div className="absolute shrink-0 right-[-27%] top-[-10%] lg:top-[-6%] lg:right-[09%]">
              <img className=" h-[900px] lg:h-[600px]" src={Hero} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#9900ff] to-[#ff93fb] rounded-full h-[100px] w-[100px] absolute border-[6px] border-[#1c1632] top-[0%] left-[-3%]">
            <div className="flex flex-col items-center justify-center rounded-full border-2 px-6 py-4 ">
              <h1 className="font-bold text-white">9.8</h1>
              <span className="text-[#feff00]">
                <FaStar />
              </span>
            </div>
          </div>
          <div className="w-full relative mb-3">
            <UpcomingStreams01 />
          </div>
          <div className="w-full my-4">
            <LastMatches />
          </div>
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
              <div className="shrink-0 absolute md:top-[-17%] top-[-16%] md:right-[-10%] right-[-20%]">
                <img
                  className="md:h-[350px] h-[230px]"
                  src={Banner2}
                  alt="Champions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-6 flex flex-col gap-6 md:mb-0 mb-6 md:w-[400px] w-full">
        {sideHeaderData.map((items) => {
          return <SideHeaderData key={items.title} {...items} />;
        })}
      </section>
    </section>
  );
};

export default Home;
