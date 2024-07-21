import React, { useState } from "react";
import cancle from "../../Images/cancle.svg";
import drawer from "../../Images/drawerarrow.svg";
import back from "../../Images/drawback.svg";
import "./Drawer.css";
const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const navigationData = [
    { name: "Capabilities", link: "/pages/capabilities" },
    { name: "Shopify Plus", link: "/shopify-plus" },
    {
      name: "Shopify Apps",
      dropdown: [
        { name: "Shopify Apps", link: "/pages/ShopifyApp" },
        { name: "Rivyo Product Reviews & QA", link: "/pages/rivyo_review" },
        { name: "Native Subscriptions", link: "/pages/Native_Subscription" },
        { name: "Wishlist Club", link: "/pages/WishListClub" },
        { name: "AddUp Checkout", link: "/pages/add_up_checkout" },
        { name: "Engines ‑ Discount Box", link: "/pages/engines_discount_box" },
        { name: "See All", link: "/pages/ShopifyApp" },
      ],
    },
    {
      name: "About",
      dropdown: [
        { name: "About Us", link: "/pages/about" },
        { name: "Our Team", link: "/pages/our_team" },
        { name: "Life At Contrive", link: "/pages/life_at_webcontrive" },
        { name: "Our Works", link: "/pages/our_work" },
        { name: "Careers", link: "/pages/careers" },
      ],
    },
    { name: "Blog", link: "/pages/blog" },
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
