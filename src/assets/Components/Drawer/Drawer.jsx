import React, { useState } from "react";
import { Link } from "react-router-dom";
import cancle from "../../Images/cancle.svg";
import drawer from "../../Images/drawerarrow.svg";
import back from "../../Images/drawback.svg";
import "./Drawer.css";

const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const navigationData = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/pages/project" },
    { name: "About Us", link: "/pages/about" },
    { name: "Services", link: "/" },
    { name: "Contact Us ", link: "/pages/ContactPage" }
  ];
  
  const renderItem = (item, index) => {
    const [isActive, setIsActive] = useState(false);

    const handleSubMenuClose = () => {
      setIsActive(false);
    };

    return (
      <li className="nav__item">
        <Link
          className="nav__link"
          to={item.link}
          onClick={() => setIsActive(!isActive)}
        >
          {item.name}
          {item.dropdown && <img src={drawer} alt="" />}
        </Link>
        {item.dropdown && (
          <ul className={`nav__sub ${isActive ? "is-active" : ""}`}>
            <li className="nav__item">
              <a
                className="nav__link sub__close pb-[15px] border-b border-solid border-black border-opacity-40 !gap-3 !justify-start"
                href="#"
                onClick={handleSubMenuClose}
              >
                <img className="transform rotate-180" src={back} alt="" />
                {item.name}
              </a>
            </li>
            {item.dropdown.map((subItem, subIndex) => renderItem(subItem, subIndex))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {isDrawerOpen && (
        <>
          <div
            className="fixed left-0 z-[10000] bottom-0 right-0 w-screen h-screen duration-500 bg-black opacity-50"
            onClick={toggleDrawer}
          ></div>
          <div className="fixed top-0 z-[99999] p-[20px] h-screen bg-white w-[320px]">
            <ul className="nav">
              <div className="flex justify-end mb-[15px]">
                <button onClick={toggleDrawer}>
                  <img className="w-[17px] h-[17px]" src={cancle} alt="Close drawer" />
                </button>
              </div>
              {navigationData.map((item, index) => renderItem(item, index))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Drawer;
