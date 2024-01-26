/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../public/Logo.png";
import { friendStreamData, navData, popularGamesData } from "../Data/dummyData";
import SideBarData from "./ListData/SideBarData";
import { IoMdSettings, IoIosLogOut, IoMdPerson } from "react-icons/io";
import PopularSidebarData from "./ListData/PopularSidebarData";
import FriendsData from "./ListData/FriendsData";
import { FaStar } from "react-icons/fa";
import { useStateContext } from "../context/ContextProvider";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState(1);
  const { isLogin, setIsLogin, isAuthenticated } = useStateContext();
  const handleActiveItem = (_id) => {
    setActiveItem(_id);
  };

  const handleToggleLogin = () => {
    console.log(isLogin);
    if (isAuthenticated) {
      setIsLogin(() => !isLogin);
      localStorage.setItem("loginSucces", JSON.stringify(isLogin));
    }
  };

  return (
    <section className="customScrollbar border-r-2 md:flex hidden flex-col items-center border-[#6a6a6a69] w-[250px] h-screen py-4 px-6 overflow-y-auto">
      <Link className="py-3" to={`/`}>
        <img className="h-[80px]" src={Logo} alt="" />
      </Link>
      <ul className="flex flex-col justify-center gap-7">
        {navData.map((items) => {
          return (
            <SideBarData
              key={items.id}
              items={items}
              handleActiveItem={handleActiveItem}
              activeItem={activeItem}
            />
          );
        })}
      </ul>
      <ul className="flex flex-col gap-5 my-20">
        <Link to={`/Settings`}>
          <button
            onClick={() => handleActiveItem("Settings")}
            className="flex hoverLink items-center gap-6 text-[16px]"
          >
            <IoMdSettings />
            Settings
          </button>
        </Link>
        <Link to={`/Login`}>
          <button
            className="flex hoverLink items-center gap-6 text-[16px]"
            onClick={handleToggleLogin}
          >
            {isAuthenticated ? (
              <>
                <IoIosLogOut />
                Log-out
              </>
            ) : (
              <>
                <IoMdPerson />
                Sign-in
              </>
            )}
          </button>
        </Link>
      </ul>

      <div className="bg-[#120d21] w-full justify-center rounded-lg px-6 py-4 mb-20 hidden md:flex flex-col items-center text-white">
        <h1 className="font-black text-[19px] pb-5">Popular games</h1>
        <ul className="flex flex-col gap-7 px-5">
          {popularGamesData.map((items) => {
            return <PopularSidebarData key={items.id} {...items} />;
          })}
        </ul>
      </div>
      <div className="bg-[#120d21] w-full px-4 pb-2 pt-10 my-16 md:block hidden  rounded-lg text-white relative">
        <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#9900ff] to-[#ff93fb] absolute top-[-10%] right-[30%] z-50 flex flex-col justify-center items-center">
          <h1 className="font-bold">6.8</h1>
          <span className="text-[#feff00]">
            <FaStar />
          </span>
        </div>
        <h1 className="font-black text-center">Friends Stream</h1>
        <ul>
          {friendStreamData.map((items) => {
            return <FriendsData key={items.id} {...items} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
