import React from "react";
import "./Cards.css";

import { Link } from "react-router-dom";
export default function Cards(props) {
  return (
    <>
      <div className="lg:pt-[32px] Service  lg:px-[48px] lg:pb-[50px] md:pt-[20px] md:px-[48px]  px-[15px]   py-[30px] bg-white shadow-lg flex flex-col h-full rounded-[23px]">
        <div className="serv_thumb relative">
          <span className={`${props.cardSpanImgClass} `}>
            <img src={props.img} alt="" />{" "}
          </span>
        </div>

        <div>
          <h1
            className={`mb-[16px] font-bold mt-[30px] text-[18px] leading-[25px] tracking-[-.36px] ${props.GridNameClass} `}
          >
            {props.GridName}
          </h1>
          <p
            className={`text-[15px] leading-[28px ] tracking-[.01em] inline-block ${props.GridDescriptionClass} `}
          >
            {props.GridDescription}
          </p>
        </div>
        {props.btnText && (
          <div className="flex mt-auto pt-[20px]">
            <Link to={"/Pages/ContactPage"} className="link_text">
              {props.btnText}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
