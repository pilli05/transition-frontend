import React from "react";
import { CiLocationOn } from "react-icons/ci";

const ProfileDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-lg min-h-screen p-5">
      <div className="flex items-center">
        <span className="w-24 h-24 rounded-full font-[700] text-[#4C6292] text-xl bg-[#EEF0F5] flex items-center justify-center mr-3">
          HS
        </span>
        <div className="flex flex-col">
          <span className="text-#0F1729 text-3xl font-[700]">
            Hannibal Smith
          </span>
          <span className="text-[#676B89] text-sm mt-1 flex">
            <CiLocationOn size={20} color="#676B89" className="mr-1" />1 Market
            Street San Francisco, CA 94105
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
