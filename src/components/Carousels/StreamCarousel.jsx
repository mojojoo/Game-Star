/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { catrgoryStreamData } from "../../Data/dummyData";

import CategoryStreamData from "../ListData/CategoryStreamData";


const StreamCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
  };

  return (
    <div className="pt-[1rem] sm:hidden block">
      <Slider {...settings}>
        {catrgoryStreamData.map((item) => {
          return <CategoryStreamData key={item.name_one} {...item} />;
        })}
      </Slider>
    </div>
  );
};

export default StreamCarousel;
