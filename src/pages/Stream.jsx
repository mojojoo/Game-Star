/** @format */

import React from "react";
import headerLogo from "../../public/lolLogo.png";
import matchesHeader from "../../public/matchesHeader.jpg";
import { Link } from "react-router-dom";
import {
  catrgoryStreamData,
  liveStreamData,
  streamTitleData,
} from "../Data/dummyData";
import LiveStreamData from "../components/ListData/LiveStreamData";
import ShowMore from "../components/ShowMore";
import CategoryStreamData from "../components/ListData/CategoryStreamData";
import StreamCarousel from "../components/Carousels/StreamCarousel";

const Stream = () => {
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
            <button className="rounded-full py-2 font-black md:text-[1.4rem] text-[1rem] px-5 bg-[#341d8d] my-3 md:w-1/2">
              Connect to stream
            </button>
          </div>
        </div>
        <div className="shrink-0 h-full">
          <img
            className="w-full h-full object-cover  "
            src={matchesHeader}
            alt=""
          />
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-[19px] font-semibold text-white py-1">
          <Link to="/404" className="text-[#b32bce]">
            Live Channel
          </Link>{" "}
          we think you'll like
        </h1>
        <div className="flex flex-wrap md:flex-nowrap gap-2">
          {liveStreamData.map((item) => {
            return <LiveStreamData key={item.user} {...item} />;
          })}
        </div>
      </div>
      <ShowMore />
      <div className="py-10">
        <h1 className="text-[19px] font-semibold text-white py-1">
          Recommended <Link className="text-[#b32bce]">Genshin Impact</Link>{" "}
          channels
        </h1>
        <div className="flex flex-wrap md:flex-nowrap gap-2">
          {liveStreamData.reverse().map((item) => {
            return <LiveStreamData key={item.user} {...item} />;
          })}
        </div>
      </div>
      <ShowMore />
      <div className="py-10">
        <h1 className="text-[19px] font-semibold text-white py-1">
          <Link to="/404" className="text-[#b32bce]">
            Categories
          </Link>{" "}
          we think you’ll like
        </h1>
        <div className="sm:flex gap-2 hidden">
          {catrgoryStreamData.map((item) => (
            <CategoryStreamData key={item.title} {...item} />
          ))}
        </div>
        <StreamCarousel />
        {streamTitleData.map((item) => (
          <div className="py-10">
            <h1 className="text-[19px] font-semibold text-white py-1">
              <Link
                to="/404"
                className="text-[#b32bce] hover:underline hover:text-white"
              >
                {item.title}
              </Link>
            </h1>
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              {liveStreamData.reverse().map((item) => {
                return <LiveStreamData key={item.user} {...item} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stream;
