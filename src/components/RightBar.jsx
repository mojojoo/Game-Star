/** @format */

import React from "react";
import { motion } from "framer-motion";
import { navData } from "../Data/dummyData";
import RightBarData from "./ListData/RightBarData";
import { Link } from "react-router-dom";
import { IoIosLogOut, IoMdPerson, IoMdSettings } from "react-icons/io";
import { useStateContext } from "../context/ContextProvider";

const RightBar = () => {
  const { isLogin, setIsLogin, initialData, setInitialData, isAuthenticated } =
    useStateContext();

  const handleToggle = () => {
    setInitialData({ ...initialData, isRightBar: false });
  };

  const handleToggleLogin = () => {
    setInitialData({ ...initialData, isRightBar: false });
    console.log(isLogin);
    if (isAuthenticated) {
      setIsLogin(() => !isLogin);
      localStorage.setItem("loginSucces", JSON.stringify(isLogin));
    }
  };
  return (
    <motion.section
      animate={{ x: initialData.isRightBar ? 0 : 100 * 7 }}
      className={`sm:hidden flex flex-col items-center justify-center absolute w-full bg-[#120d21] h-screen overflow-x-hidden top-0 z-[999990]`}
    >
      <ul className="flex flex-col justify-center gap-7 ">
        {navData.map((items) => {
          return <RightBarData key={items.id} items={items} />;
        })}
      </ul>
      <ul className="flex flex-col gap-5 my-20">
        <Link to={`/Settings`}>
          <button
            className="flex hoverLink items-center gap-6 text-[16px]"
            onClick={handleToggle}
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
    </motion.section>
  );
};

export default RightBar;
