import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiPieChartFill } from "react-icons/ri";

const ProfileDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center p-5">
        <span className="w-24 h-24 rounded-full font-[700] text-[#4C6292] text-xl bg-[#EEF0F5] flex items-center justify-center mr-3">
          HS
        </span>
        <div className="flex flex-col">
          <span className="text-#0F1729 text-2xl font-[700]">
            Hannibal Smith
          </span>
          <span className="text-[#676B89] text-sm mt-1 flex">
            <CiLocationOn size={20} color="#676B89" className="mr-1" />1 Market
            Street San Francisco, CA 94105
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-100  m-5">
        <div className="flex items-center justify-between mb-2 border-b-2 border-slate-200 p-3 mx-2">
          <span className="text-sm text-[#676B89]">Customer ID</span>
          <span className="text-sm text-[#0F1729] font-semibold flex">
            12345{" "}
            <BsThreeDotsVertical size={20} color="#4C6292" className="ml-2" />
          </span>
        </div>
        <div className="flex items-center justify-between mb-2 border-b-2 border-slate-200 p-3 mx-2">
          <span className="text-sm text-[#676B89]">Email Address</span>
          <span className="text-sm text-[#0F1729] font-semibold flex">
            rachel@sample.com{" "}
            <BsThreeDotsVertical size={20} color="#4C6292" className="ml-2" />
          </span>
        </div>
        <div className="flex items-center justify-between mb-2 p-3 mx-2">
          <span className="text-sm text-[#676B89]">Phone Number</span>
          <span className="text-sm text-[#0F1729] font-semibold flex ">
            8051298905
            <BsThreeDotsVertical size={20} color="#4C6292" className="ml-2" />
          </span>
        </div>
        <div className="flex items-center  justify-center bg-slate-200 h-12 rounded-b-lg">
          <span className="text-sm text-[#0F1729] font-semibold flex ">
            <IoAddCircleOutline size={20} color="#4C6292" className="mr-2" />{" "}
            Add
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-100  m-5">
        <div className="flex items-center justify-between mb-2 border-b-2 border-slate-200 p-3 mx-2">
          <span className="text-sm text-[#676B89]">Loyalty Tier</span>
          <span className="text-sm text-[#0F1729] font-semibold flex">
            Silver{" "}
            <BsThreeDotsVertical size={20} color="#4C6292" className="ml-2" />
          </span>
        </div>
        <div className="flex items-center justify-between mb-2 p-3 mx-2">
          <span className="text-sm text-[#676B89]">Segment</span>
          <span className="text-sm text-[#0F1729] font-semibold flex">
            Sleepy Customer{" "}
            <BsThreeDotsVertical size={20} color="#4C6292" className="ml-2" />
          </span>
        </div>

        <div className="flex items-center  justify-center bg-slate-200 h-12 rounded-b-lg">
          <span className="text-sm text-[#0F1729] font-semibold flex ">
            <IoAddCircleOutline size={20} color="#4C6292" className="mr-2" />{" "}
            Add
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-100  m-5">
        <div className="flex items-center justify-between mb-2 p-3 mx-2 border-b-2 border-slate-200 ">
          <span className="text-sm text-[#676B89]">Lifetime Value</span>
          <span className="text-sm text-[#0F1729] font-semibold flex">
            $ 1M{" "}
            <BsThreeDotsVertical size={20} color="#4C6292" className="ml-2" />
          </span>
        </div>
        <div className="flex items-center justify-between mb-2 p-3 mx-2">
          <span className="text-sm text-[#676B89]">Propensity to Purchase</span>
          <span className="text-sm text-[#D7AF48] font-semibold flex">
            <RiPieChartFill size={20} color="#D7AF48" className="mr-2" /> 75%
          </span>
        </div>
        <div className="flex items-center  justify-center bg-slate-200 h-12 rounded-b-lg">
          <span className="text-sm text-[#0F1729] font-semibold flex ">
            <IoAddCircleOutline size={20} color="#4C6292" className="mr-2" />{" "}
            Add
          </span>
        </div>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-100  m-5">
        <div className="flex items-center justify-between mb-2 p-3 mx-2">
          <span className="text-sm text-[#676B89]">Engagement Score</span>
          <span className="text-sm text-[#48D756] font-semibold flex">
            <RiPieChartFill size={20} color="#48D756" className="mr-2" /> 80%
          </span>
        </div>
        <div className="flex items-center  justify-center bg-slate-200 h-12 rounded-b-lg">
          <span className="text-sm text-[#0F1729] font-semibold flex ">
            <IoAddCircleOutline size={20} color="#4C6292" className="mr-2" />{" "}
            Add
          </span>
        </div>
        <button className="bg-[#0F8BFD] font-semibold rounded-lg text-white p-3  w-full my-5">
          Assign other Agent
        </button>
        <button className="border-dotted border-2 border-[#0F8BFD] rounded-lg font-semibold text-[#0F8BFD] p-3  w-full">
          Add New Widget
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
