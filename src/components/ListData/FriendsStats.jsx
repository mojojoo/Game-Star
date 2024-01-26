/** @format */

import React from "react";
import { friendsListData } from "../../Data/dummyData";

const FriendsStats = () => {
  const getItems = friendsListData.slice(0, 3);
  return (
    <ul className="w-full">
      {getItems.map((item) => (
        <div className="flex items-center justify-center">
          <li className="flex items-center justify-between bg-gradient-to-r from-[#120d21] to-[#3d00e480] w-full my-2 text-white">
            <div className="flex items-center md:gap-4">
              <div className="shrink-0 w-[50px] h-[50px]">
                <img src={item.logo} alt="" />
              </div>
              <h1 className="text-[10px] font-bold">{item.name}</h1>
            </div>
            <h1>{item.level}</h1>
          </li>
          <h1 className="px-2 text-white font-bold md:text-[1rem] text-[0.7rem] flex flex-col">
            {(item.level + (430 * 10) / 3).toFixed(3)}
            <span className="text-[0.7rem] text-center">Affinity</span>
          </h1>
        </div>
      ))}
    </ul>
  );
};

export default FriendsStats;
