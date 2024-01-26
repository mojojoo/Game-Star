/** @format */

import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";

const PrevArrow = (props) => {
  const { handleActiveButton, activeButton } = useStateContext();
  return (
    <button
      {...props}
      className={`md:top-[-55%] top-[-17%] md:text-[23px] absolute md:right-10 right-5 text-white rounded-full md:p-2 ${
        activeButton === "prev"
          ? "border-2 bg-gradient-to-t from-[#9900ff] to-[#ff93fb]"
          : "border-0 bg-none"
      }`}
    >
      <MdArrowBackIos />
    </button>
  );
};

export default PrevArrow;
