import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLine from "../../Images/arrow-line.svg";
import email_1 from "../../Images/email_1.svg";
import "./ContactBanner.css";

export default function ContactBannar() {
  const slideData = [
    {
      id: 1,
      email: "info@webcontrive.com",
      image: email_1,
    },
    {
      id: 2,
      email: "contact@webcontrive.com",
      image: email_1,
    },
    {
      id: 3,
      email: "info@webcontrive.com",
      image: email_1,
    },
    {
      id: 4,
      email: "info@webcontrive.com",
      image: email_1,
    },
    {
      id: 5,
      email: "info@webcontrive.com",
      image: email_1,
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
      },
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    responsive: responsiveSettings,
  };

  return (
    <div className="ContactPage">
      <div className="max-w-[1650px] w-full px-15 mx-auto text-white">
        <div>
          <h1 className="text-center text-[54px] font-bold font tracking-[0.04em] text-white max-w-[807px] w-full mx-auto">
            Let's build the future of your business together!
          </h1>
          <p className="max-w-[391px] w-full font-medium text-[17px] leading-[30px] text-center text-white mx-auto pt-[20px]">
            Get in touch with us and we'll help you create a{" "}
            <strong className="text-[#d0f224]">compelling online brand.</strong>
          </p>
        </div>
        <div className=" absolute bottom-[-40px] left-[-10px]  max-w-[1300px] margin-auto  ">
          <Slider {...settings}>
            {slideData.map((slides) => (
              <div key={slides.id} className="w-full   ">
                <div className="shadow-lg  pb-[20px]">
                  <a
                    href=""
                    className="flex items-center bg-white justify-center gap-3 py-3   "
                  >
                    <span>
                      <img src={slides.image} alt="" />
                    </span>
                    <span className="text-black font-bold">{slides.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
