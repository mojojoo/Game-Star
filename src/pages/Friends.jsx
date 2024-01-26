/** @format */

import React from "react";
import Raiden from "../../public/player/ei.png";
import { FaStar } from "react-icons/fa6";
import { friendsBannerData, friendsListData } from "../Data/dummyData";
import FriendListData from "../components/ListData/FriendListData";
import FriendsStats from "../components/ListData/FriendsStats";

const Friends = () => {
  return (
    <section className="md:px-10 px-2 py-8 flex gap-2 md:flex-row flex-col overflow-x-hidden">
      <div className="w-full ">
        <div className="flex md:flex-row flex-col h-[500px]  w-full relative">
          <div className=" relative h-full w-full overflow-hidden rounded-3xl">
            <div className="w-1/2 px-8 text-white z-50 flex flex-col justify-center h-full">
              <h1 className="md:text-[3rem] text-[2rem] font-black">
                <span className="text-[#9900ff]">Raiden</span> Shogun
              </h1>
              <h3 className="font-bold md:text-[1.9rem] text-[1rem] pb-6">
                Player name
              </h3>
              <p className="pb-5 md:text-[1rem] text-[0.7rem]">
                Last Ratings in this{" "}
                <span className="text-[#9900ff] font-bold">Platform</span>
              </p>
              <div className="flex gap-2 items-center justify-between pb-5">
                <div className="bg-[#00000040] px-5 flex flex-col items-center justify-center rounded-lg">
                  <span className="text-yellow-500">
                    <FaStar />
                  </span>
                  <h4>9.2</h4>
                </div>
                <div className="bg-[#00000040] px-5 flex flex-col items-center justify-center rounded-lg">
                  <span className="text-yellow-500">
                    <FaStar />
                  </span>
                  <h4>9.2</h4>
                </div>
                <div className="bg-[#00000040] px-5 flex flex-col items-center justify-center rounded-lg">
                  <span className="text-yellow-500">
                    <FaStar />
                  </span>
                  <h4>9.2</h4>
                </div>
              </div>
              <h3 className="text-[#ffffff] font-bold text-center m-2">
                Ratings
              </h3>
              <div className="w-full h-[3px] relative rounded-full bg-gradient-to-b from-[#9900ff] to-[#ff93fb]">
                <div className="absolute w-[7px] h-[7px] bg-white border-4 rounded-full right-[20%] top-[-90%]"></div>
                <h1 className="py-2">80%</h1>
              </div>
            </div>
            <div className="h-[750px] w-[400px] bg-[#301d5d] rotate-45 top-[-52%] left-[-20%] absolute z-[-1]"></div>
            <div className="h-[850px] w-[400px] bg-gradient-to-b from-[#9900ff] to-[#ff93fb] rotate-45 top-[-7%] border-4 border-[#ffffff] right-[-4%] absolute z-[-1]"></div>
          </div>
          <div className="md:w-[400px] md:h-[500px] w-[300px] h-[400px] shrink-0 absolute right-[-30%] md:right-[30%] top-[0%]">
            <img className="w-full h-full object-cover" src={Raiden} alt="" />
          </div>
          <div className="w-[50%] md:flex flex-col gap-5 px-4 hidden">
            {friendsBannerData.map((item) => (
              <div className={`w-full h-1/2 ${item.css} rounded-xl relative`}>
                <div className="w-[150px] absolute top-[-10%] right-0 shrink-0">
                  <img src={item.logo} alt="" />
                </div>
                <div className="absolute top-0 w-[50px] h-[50px] left-5 bg-[#00000040] rounded-bl-md rounded-br-md text-white">
                  <div className="bg-yellow-500 rounded-full w-[10px] h-[10px]"></div>
                  <p className="font-bold text-center">OL</p>
                </div>
                <div className="w-1/2 px-2 flex flex-col justify-center h-full text-white">
                  <h1 className="text-[2rem] font-black">{item.name}</h1>
                  <h3 className="font-bold">Player name</h3>
                  <h1 className="py-2 flex items-center justify-center gap-2 text-[2rem] font-black">
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                    {item.rating}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-[#120d21] flex py-6 mt-4 rounded-xl md:gap-10 gap-3 px-7">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className=" md:h-[100px] md:w-[100px] h-[70px] w-[70px] border-t-8 border-l-8 rounded-full flex items-center justify-center text-white flex-col">
              <p className="text-[9px]">Percent</p>
              <h1 className="font-bold md:text-[19px] text-[14px]">62.8%</h1>
            </div>
            <h1 className="font-bold text-[10px] text-white text-center">
              Friends | Stats
            </h1>
          </div>
          <FriendsStats />
        </div>
      </div>
      <div className="md:w-[40%] w-full py-5 pl-8 bg-[#120d21] text-white rounded-3xl relative md:mb-0 mb-10">
        <div className="absolute w-[40px] h-[45px] bg-green-600 top-0 right-10 rounded-bl-md rounded-br-md flex justify-center items-center">
          <span className="text-black">
            <FaStar />
          </span>
        </div>
        <h1 className="font-black text-[1.2rem] py-5">Popular Gamers</h1>
        <ul>
          {friendsListData.map((item) => {
            return <FriendListData key={item.name} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Friends;
