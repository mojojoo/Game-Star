/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/index.css";
import NextArrow from "./UpStreamsData/NextArrow";
import PrevArrow from "./UpStreamsData/PrevArrow";
import {
  globalHighlightsData,
  matchesHighlightGamesData,
} from "../Data/dummyData";
import GlobalHighlightData from "./ListData/GlobalHighlightData";
import MatchesHighlightData from "./ListData/MatchesHighlightData";
import NextArrowGame from "./UpStreamsData/NextArrowGame";
import PrevArrowGame from "./UpStreamsData/PrevArrowGame";

const MatchesCarousels = () => {
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

  const setting_two = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrowGame />,
    prevArrow: <PrevArrowGame />,
  };

  return (
    <div className="py-10 text-white mb-4">
      <h1 className="font-bold text-[30px]">
        <span className="text-[#c15aec]">Gloval</span> Highlights
      </h1>
      <div className="pt-[5rem]">
        <Slider {...settings}>
          {globalHighlightsData.map((item) => {
            return <GlobalHighlightData key={item.name_one} {...item} />;
          })}
        </Slider>
      </div>
      <div className="flex md:flex-row flex-col gap-2 mt-[3rem]">
        <div className="md:w-1/2 w-full">
          <Slider {...setting_two}>
            {matchesHighlightGamesData.map((item) => {
              return <MatchesHighlightData key={item.title} {...item} />;
            })}
          </Slider>
        </div>
        <div className="md:w-1/2 w-full">
          <Slider {...setting_two}>
            {matchesHighlightGamesData.reverse().map((item) => {
              return <MatchesHighlightData key={item.title} {...item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MatchesCarousels;
