import React from "react";
import "./SideNavbar.css";
import { MenuList } from "../../constants/MenuList";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SideNavbar: React.FC = () => {
  return (
    <div className="bg-[#0D1424] min-h-screen p-6 hidden md:block sticky top-0">
      <img src="../../../src/assets/logo.png" alt="logo" className="mb-5" />

      <ul>
        {MenuList.map((menu) => (
          <li
            key={menu.id}
            className={`${
              menu.name === "Queue"
                ? "text-white text-lg font-semibold p-2"
                : "text-[#9EA0B3] text-lg font-semibold p-2"
            }`}
          >
            <Link to={menu.link} className="flex items-center">
              <img src={menu.icon} alt={menu.name} className="w-6 h-6 mr-3 " />{" "}
              {menu.name}{" "}
              {menu.subLink && (
                <MdOutlineKeyboardArrowRight
                  size={20}
                  color="#9EA0B3"
                  className="mt-1 ml-3"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
