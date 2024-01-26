/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";

const FriendsData = ({ img }) => {
  return (
    <Link to="/404">
      <li className="my-5 relative">
        <img
          className="h-[100px] w-full object-cover opacity-70 rounded-lg shrink-0"
          src={img}
          alt=""
        />
        <h1 className="absolute top-[30%] right-[40%] text-[3rem] hover:font-black">
          <CiPlay1 />
        </h1>
      </li>
    </Link>
  );
};

export default FriendsData;
