import React from "react";
import { Profiles } from "../../constants/Profiles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Message from "../../assets/message.png";

const ProfileTabs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {Profiles.map((profile) => (
        <div className=" flex items-center mr-5 px-3 py-5 rounded-lg bg-white w-full">
          <span className="w-10 h-10 rounded-full bg-[#EEF0F5] flex items-center justify-center mr-1 text-[#4C6292] font-[700]">
            {profile.logo}
          </span>
          <span
            className={`${
              profile.logo === "HS"
                ? "text-[#0F8BFD] font-[600] text-sm"
                : "text-[#0F1729] font-[600] text-sm"
            }`}
          >
            {profile.name}
          </span>
        </div>
      ))}
      <div className="mr-5 px-3 py-5 rounded-lg bg-[#0F8BFD] flex items-center justify-between w-full">
        <span className="w-10 h-10 rounded-full flex items-center justify-center mr-1 text-[#4C6292] font-[700]">
          <img src={Message} alt="message" className="mr-2 " />
        </span>
        <span className="text-white font-[600] text-sm">Messaging</span>
        <MdOutlineKeyboardArrowRight
          size={20}
          color="white"
          className="mt-1 ml-3"
        />
      </div>
    </div>
  );
};

export default ProfileTabs;
