/** @format */

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const ShowMore = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-full h-[1px] bg-[#cccccc60]"></div>
      <Link
        to="/404"
        className="flex items-center justify-center text-[#c837f0] text-[14px] font-bold gap-2 hover:bg-[#ffffff40] hover:text-[#d285ff] px-3 py-[0.1rem] rounded-sm"
      >
        <h1>Showmore</h1>
        <IoIosArrowDown />
      </Link>
      <div className="w-full h-[1px] bg-[#cccccc60]"></div>
    </div>
  );
};

export default ShowMore;
