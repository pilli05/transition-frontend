import React, { useState } from "react";
import "./Header.css";
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";
import Drawer from "@mui/material/Drawer";
import MobileSideNavbar from "../SideNavbar/MobileSideNavbar";

const Header: React.FC = () => {
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const toggleLeftDrawer = (newOpen: boolean) => () => {
    setLeftDrawerOpen(newOpen);
  };

  const toggleRightDrawer = (newOpen: boolean) => () => {
    setRightDrawerOpen(newOpen);
  };

  return (
    <header className="flex flex-col  lg:flex-row justify-between lg:items-center px-5 py-3">
      <span className="hidden md:block text-[#8A8EA6] font-[500] text-base">
        Chat / Feed chat
      </span>

      <div className="md:hidden flex justify-between items-center">
        <RiMenu2Fill
          size={24}
          color="#8A8EA6"
          onClick={toggleLeftDrawer(true)}
        />
        <Drawer
          open={leftDrawerOpen}
          onClose={toggleLeftDrawer(false)}
          anchor="left"
        >
          <MobileSideNavbar />
        </Drawer>
        <span className="text-[#8A8EA6] font-[500] text-base">
          Chat / Feed chat
        </span>
        <RiMenu3Fill
          size={24}
          color="#8A8EA6"
          onClick={toggleRightDrawer(true)}
        />
        <Drawer
          open={rightDrawerOpen}
          onClose={toggleRightDrawer(false)}
          anchor="right"
        >
          <ul className="flex flex-col items-start space-y-5 p-5">
            <li className="flex items-center text-sm text-[#8A8EA6]">
              <img
                src="../../../src/assets/home.png"
                alt="home"
                className="mr-2 w-7 h-7"
              />{" "}
              Home
            </li>
            <li className="bg-[#FCCC55] px-4 py-1 rounded-lg text-sm text-[#44486D]">
              Process Owner HOD
            </li>
            <li className="bg-[#E553BC] px-4 py-1 rounded-lg text-sm text-white">
              Admin
            </li>
            <li className="text-sm text-[#8A8EA6] flex items-center">
              <img
                src="../../../src/assets/profile.png"
                alt="profile"
                className="mr-2"
              />
              Palak Bansal
            </li>
            <li className="flex items-center text-sm text-[#8A8EA6]">
              <img
                src="../../../src/assets/settings.png"
                alt="settings"
                className="mr-2 w-7 h-7"
              />{" "}
              Settings
            </li>
            <li className="flex items-center text-[#8A8EA6] font-[500]">
              <img
                src="../../../src/assets/sign-out.png"
                alt="logout"
                className="mr-3"
              />{" "}
              Logout
            </li>
          </ul>
        </Drawer>
      </div>
      <div className="hidden md:block">
        <ul className="flex  items-center space-x-4">
          <li>
            <img src="../../../src/assets/home.png" alt="home" />
          </li>
          <li className="bg-[#FCCC55] px-4 py-1 rounded-lg text-sm text-[#44486D]">
            Process Owner HOD
          </li>
          <li className="bg-[#E553BC] px-4 py-1 rounded-lg text-sm text-white">
            Admin
          </li>
          <li className="text-sm text-[#8A8EA6]">Palak Bansal</li>
          <li>
            <img src="../../../src/assets/profile.png" alt="profile" />
          </li>
          <li>
            <img src="../../../src/assets/settings.png" alt="settings" />
          </li>
          <li className="flex items-center text-[#8A8EA6] font-[500]">
            <img
              src="../../../src/assets/sign-out.png"
              alt="logout"
              className="mr-3"
            />{" "}
            Logout
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
