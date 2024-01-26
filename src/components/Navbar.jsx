/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Logo.png";
import { CiSearch } from "react-icons/ci";
import { TbBellFilled } from "react-icons/tb";
import { MdShoppingBag } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";

const Navbar = () => {
  const [isInputShow, setInputShow] = useState(false);

  const { scrolled } = useStateContext();

  return (
    <section
      className={`flex justify-between items-center px-5 sticky top-0 w-full md:py-4 z-[9999] navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <Link className="py-3 shrink-0 md:hidden" to={`/`}>
        <img className="h-[60px] " src={Logo} alt="" />
      </Link>
      <div className="flex items-center justify-center gap-2">
        <p
          className={`text-white sm:text-[12px] text-[8px] ${
            isInputShow ? "hidden" : "block"
          }`}
        >
          <span className="text-[#c15aec]">Branded Merch</span> / Online Stream
        </p>
        <div className="flex items-center justify-center text-white bg-[#ffffff29] px-2 py-2 gap-2">
          <button onClick={() => setInputShow(!isInputShow)}>
            <CiSearch />
          </button>
          <input
            className={`md:w-[500px] bg-transparent outline-none w-full sm:block ${
              isInputShow ? "block" : "hidden"
            }`}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="text-white flex items-center justify-center gap-1">
        <button>
          <TbBellFilled />
        </button>
        /
        <button>
          <MdShoppingBag />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
