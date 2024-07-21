import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import minus from "../../Images/minussign.svg";
import plus from "../../Images/FooterP.svg";
const HorizontalNav = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-full lg:my-8    lg:border-hidden md:border-hidden border-b  sm:border-gray-300">
      <div
        className="flex flex-row items-center justify-between"
        onClick={toggleNav}
      >
        <h2 className="lg:mb-6 my-3   text-[18px] leading-[20px]  font-bold text-gray-900 uppercase  ">
          {props.navTitle}
        </h2>
        <span className="lg:hidden md:hidden w-[10px] ">
          {isOpen ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </span>
      </div>
      {isOpen && (
        <ul className="text-gray-900 dark:text-gray-400 font-normal">
          {props.navItems.map((item, index) => (
            <li key={index} className="mb-4 text-[17px] leading-[31px]">
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  "hover:underline " +
                  (isActive ? " underline font-bold  " : "")
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HorizontalNav;
