import { Card, DialogProps } from "@mui/material";
import React, { useState } from "react";
import Img from "../../assets/—Pngtree—credit card_5933595.png";
import { MdReportProblem } from "react-icons/md";
import PandaAvt from "../../assets/panda.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import Comment from "../comment/CommentList";
import { FaCartArrowDown } from "react-icons/fa6";

const Suggest = () => {
  const [openComment, setOpenComment] = useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const handleOpenComment = (scrollType: DialogProps["scroll"]) => {
    setOpenComment(true);
    setScroll(scrollType);
  };
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
      <div className="w-72 h-72">
        <img src={Img} />
      </div>
      <div className="container text-center w-72">
        <p className="p-2 truncate whitespace-nowrap">
          the atm 12345920120249300120sssssssssssss
        </p>
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

      <div className="my-2 px-2 flex gap-4 font-light text-13">
        <p className="flex justify-center items-center gap-1">
          <FaCartArrowDown
            size={"25px"}
            className="text-blue-500 cursor-pointer hover:text-blue-700"
          />
          Add to cart
        </p>
        <p className="flex justify-center items-center gap-1">
          <FaRegCommentDots
            size={"25px"}
            className="text-slate-500 cursor-pointer hover:text-slate-700"
            onClick={() => handleOpenComment("paper")}
          />
          Comment
        </p>
        <Comment open={openComment} scroll={scroll} setOpen={setOpenComment} />
        <p className="flex justify-center items-center gap-1">
          <MdReportProblem
            size={"25px"}
            className="text-red-500 cursor-pointer hover:text-red-700"
          />
          Report
        </p>
      </div>
    </Card>
  );
};

export default Suggest;
