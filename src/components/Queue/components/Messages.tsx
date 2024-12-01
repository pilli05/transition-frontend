import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { MdOutlineMailOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiPaperPlaneRight } from "react-icons/pi";
import { TiPin } from "react-icons/ti";

const Messages: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-lg p-4 my-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <span className="text-[#0F1729] font-[700] text-xl">Ask Catura</span>
          <span className="flex items-center text-[#0F1729] text-sm">
            <MdOutlineMailOutline size={25} className="mr-1" />
            Whats App{" "}
            <IoMdArrowDropdown
              size={20}
              className="ml-1 mt-1"
              color="#0F8BFD"
            />
          </span>
          <span className="flex items-center text-[#0F1729] text-sm">
            <MdOutlineMailOutline size={25} className="mr-1" />
            Greetings{" "}
            <IoMdArrowDropdown
              size={20}
              className="ml-1 mt-1"
              color="#0F8BFD"
            />
          </span>
        </div>
        <div className="relative">
          <div
            className="my-5 bg-gray-400 rounded-lg p-5"
            style={{ filter: "blur(2px)" }}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="font-[700] text-base text-white text-center ">
              Greeting Template
            </p>
            <div className="flex items-center justify-between mt-5 space-x-5">
              <button className="bg-white rounded-lg px-3 py-2 text-[#0F8BFD] text-nowrap flex items-center">
                <LuCopy size={20} color="#0F8BFD" className="mr-1" /> Copy to
                Send
              </button>
              <button className="bg-white rounded-lg px-3 py-2 text-[#0F8BFD] flex items-center">
                <MdOutlineRemoveRedEye
                  size={20}
                  color="#0F8BFD"
                  className="mr-1"
                />{" "}
                Preview
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-4 border border-slate-200 rounded-lg bg-slate-50 outline-none"
          />
          <button className="bg-[#0F8BFD] rounded-lg p-4 ml-2 text-white flex items-center">
            <PiPaperPlaneRight />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <div className="  border-b border-slate-200 pb-2">
          <span className="text-[#0F1729] font-[700] text-xl">
            Action Launcher
          </span>
        </div>

        <div className="mt-5 flex items-center w-full p-4 border border-slate-200 rounded-lg bg-slate-50 ">
          <CiSearch size={25} color="#4C6292" className="mr-1" />
          <input
            type="search"
            placeholder="Search actions..."
            className="outline-none"
          />
        </div>
        <div className="flex items-center space-x-2 flex-wrap">
          <button className="bg-[#0F8BFD] rounded-lg p-4 mt-5 text-white flex items-center">
            <IoAddCircleOutline size={20} color="white" className="mr-1" /> Add
            Action
          </button>
          <button className="bg-[#c1e9eb] text-[#0F8BFD] rounded-lg p-4 mt-5">
            Fee Reversal
          </button>
          <button className="bg-[#c1e9eb] text-[#0F8BFD] rounded-lg p-4 mt-5">
            Retail Onboarding
          </button>
          <button className="bg-[#c1e9eb] text-[#0F8BFD] rounded-lg p-4 mt-5">
            Address Update
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mt-5">
        <div className="border-b border-slate-200 pb-2 flex items-center">
          <TiPin size={25} color="#0F8BFD" className="mr-2" />
          <span className="text-[#0F1729] font-[700] text-xl">
            Case Favorite
          </span>
        </div>

        <div className="mt-5 text-sm flex items-center w-full p-4 border border-slate-200 rounded-lg bg-slate-50 my-5">
          <span>Lorem ipsum dolor sit amet consectetur. Et tincidunt </span>
        </div>
        <div className="mt-5 text-sm flex items-center w-full p-4 border border-slate-200 rounded-lg bg-slate-50 my-5">
          <span className="flex items-center">
            <HiOutlinePhoto size={25} className="mr-1" /> Photo
          </span>
        </div>
        <div className="mt-5 text-sm flex items-center w-full p-4 border border-slate-200 rounded-lg bg-slate-50 my-5">
          <span>Lorem ipsum dolor sit amet consectetur. Et tincidunt </span>
        </div>
      </div>
    </div>
  );
};

export default Messages;
