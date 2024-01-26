/** @format */

import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/index.css";
import NextArrow from "./UpStreamsData/NextArrow";
import PrevArrow from "./UpStreamsData/PrevArrow";
import { matchesHistoryData, upStreamsOneData } from "../Data/dummyData";
import UpComing01Data from "./ListData/UpComing01Data";
import LastMatchData from "./ListData/LastMatchData";

const LastMatches = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1080) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 780) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <h1 className="md:py-5 py-3 font-bold text-white md:text-[28px]">
        <span className="text-[#c15aec]">Last</span> Matches
      </h1>
      <Slider {...settings} className="">
        {matchesHistoryData.map((item) => (
          <LastMatchData key={item.title} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default LastMatches;
