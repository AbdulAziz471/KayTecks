import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Shopify_partner from "../../Images/Shopify_partner.svg";
import Shopify_Plus from "../../Images/Shopify_Plus.svg";
import Button from "../Button/Buton";
import dark_green from "../../Images/dark_green.svg";
import dark_yellow from "../../Images/dark_yellow.svg";
import man_slider from "../../Images/man_slider.svg";
import partners from "../../Images/partners.svg";
import app from "../../Images/appStore.svg";

export default function HomeBannar() {
  const textArray = [
    "Wegsite Designing",
    "App Developement ",
    "Indeustru Experience",
    "E-com Development",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <div
        className="bg-gradient-to-r from-[rgba(213,253,248,1)] via-[rgba(193,251,211,1)] to-[rgba(189,251,204,1)] overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-full w-[1650px] m-auto relative px-[15px]">
          <div className=" pl-[10px] flex items-center flex-col-reverse md:flex-row md:pl-[20px] lg:pl-[90px]">
            <div className="lg:w-[48%] md:w-[48%] w-full flex-col pt-[30px] pb-[30px] items-center justify-center  lg:pr-[56px] flex lg:items-start lg:flex-col md:items-start md:flex-col ">
              <div className="text-center lg:text-left md:text-left">
                <span className="bg-black inline-flex rounded-full uppercase font-bold mb-6 py-2 px-8  leading-4  text-xs gap-x-1 text-white ">
                  <strong className="text-[#d5ed42] font-medium">
                    11 year of
                  </strong>
                  <span className="gap-[20px]">
                    <Typewriter
                      options={{
                        strings: [textArray[currentTextIndex]],
                        autoStart: true,
                        loop: false,
                      }}
                    />
                  </span>
                </span>

                <h1 className="lg:text-[54px] lg:text-left md:text-left text-[30px] max-w-[777px] text-center md:text-[40px] mb-[43px] leading-[36px] md:leading-[50px]  lg:leading-[62px] tracking-[-.02em] font-bold">
                  We build high-performing e-commerce solutions for your online
                  business
                </h1>
              </div>
              <div className="flex  gap-[20px] lg:justify-start justify-center  items-center relative">
                <div className="pr-[20px] relative before:contents-[''] before:absolute before:right-0 before:top-0 before:w-[1px] before:h-[46px]  before:bg-black">
                  <img className="mb-[55px]" src={Shopify_partner} alt="" />
                </div>
                <div className="pr-[20px] relative ">
                  <img className="mb-[55px]" src={Shopify_Plus} alt="" />
                </div>
              </div>
              <div>
                <Button btn="Get Started" to="/Pages/ContactPage" />
              </div>
            </div>
            <div className="lg:w-[52%] md:w-[52%] w-full  text-right pt-[56px] px-0 lg:px-[18px] pb-[30px]">
              <div className="relative pt-[122px] pr-[121px] pb-[125px] pl-[55px] inline-block">
                <img
                  className="absolute left-[10px] top-[10px] w-[96%] h-[96.3%] z-2  "
                  style={{
                    transform: `translate(${cursorPosition.x / 90}px, ${
                      cursorPosition.y / 90
                    }px)`,
                  }}
                  src={dark_green}
                  alt=""
                />
                <img
                  className="absolute left-[27px] top-[0px] w-[87%] h-[98%] z-0"
                  style={{
                    transform: `translate(${cursorPosition.x / 90}px, ${
                      cursorPosition.y / 90
                    }px)`,
                  }}
                  src={dark_yellow}
                  alt=""
                />
                <img
                  className="max-w-[589px]  z-3 relative w-full z-1"
                  style={{
                    transform: `translate(${cursorPosition.x / 90}px, ${
                      cursorPosition.y / 90
                    }px)`,
                  }}
                  src={man_slider}
                  alt=""
                />
                <div>
                  <div
                    className="absolute z-1 left-0 lg:left-[-53px]  top-[23.62%] max-w-[110px] md:max-w-[120px] lg:max-w-[155px] bg-white p-3 rounded-xl  "
                    style={{
                      transform: `translate(${cursorPosition.x / 90}px, ${
                        cursorPosition.y / 90
                      }px)`,
                    }}
                  >
                    <img
                      src={partners}
                      alt=""
                      className="mx-auto  max-w-full"
                    />
                  </div>
                  <div
                    className="absolute z-1 left-0 lg:left-[-46px]  bottom-[28.2%]  max-w-[110px] md:max-w-[120px] lg:max-w-[155px] overflow-hidden bg-white p-3 rounded-xl"
                    style={{
                      transform: `translate(${cursorPosition.x / 90}px, ${
                        cursorPosition.y / 90
                      }px)`,
                    }}
                  >
                    <img
                      src={partners}
                      alt=""
                      className="mx-auto  max-w-full"
                    />
                  </div>
                  <div
                    className="absolute z-1 right-[0px]  top-[42.4%]   md:max-w-[140px] lg:max-w-[180px] max-w-[120px] overflow-hidden bg-white p-3 rounded-xl"
                    style={{
                      transform: `translate(${cursorPosition.x / -40}px, ${
                        cursorPosition.y / 90
                      }px)`,
                    }}
                  >
                    <img src={app} alt="" className="mx-auto  max-w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
