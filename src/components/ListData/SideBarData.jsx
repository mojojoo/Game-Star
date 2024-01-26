/** @format */

import React from "react";
import { Link } from "react-router-dom";

const SideBarData = ({ items, handleActiveItem, activeItem }) => {
  const { id, name, icon, link } = items;
  return (
    <Link onClick={() => handleActiveItem(id)} to={link}>
      <li
        className={`flex items-center gap-5 py-2 px-6 sidebar-link rounded-md text-[18px] font-semibold ${
          activeItem === id ? "activeItem" : ""
        }`}
      >
        <span className="">{icon}</span>
        <p className="">{name}</p>
      </li>
    </Link>
  );
};

export default SideBarData;
