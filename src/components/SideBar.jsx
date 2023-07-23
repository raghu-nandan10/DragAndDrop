import React from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
const SideBar = () => {
  return (
    <div className=" flex flex-col gap-10 bg-teal-600  w-[5vw] h-[100vh]  ">
      <div className="flex justify-center items-center p-4 border-b borer-b-gray cursor-pointer">
        <FaUserEdit size={30} color="lightgray" />
      </div>
      <div className="sidebar-options flex flex-col justify-center items-center gap-4">
        <div className="p-3 cursor-pointer">
          <GiClockwork size={30} color="lightgray" />
        </div>
        <div className="p-3 cursor-pointer bg-teal-500 rounded-md">
          <MdWork size={30} color="white" />
        </div>
        <div className="p-3 cursor-pointer rounded-md">
          <AiOutlineUser size={30} color="lightgray" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;
