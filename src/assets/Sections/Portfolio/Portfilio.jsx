import PortfolioCards from "../../Components/PortfolioCards/PortfolioCards";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = (props) => {
  return (
    <>
      <div className="pt-[120px] w-full pb-[120px] max-w-screen-2xl mx-auto overflow-hidden">
        <h1 className="text-center font-bold text-[25px] lg:text-[44px]">
          {props.Protfolio_title}
        </h1>
        <PortfolioCards />
      </div>
    </>
  );
};
export default Portfolio;
