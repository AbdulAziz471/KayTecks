import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cancle from "../../Images/cancle.svg";
import "./Verticle.css";
export default function VerticalNav({ navData }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <ul className={"lg:flex    font-medium gap-x-[45px]  hidden "}>
        <div className="lg:hidden flex w-full justify-end pt-2 pr-5"></div>
        {navData.map((item, index) => (
          <li
            key={index}
            onMouseOver={() => setHoverIndex(index)}
            onMouseOut={() => setHoverIndex(null)}
            className="relative"
          >
            <NavLink
              to={item.link}
              exact
              className={({ isActive }) =>
                "block py-[30px] hover:shadow-[inset_0px_-2px_0px_#000] NavLinkClass font-semibold text-gray-900 " +
                (isActive ? " shadow-[inset_0px_-2px_0px_#000] " : "")
              }
            >
              {item.name}
              <div
                className={`absolute w-full min-w-[240px]  drawer_list overflow-hidden bg-white left-0 mt-[32px] border-gray-200 transition-all duration-200 shadow-xl ${
                  hoverIndex === index
                    ? "w-full min-w-[240px] max-h-[500px]"
                    : "max-h-0"
                }`}
              >
                <ul>
                  <p className="lg:hidden md:hidden"> {item.name}</p>
                  {item.dropdown &&
                    item.dropdown.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        exact
                        to={subItem.link}
                        activeClassName="border-b-2 border-black  text-blue-500"
                        className="block p-[10px] border-l-4 border-transparent hover:border-black hover:border-l-4  hover:bg-gray-100"
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                </ul>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
