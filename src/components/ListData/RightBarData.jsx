/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const RightBarData = ({ items }) => {
  const { id, name, icon, link } = items;
  const { initialData, setInitialData } = useStateContext();

  const handleToggle = () => {
    setInitialData({ ...initialData, isRightBar: false });
  };
  return (
    <Link onClick={handleToggle} to={link}>
      <li className="flex items-center gap-5 py-2 px-6 sidebar-link rounded-md text-[18px] font-semibold">
        <span className="">{icon}</span>
        <p className="">{name}</p>
      </li>
    </Link>
  );
};

export default RightBarData;
