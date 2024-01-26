/** @format */

import React from "react";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoryStreamData = ({ categores, img, views, title }) => {
  return (
    <div className="">
      <div className="sm:w-[150px] h-[250px] p-1 w-full shrink-0 mb-3 relative">
        <img className="h-full w-full object-cover" src={img} alt="" />
      </div>
      <div className="flex gap-2">
        <div className="w-full text-white">
          <div className="flex items-center justify-between ">
            <h1 className="font-bold cursor-pointer text-[12px] hover:text-[#c379ff]">
              {title}
            </h1>
            <button className="hover:bg-[#ffffff40] rounded-sm">
              <IoMdMore />
            </button>
          </div>
          <p className="text-[#bdbdbd] hover:text-[#c379ff] text-[13px]">
            {views}k Views
          </p>
          <ul className="flex items-center gap-2 py-2">
            {categores.map((item) => (
              <li key={item.categories} className=" list-none text-[#d4d4d4] bg-[#901da4] text-[12px] px-3 py-[0.1rem] rounded-full font-semibold">
                {item.categories}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryStreamData;
