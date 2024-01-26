/** @format */

import React from "react";
import _404 from "../../public/404.png";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const SomethingWrong = () => {
  return (
    <div className="h-screen w-full bg-[#ffcf82] absolute z-[9999999] flex flex-col items-center justify-center">
      <div className="md:h-[500px] h-[300px] shrink-0">
        <img className="w-full h-full object-cover" src={_404} alt="" />
      </div>
      <Link
        to="/"
        className="flex items-center justify-center rounded-full px-6 border-2 py-2 my-3"
      >
        Back to Home page
        <span>
          <IoMdArrowForward />
        </span>
      </Link>
      <h1>Something went wrong! Try again later.</h1>
    </div>
  );
};

export default SomethingWrong;
