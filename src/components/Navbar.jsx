import React from "react";
import { GrUser } from "react-icons/gr";
import SearchBar from "./SearchBar";
import { BsFileWord, BsSearch } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { BiSearchAlt2, BiHelpCircle, BiUserCircle } from "react-icons/bi";
import { AiTwotoneGift } from "react-icons/ai";
const Navbar = ({ handleQuery }) => {
  return (
    <div className="w-[100%] flex flex-col p-5 gap-2 ">
      <div className="flex gap-5">
        <div className="w-[30%] flex p-2 items-center ">
          {/* <GrUser size={30} /> */}
          <div className="font-light text-xl flex gap-2 ">
            <div className="text-gray-400">iamneo.ai</div>
            <div className="text-teal-600">Talent Center</div>
          </div>
        </div>
        <div className="flex gap-2 w-[40%] rounded-xl border-b-2  border-b-teal-500 ">
          <div className="text-center p-3">
            <BiSearchAlt2 size={25} color="teal" />
          </div>
          <SearchBar handleQuery={handleQuery} />
        </div>
        <div className="bg-teal-500 text-white p-1 flex justify-center items-center rounded-lg w-[10%] cursor-pointer ">
          <div>Add new</div>
        </div>
        <div className="flex w-[20%] gap-2  justify-evenly items-center ">
          <AiTwotoneGift size={25} />
          <BiHelpCircle size={25} />
          <BiUserCircle size={25} />
        </div>
      </div>
      <div className="w-[100%] bg-gray-100 p-4 flex rounded-lg ">
        <div className="w-[80%] flex gap-2">
          <div className="flex ">
            <div className="flex p-2 gap-2">
              <MdWork size={23} /> <div>Job details</div>
            </div>

            <div className="flex p-2 gap-2">
              <AiOutlineRight size={23} /> <div>Full Stack Developers</div>
            </div>
            <div className="flex p-2 text-center bg-white text-gray-400 ml-4 rounded-lg ">
              view job details
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-white text-gray-400 p-2 rounded-sm cursor-pointer">
            Add candidate
          </div>
          <div className="bg-teal-600 text-white p-2 rounded-sm cursor-pointer">
            published
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
