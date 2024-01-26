/** @format */

import React from "react";

const FriendListData = ({logo, name, level, background}) => {
  return (
    <li
      className={`${background} my-2 flex justify-between items-center pr-3 `}
    >
      <div className="flex items-center gap-2">
        <div className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] shrink-0 ">
          <img
            className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
            src={logo}
            alt=""
          />
        </div>
        <h1 className="font-bold text-[14px]">{name}</h1>
      </div>
      <h1>{level}</h1>
    </li>
  );
};

export default FriendListData;
