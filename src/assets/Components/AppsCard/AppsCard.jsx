import React from "react";
import rivyo from "../../Images/rivyo.svg";
import dwonload from "../../Images/Dwonload.svg";
export default function AppsCard(props) {
  return (
    <>
      <div className={`shadow-lg ${props.mainCardClass}`}>
        <a
          className={`h-full w-full flex flex-col bg-white ${props.mainCardDiv} `}
        >
          {props.img && (
            <div className={`p-[28px] bg-[#ccff90] ${props.imgClass}`}>
              <img
                src={props.img}
                className={`w[103px] h-[103px] max-w-full block  ${props.imgSize} `}
                alt=""
              />
            </div>
          )}

          <div
            className={`py-[9px] px-[10px] flex flex-col ${props.CardContantClass} `}
          >
            {props.title && (
              <h3
                className={`text-[16px ] font-bold leading-[17px] tracking-[-.02] mb-[15px] min-h-[34px] overflow-hidden text-ellipsis ${props.titleClass} `}
              >
                {props.title}
              </h3>
            )}

            {props.rating && (
              <div
                className={`flex justify-between items-center ${props.ratingClass}`}
              >
                <span className="inline-flex text-[12px] leading-[13px] uppercase m-0  gap-[5px]  ">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.31958L7.86916 3.74691L11.7063 4.46548L9.02436 7.30225L9.52671 11.1737L6 9.49958L2.47329 11.1737L2.97564 7.30225L0.293661 4.46548L4.13084 3.74691L6 0.31958Z"
                      fill="#F79C10"
                    ></path>
                  </svg>
                  <span className={`${props.ratingTextClass}`}>
                    {props.rating}({props.totlePersons})
                  </span>
                </span>
                {props.dwonloads && (
                  <span
                    className={`inline-flex text-[12px] leading-[13px] uppercase m-0  gap-[5px] ${props.dwonloadsTextClass} `}
                  >
                    <span>|</span>
                    <span>{props.dwonloads}+</span>
                    <img src={dwonload} alt="" />
                  </span>
                )}
              </div>
            )}
          </div>
        </a>
      </div>
    </>
  );
}
