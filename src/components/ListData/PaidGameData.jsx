/** @format */

import React from "react";
import { motion } from "framer-motion";

const PaidGameData = ({id, img, name, price, description, handleModal }) => {
  return (
    <motion.div
    onClick={() => handleModal(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="py-3 px-5 flex flex-col justify-between bg-[#ffffff30] rounded-3xl m-2 md:w-[280px] items-center hover:shadow-white shadow-sm cursor-pointer text-white"
    >
      <div>
        <div className=" h-[190px] w-full rounded-2xl overflow-hidden border-2 mb-3">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </div>
        <div>
          <h1 className="font-bold">{name}</h1>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>
      <h1 className="text-[13px] font-thin text-white">$ {price.toFixed(2)}</h1>
    </motion.div>
  );
};

export default PaidGameData;
