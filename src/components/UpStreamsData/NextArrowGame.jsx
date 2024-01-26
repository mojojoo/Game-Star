/** @format */

import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";
import { motion } from "framer-motion";

const NextArrowGame = (props) => {
  const { handleActiveButton, activeButton } = useStateContext();
  return (
    <motion.button
      whileHover={{ scale: 1 }}
      {...props}
      className={`top-0 md:text-[23px] absolute right-0 text-white rounded-full md:p-2 ${
        activeButton === "next"
          ? "border-2 bg-gradient-to-t from-[#9900ff] to-[#ff93fb]"
          : "border-0 bg-none"
      }`}
    >
      <MdArrowForwardIos />
    </motion.button>
  );
};

export default NextArrowGame;
