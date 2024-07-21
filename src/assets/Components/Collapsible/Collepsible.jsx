import React, { useState } from "react";
import "./Collepsible.css";
import minussign from "../../Images/minussign.svg";
import plussign from "../../Images/plussign.svg";

const Collepsible = ({ CollepsibleData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {CollepsibleData.map((item, index) => (
        <div
          key={index}
          className="border-t-2 border-[#c8c8c8] border-b-2 mb-[-2px]"
        >
          <a
            className="flex justify-between pt-[22px] pb-[25px]"
            onClick={() => handleToggle(index)}
          >
            {item.collepData}
            <span>
              {openIndex === index ? (
                <>
                  <img src={minussign} alt="" />
                </>
              ) : (
                <span>
                  <img src={plussign} alt="" />
                </span>
              )}
            </span>
          </a>
          <div
            className={`panel-collapse  ${
              openIndex === index ? "" : "panel-close"
            }`}
          >
            <p className="p-3 leading-[30px] tracking-[.01em]">
              {item.collepreply}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Collepsible;
