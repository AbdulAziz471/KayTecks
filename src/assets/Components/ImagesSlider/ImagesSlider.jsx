import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Mask_group_1 from "../../Images/Mask_group-1.png";
import Mask_group_2 from "../../Images/Mask_group-2.png";
import Mask_group_3 from "../../Images/Mask_group-3.png";
import Mask_group_4 from "../../Images/Mask_group-4.webp";
import Mask_group_5 from "../../Images/Mask_group-5.png";
import Mask_group_6 from "../../Images/Mask_group-6.png";

export default function ContactForm({ Filter }) {
  const slideData = [
    {
      id: 1,
      image: Mask_group_4,
    },
    {
      id: 2,

      image: Mask_group_6,
    },
    {
      id: 3,

      image: Mask_group_1,
    },
    {
      id: 4,

      image: Mask_group_2,
    },
    {
      id: 5,

      image: Mask_group_3,
    },
    {
      id: 6,
      image: Mask_group_5,
    },
  ];

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    responsive: responsiveSettings,
  };

  return (
    <>
      <div className="  max-w-screen-2x  py-10 w-[70%] mx-auto">
        <Slider {...settings}>
          {slideData.map((slides) => (
            <div key={slides.id} className="max-w-full w-[1100px] mx-auto  ">
              <div className="">
                <a
                  href=""
                  className="flex items-center bg-white justify-center gap-3 py-3   "
                >
                  <span className={`${Filter}`}>
                    <img src={slides.image} alt="" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
