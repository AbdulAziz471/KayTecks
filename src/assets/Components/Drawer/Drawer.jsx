import React, { useState } from "react";
import cancle from "../../Images/cancle.svg";
import drawer from "../../Images/drawerarrow.svg";
import back from "../../Images/drawback.svg";
import "./Drawer.css";
const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const navigationData = [
    { 
      name: "Home", // A dynamic take on 'Home'
      link: "/" 
    },
   
    { 
      name: "Projects ", // A dynamic take on 'Home'
      link: "/pages/project" 
    },
    { 
      name: "About Us ", // A dynamic take on 'Home'
      link: "/pages/about" 
    },
    { 
      name: "Services", // A dynamic take on 'Home'
      link: "/" 
    },
    // {
    //   name: "Our Services",
    //   link: "javascript:void(0)",
    //   dropdown: [
    //     { name: "Web Architecting", link: "/web-architecting" },
    //     { name: "App Innovation", link: "/app-innovation" },
    //     { name: "Organic Search Mastery", link: "/search-mastery" },
    //     { name: "Digital Outreach", link: "/digital-outreach" },
    //     { name: "Creative Engineering", link: "/creative-engineering" },
    //     { name: "Cloud Solutions", link: "/cloud-solutions" },
    //     { name: "AI Integrations", link: "/ai-integrations" },
    //   ],
    // },
    // {
    //   name: "Discover K-tech", // More inviting and comprehensive than just 'About'
    //   link: "javascript:void(0)",
    //   dropdown: [
    //     { name: "K-tech Life", link: "/pages/life_at_ktech" }, // Streamlined and branded
    //     { name: "Our Story", link: "/pages/about" },
    //     { name: "Meet the Innovators", link: "/pages/our_team" }, // More engaging title
    //     { name: "Showcase", link: "/pages/our_work" }, // More direct and appealing
    //     { name: "Join Us", link: "/pages/careers" }, // Action-oriented
    //   ],
    // },
    // {
    //   name: "Value Blueprint", // Unique name for Pricing Plan
    //   link: "/pricing" // Changed to a more typical link structure
    // },
  ];
  
  const renderItem = (item, index) => {
    const [isActive, setIsActive] = useState(false);

    const handleSubMenuClose = (e) => {
      e.preventDefault();
      setIsActive(false);
    };

    return (
      <>
        <li className="nav__item">
          <a
            className="nav__link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsActive(!isActive);
            }}
          >
            {item.name}
            {item.dropdown && <img src={drawer} />}
          </a>
          {item.dropdown && (
            <ul className={`nav__sub ${isActive ? "is-active" : ""}`}>
              <li className="nav__item">
                <a
                  className="nav__link sub__close pb-[15px] border-b border-solid border-black border-opacity-40 !gap-3 !justify-start  "
                  href="#"
                  onClick={handleSubMenuClose}
                >
                  <img className="transform rotate-180" src={back} alt="" />
                  {item.name}
                </a>
              </li>
              {item.dropdown.map((subItem, subIndex) =>
                renderItem(subItem, subIndex)
              )}
            </ul>
          )}
        </li>
      </>
    );
  };
  return (
    <>
      {isDrawerOpen && (
        <>
          <div
            className={
              " fixed left-0 z-[10000] bottom-0 right-0 w-screen h-screen duration-500 bg-black opacity-50 "
            }
            onClick={toggleDrawer}
          ></div>
          <div className="fixed top-0 z-[99999] P-[20px] h-screen bg-white w-[320px] ">
            <ul className="nav">
              <div className="flex justify-end mb-[15px]">
                <button onClick={toggleDrawer}>
                  <img
                    className="w-[17px] h-[17px]"
                    src={cancle}
                    alt="Close drawer"
                  />
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

{
  /* <div
className={` lg:hidden ${
  isVisible
    ? "fixed left-0 bottom-0 right-0 w-screen h-screen duration-500 bg-black opacity-50 "
    : "hidden"
}`}
onClick={toggleNav}
></div> */
}
