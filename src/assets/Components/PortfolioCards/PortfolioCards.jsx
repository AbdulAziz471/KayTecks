import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Portfoliocard.css";
import left from "../../Images/left.svg";
import right from "../../Images/right.svg";
import port1 from "../../Images/port-1.png";
import port2 from "../../Images/port-2.png";
import port3 from "../../Images/port-3.png";
import port4 from "../../Images/port-4.png";
import port5 from "../../Images/port-5.png";
import port6 from "../../Images/port-6.png";
import port7 from "../../Images/port-7.jpg";
import port8 from "../../Images/port-8.png";

import externalLink from "../../Images/externalLink.svg";
export default function PortfolioCards() {
  const slideData = [
    {
      id: 1,

      image: port1,
      name: "Nutribullet",
      description: "Create, nourish, thrive.",
    },
    {
      id: 2,

      image: port2,

      name: "Book Xcess",
      description: "One Of The Biggest Online Book Stores In The World!",
    },

    {
      id: 3,
      image: port3,

      name: "PetSafe",
      description: "PetSafe® Brand: Your Pet's Best Companion!",
    },
    {
      id: 4,
      image: port4,

      name: "Bahimi",
      description: "Swimwear Products",
    },
    {
      id: 5,
      image: port5,

      name: "Case DoDo",
      description: "Mobile Cases And Accessories",
    },
    {
      id: 6,
      image: port6,

      name: "Dantal Herbs",
      description: "Tea Products",
    },
    {
      id: 7,
      image: port7,
      name: "Answr",
      description: "Hair Treatment Products",
    },
    {
      id: 8,
      image: port8,

      name: "Osee",
      description: "Hair & Skin",
    },
  ];

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ];
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    responsive: responsiveSettings,
  };
  return (
    <>
      <div className="portfolio">
        <Slider {...settings}>
          {slideData.map((slides) => (
            <div>
              <div
                key={slides.id}
                className="  shadow-2xl p-[10px] rounded-xl  "
              >
                <div className="">
                  <a href="" className="">
                    <span>
                      <img src={slides.image} alt="" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="pt-[26px]">
                <h1 className="text-[18px] leading-[25px] font-bold">
                  <a className="flex justify-between">
                    {slides.name} <img src={externalLink} alt="" />
                  </a>
                </h1>
                <p className="leading-[18px] tracking-[.02em] upercase mt-[14px] text-[16px] ">
                  {slides.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
