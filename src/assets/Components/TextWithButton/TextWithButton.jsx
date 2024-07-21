import React from "react";

import Button from "../Button/Buton";

export default function TextWithButton(props) {
  return (
    <>
      <div
        className={` max-w-screen-2xl mx-auto lg:pt-12 md:pt-12 pt-0 pb-12  ${props.TextWithButtonClass} `}
      >
        <div
          className={`flex lg:items-start items-center  lg:text-left md:text-left text-center md:items-start justify-center flex-col ${props.mainDiv}`}
        >
          <img className="max-w-full block" src={props.svg} alt="" />
          <p>{props.spanText}</p>
          <h1
            className={`lg:leading-[56px] md:leading-[45px] leading-7 tracking-[-.02em] font-bold text-black mt-[37px] mb-[33px] lg:text-[44px] md:text-[30px] text-[25px] ${props.headingClass}  `}
          >
            {props.heading}
          </h1>
          {props.content && (
            <p className={`${props.contentClass}`}>{props.content}</p>
          )}
          {props.btnText && (
            <Button
              btn={props.btnText}
              to={"/ShopifyPlus"}
              btnClass="text-[#d5ed42]"
            />
          )}
        </div>
      </div>
    </>
  );
}
