/** @format */

import React, { useState } from "react";
import shopBanner from "../../public/shopBanner.png";
import { Link } from "react-router-dom";
import { paidGamesData } from "../Data/dummyData";
import PaidGameData from "../components/ListData/PaidGameData";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Shop = () => {
  const [showModalItem, setShowModalItem] = useState([]);
  const handleModal = (id) => {
    const showItem = paidGamesData.find((item) => item.id === id);
    setShowModalItem(() => {
      return showItem;
    });
  };
  return (
    <section className="py-3 md:px-6 px-2">
      <div className="relative w-full ">
        <div className="shrink-0 w-full h-[600px] ">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src={shopBanner}
            alt=""
          />
        </div>
        <div className="absolute md:w-1/2 w-full h-full flex flex-col top-0 left-0 md:justify-center justify-end text-white md:px-10 px-5 md:py-0 py-5 gap-4">
          <h1 className="md:text-[5rem] text-[2rem] font-black">Join now!</h1>
          <p className="md:text-[18px] text-[12px]">
            Join VIP to get the exclusive skins and get advance notice, get
            2000+ diamonds. get your VIP now!
          </p>
          <Link className="py-[0.5rem] text-[19px] font-semibold bg-gradient-to-b from-[#9900ff] to-[#ff93fb] w-full md:w-1/2 rounded-full text-center">
            Buy VIP
          </Link>
        </div>
      </div>
      <div className="w-full mt-10 p-4">
        <h1 className="font-black md:text-[4rem] text-[2rem] text-white pb-5">
          Explore <span className="text-[#c15aec]">Games</span>
        </h1>
        <div className="flex flex-wrap item-center justify-center py-5">
          {paidGamesData.map((item) => (
            <PaidGameData key={item.id} handleModal={handleModal} {...item} />
          ))}
        </div>
      </div>
      <div
        className={`${
          showModalItem.img ? "flex" : "hidden"
        } flex-col absolute  justify-center items-center w-full h-full top-0 left-0 bg-[#00000090] md:px-0 px-4 z-[9999]`}
      >
        <motion.div
          animate={{ scale: showModalItem.img ? 1 : 0 }}
          className="bg-[#ffeded] w-full md:w-1/2 m-auto p-8 rounded-xl relative"
        >
          <button
            onClick={() => setShowModalItem([])}
            className="absolute z-[1000] top-0 right-0 text-blue text-[2rem]"
          >
            <IoIosCloseCircleOutline />
          </button>
          <div className=" flex flex-col justify-center items-center">
            <div className="w-full md:h-[300px] h-[200px] rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={showModalItem.img}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 py-3">
              <h1 className="font-bold text-[1rem] md:text-[2rem]">
                {showModalItem.name}
              </h1>
              <p className="text-[14px]">{showModalItem.description}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button className="px-5 py-2 bg-green-600 font-semibold rounded-md">
              Add To Cart
            </button>
            <Link
              to="/404"
              className="px-5 py-2 bg-green-600 font-semibold rounded-md"
            >
              Buy now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
