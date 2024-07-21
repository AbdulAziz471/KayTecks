import TextComponent from "../../Components/TextComponent/TextComponent";
import {
  SerSvg1,
  SerSvg2,
  SerSvg3,
  SerSvg4,
  SerSvg5,
  SerSvg6,
} from "../../Images/ShopifyPlusSvg/ShopifyPlusSvg";

import "./ShopifyPlusService.css";
const ShopifyPlusServices = () => {
  const servicesData = [
    {
      index: 1,
      title: "Web Development",
      content:
        "Craft dynamic, robust websites with our expert web development services, tailored to meet your business needs.",
      SvgComponent: SerSvg1,
    },
    {
      index: 2,
      title: "Software Development",
      content:
        "Develop cutting-edge software solutions that streamline operations and enhance business efficiency.",
      SvgComponent: SerSvg2,
    },
    {
      index: 3,
      title: "IT Support",
      content:
        "Receive first and second line support ensuring maximum uptime and productivity for your operations.",
      SvgComponent: SerSvg3,
    },
    {
      index: 4,
      title: "Hardware Solutions",
      content:
        "Comprehensive hardware repair and refurbishment services to maintain and optimize your IT infrastructure.",
      SvgComponent: SerSvg4,
    },
    {
      index: 5,
      title: "Digital Marketing",
      content:
        "Leverage our digital marketing expertise to boost your online presence and attract more customers.",
      SvgComponent: SerSvg5,
    },
    {
      index: 6,
      title: "Branding & Design",
      content:
        "Enhance your brand with our creative design solutions, from logos to complete visual identity overhauls.",
      SvgComponent: SerSvg6,
    },
  ];
  return (
    <>
      <div className="relative  bacground_image ">
        <div className="py-[20px] sm:py-[50px] md:py-[90px] lg:py-[120px] ">
          <div>
            <TextComponent
              mainClass="!max-w-full  w-[100%] sm:w-[90%] md:w-[70%]  lg:w-[60%] !text-center"
              spanClass="!text-[#1a50a3] text-center !font-bold "
              headingClass="!pt-[14px] !leading-[30px] !md:leading-[30px] lg:!leading-[56px] text-center  mx-auto font-bold    !pb-[20px]"
              heading="Empower Your Business with K-tech's Advanced IT Solutions."
              spantext="Discover Our Expertise"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-2 md:w-[100%] pt-[60px] px-[40px ] pb-[50px] max-w-full lg:max-w-[1292px] mx-auto">
            {servicesData.map((serCard, index) => (
              <div
                key={index}
                className=" relative px-[20px] sm:px-[10px] md:px-[20px]  lg:px-[40px] py-[40px] rounded transition-all duration-300 hover:shadow-2xl changeColorSvg  "
              >
                <div>
                  <serCard.SvgComponent />
                </div>
                <div className="mt-[30px]">
                  <h5 className="font-bold leading-[25px] mb-[20px] md:text-[16px] lg:text-[18px] tracking-[-.02em]">
                    {serCard.title}
                  </h5>
                  <p className=" max-w-full lg:max-w-[213px] w-full font-normal text-[16px] leading-[25px] lg:leading-[30px]">
                    {serCard.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopifyPlusServices;
