/** @format */

import React from "react";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

const LiveStreamData = ({
  img,
  views,
  title,
  user,
  description,
  categories,
  profile,
}) => (
  <div className="w-full">
    <Link to="/404">
      <div className="w-full h-[200px] shrink-0 mb-3 relative">
        <img className="h-full w-full object-cover" src={img} alt="" />
        <h1 className="absolute top-4 text-white bg-[#ff2929] left-2 px-1 rounded-sm text-[13px] font-bold">
          Live
        </h1>
        <h1 className="absolute bottom-4 text-white bg-[#ffffff3a] left-2 px-1 rounded-sm text-[13px] font-bold">
          {views}k views
        </h1>
      </div>
    </Link>
    <div className="flex gap-2">
      <div>
        <div className="w-[30px] h-[30px] shrink-0">
          <img
            className="rounded-full w-full h-full object-cover"
            src={profile}
            alt=""
          />
        </div>
      </div>
      <div className="w-full text-white">
        <div className="flex items-center justify-between ">
          <Link
            to="/404"
            className="font-bold cursor-pointer hover:text-[#c379ff]"
          >
            {title}
          </Link>
          <button className="hover:bg-[#ffffff40] rounded-sm">
            <IoMdMore />
          </button>
        </div>
        <Link className="text-[#bdbdbd] text-[11px]">{user}</Link>
        <p className="text-[#bdbdbd] hover:text-[#c379ff] text-[13px]">
          {description}
        </p>
        <ul className="flex items-center gap-2 py-2">
          {categories.map((item) => (
            <li
              key={item.category}
              className=" list-none text-[#d4d4d4] bg-[#901da4] text-[12px] px-3 py-[0.1rem] rounded-full font-semibold"
            >
              {item.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LiveStreamData;
