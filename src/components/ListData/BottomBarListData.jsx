/** @format */

import React from "react";
import { Link } from "react-router-dom";

const BottomBarListData = ({ items }) => {
  const { id, name, icon, link } = items;
  return (
    <Link to={link}>
      <li className=" py-2 px-6 sidebar-link rounded-md text-[18px] font-semibold">
        <span className="">{icon}</span>
      </li>
    </Link>
  );
};

export default BottomBarListData;
