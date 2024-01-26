/** @format */

import React from "react";
import { Link } from "react-router-dom";

const PopularSidebarData = ({ id, name, img }) => {
  return (
    <Link to="/404">
      <li className="flex gap-3 items-center relative listPopular hover:text-[#c15aec] transition-colors">
        <img className="h-[40px] rounded-lg shrink-0" src={img} alt="" />
        <p className="text-[12px] font-bold">{name}</p>
      </li>
    </Link>
  );
};

export default PopularSidebarData;
