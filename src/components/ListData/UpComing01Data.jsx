/** @format */

import React from "react";
import { motion } from "framer-motion";
import ListReveal from "../Animation/ListReveal";

const UpComing01Data = ({ id, img, name }) => {
  return (
    <ListReveal>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="px-4 sm:w-[180px] h-[200px] sm:h-[100px] md:w-full relative py-2"
      >
        {/* Your carousel item content */}
        <img
          className="w-full h-full object-cover rounded-2xl hover:opacity-50 transition-opacity"
          src={img}
          alt={`item-${name}`}
        />
        <div className="absolute bg-green-500 rounded-2xl py-1 px-2 top-[-2%] right-10 text-[9px] border-[4px] border-[#1c1632]">
          Offline
        </div>
      </motion.div>
    </ListReveal>
  );
};

export default UpComing01Data;
