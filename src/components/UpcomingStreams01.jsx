/** @format */

// ResponsiveCarousel.js
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/index.css";
import NextArrow from "./UpStreamsData/NextArrow";
import PrevArrow from "./UpStreamsData/PrevArrow";
import { upStreamsOneData } from "../Data/dummyData";
import UpComing01Data from "./ListData/UpComing01Data";
import Reveal from "./Animation/Reveal";

const UpcomingStream01 = () => {
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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <Reveal>
      <div className="relative ">
        <h1 className="md:py-5 py-3 font-bold text-white md:text-[28px]">
          <span className="text-[#c15aec]">Upcoming</span> Streams
        </h1>
        <Slider {...settings} className="">
          {upStreamsOneData.map((item) => {
            return <UpComing01Data key={item.id} {...item} />;
          })}
        </Slider>
      </div>
    </Reveal>
  );
};

export default UpcomingStream01;
