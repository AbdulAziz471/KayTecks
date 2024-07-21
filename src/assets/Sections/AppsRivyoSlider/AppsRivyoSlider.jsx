import React from "react";
import Slider from "react-slick";
import "./AppsRivyoSlider.css";
import pageflylogo from "../../Images/pageflylogo.png";
import AppRivyoCard from "../../Components/AppSliderMainComponent/AppRivyoCard/AppRivyoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gemPages from "../../Images/RivyoCardImages/gemPages.png";
import EasySlide from "../../Images/RivyoCardImages/EasySlide.png";
import Track from "../../Images/RivyoCardImages/17Track.png";
import log from "../../Images/RivyoCardImages/20+.png";
import AI_Search from "../../Images/RivyoCardImages/AI_Search.png";
import Appsce from "../../Images/RivyoCardImages/Appsce.png";
import Attrac from "../../Images/RivyoCardImages/Attrac.png";
// import EasySlide from "../../Images/RivyoCardImages/EasySlide.png";
import EasyTab from "../../Images/RivyoCardImages/EasyTab.png";
import Ecomposor from "../../Images/RivyoCardImages/Ecomposor.png";
import EssantCountDwon from "../../Images/RivyoCardImages/EssantCountDwon.png";
import EssentailFree from "../../Images/RivyoCardImages/EssentailFree.png";
import FastSimon from "../../Images/RivyoCardImages/FastSimon.png";
// import gemPages from "../../Images/RivyoCardImages/gemPages.png";
// import ICart from "../../Images/RivyoCard/ICart.png";

export default function AppsRivyoSlider(props) {
  const data = [
    { index: 1, image: gemPages, title: "GemPages Landing Page Builder" },
    { index: 2, image: EasySlide, title: "PageFly Landing Page Builder" },
    { index: 3, image: AI_Search, title: "AI Search, Filter & Recommend" },
    { index: 4, image: pageflylogo, title: "Card 1" },
    { index: 5, image: Track, title: "Card 2" },
    { index: 6, image: log, title: "Card 3" },
    { index: 7, image: Appsce, title: "Card 1" },
    { index: 8, image: Attrac, title: "Card 2" },
    { index: 9, image: EasyTab, title: "Card 3" },
    { index: 10, image: Ecomposor, title: "Card 1" },
    { index: 11, image: EssantCountDwon, title: "Card 2" },
    { index: 12, image: EssentailFree, title: "Card 3" },
    { index: 13, image: EssentailFree, title: "Card 1" },
    { index: 14, image: FastSimon, title: "Card 2" },
    // { index: 15, image: ICart, title: "Card 3" },
    { index: 16, image: pageflylogo, title: "Card 1" },
    { index: 17, image: pageflylogo, title: "Card 2" },
    { index: 18, image: pageflylogo, title: "Card 3" },
    { index: 19, image: pageflylogo, title: "Card 1" },
    { index: 20, image: pageflylogo, title: "Card 2" },
  ];
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
  // const groupedData = [];
  // for (let i = 0; i < data.length; i += 9) {
  //   groupedData.push(data.slice(i, i + 9));
  // }

  const mobileGroupedData = [];
  const desktopGroupedData = [];

  // Group data for mobile
  for (let i = 0; i < data.length; i += 4) {
    mobileGroupedData.push(data.slice(i, i + 4));
  }

  // Group data for desktop
  for (let i = 0; i < data.length; i += 9) {
    desktopGroupedData.push(data.slice(i, i + 9));
  }
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: responsiveSettings,
  };
  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: responsiveSettings,
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: responsiveSettings,
  // };
  return (
    <>
      <div className="py-[120px] relative AppRivyobg_Image  ">
        <div className="   ">
          <div className="flex justify-center align-center">
            <h1 className="text-center text-[44px] leading-[56px] tracking-[-.88px] font-bold  ">
              {props.AppSliderHeading}
            </h1>
          </div>
        </div>
        {/* <div className="max-w-[942px] mx-auto">
          <Slider {...settings}>
            {groupedData.map((group, index) => (
              <div key={index} className="w-full mt-[60px]">
                <div className="grid grid-cols-3 gap-4">
                  {" "}
                  {group.map((item, cardIndex) => (
                    <AppRivyoCard
                      key={cardIndex}
                      image={item.image}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div> */}

        <div className="block md:hidden lg:hidden max-w-[942px] mx-auto">
          <Slider {...mobileSettings}>
            {mobileGroupedData.map((group, index) => (
              <div key={index} className="mt-[60px]">
                <div className="grid grid-cols-2 gap-4">
                  {group.map((item, cardIndex) => (
                    <AppRivyoCard
                      key={cardIndex}
                      image={item.image}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block  lg:block max-w-[942px] mx-auto">
          <Slider {...desktopSettings}>
            {desktopGroupedData.map((group, index) => (
              <div key={index} className="mt-[60px]">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.map((item, cardIndex) => (
                    <AppRivyoCard
                      key={cardIndex}
                      image={item.image}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
