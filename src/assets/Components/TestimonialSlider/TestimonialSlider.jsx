import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from "../../Images/test1.png";
import test2 from "../../Images/test2.png";
import test3 from "../../Images/test3.png";
import test4 from "../../Images/test4.png";
import test5 from "../../Images/test5.png";
import lft_ar from "../../Images/lft_ar.svg";
import rht_ar from "../../Images/rht_ar.svg";
import softsens from "../../Images/softsens.svg";

import "./TestimonialSlider.css";
export default function TestimonialSlider(props) {
  const slider1 = useRef();
  const slider2 = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const settingsFirstSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      slider2.current.slickGoTo(newIndex);
      setCurrentSlide(newIndex);
    },
    button: true,
  };
  const settingsSecondSlider = {
    ...settingsFirstSlider,
    dots: false,
    arrows: false,
    swipe: false,
    draggable: false,
    touchMove: false,
    afterChange: null,
  };
  const testimonial = [
    { src: test1, alt: "Slide 1" },
    { src: test2, alt: "Slide 2" },
  ];

  return (
    <>
      <div className="pt-[120px] pb-[120px] max-w-screen-2xl">
        <div className="text-center ">
          <p className="text-[17px] leading-[30px] block">{props.subheading}</p>
          <h2 className="max-w-[780px] my-[17px] mx-auto  tracking-[-.02em] lg:text-[44px] text-[25px] font-bold  leading-[42px] lg:leading-[56px] block">
            {props.heading}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row  items-center w-full justify-center max-w-[1006px] mt-[80px]  mx-auto mb-0 px-[20px] gap-y-[50px]">
          <div
            className={` w-[60%] md:w-[45%] lg:w-[45%] pr-0 lg:pr-[47px] md:pr-[25px] testimonial ${
              currentSlide === 0 ? "slick-disabled" : ""
            }`}
          >
            <Slider ref={slider1} {...settingsFirstSlider}>
              {props.testimonial.map((slide, index) => (
                <div
                  className={`w-[45%] testimonial ${
                    index === 0 ? "slick-disabled" : ""
                  } ${
                    index === props.testimonial.length - 1
                      ? "slide-disabled"
                      : ""
                  }`}
                >
                  <img
                    className="w-full rounded-[20px]"
                    src={slide.src}
                    alt={slide.alt}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full lg:w-[55%] md:w-[55%] pl-0   lg:pl-[47px] md:pl-[25px]">
            <Slider ref={slider2} {...settingsSecondSlider}>
              {props.testimonialData.map((data, index) => (
                <div
                  key={index}
                  className="!flex !flex-col items-center lg:items-start md:items-start justify-center"
                >
                  <p className="mb-[50px]   text-[17px]  text-center lg:text-left md:text-left">
                    {data.review}
                  </p>
                  <h5 className="mb-[20px] text-[17px] font-bold leading-[30px] tracking-tight ">
                    {data.title}
                  </h5>
                  <img src={data.slide_img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
