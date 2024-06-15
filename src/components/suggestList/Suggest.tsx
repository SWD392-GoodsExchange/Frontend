import { Card } from "@mui/material";
import React from "react";
import Img from "../../assets/—Pngtree—credit card_5933595.png";
import { FaRegBookmark } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import PandaAvt from "../../assets/panda.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BiError } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";

const Suggest = () => {
  return (
    <Card className="font-sora my-3 flex flex-col items-center pb-3 hover:pt-4">
      <div className="flex gap-2 my-2">
        <FaRegCircleCheck size={"22px"} className="text-green-400" />
        <p className="text-green-400">Stocking</p>
      </div>
      {/* <div className="flex gap-2 my-2">
        <BiError size={"22px"} className="text-red-400" />
        <p className="text-red-400">Out of stock</p>
      </div> */}
      <div className="flex py-4 first:pt-0 last:pb-0">
        <img className="h-10 w-10 rounded-full" src={PandaAvt} alt="" />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">
            Nguyen Dinh Hoang Huy
          </p>
          <p className="text-sm text-slate-500 truncate">huyndhse@fpt.edu.vn</p>
        </div>
      </div>
      <div>
        <p className="flex gap-2 items-center text-slate-700">
          <BsCalendarDate size={"22px"} />
          6/15/2024
        </p>
      </div>
      <div className="w-[150px] h-[150px]">
        <img src={Img} />
      </div>
      <div className="container text-center w-64">
        <p className="p-2 truncate whitespace-nowrap">The atm</p>
      </div>

      <div className="p-2 my-2 bg-yellow-500 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
        <p>Technology</p>
      </div>
      <div className="p-2 bg-blue-500 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
        <p>Japan</p>
      </div>
      <button className="bg-orange-500 my-2 p-3 rounded-2xl w-[60%] hover:bg-orange-700 transition-all duration-300 hover:text-white">
        Contact
      </button>

      <div className="my-2 flex gap-2">
        <FaRegBookmark
          size={"25px"}
          className="text-blue-500 cursor-pointer hover:text-blue-700"
        />

        <MdReportProblem
          size={"25px"}
          className="text-red-500 cursor-pointer hover:text-red-700"
        />
      </div>
    </Card>
  );
};

export default Suggest;
