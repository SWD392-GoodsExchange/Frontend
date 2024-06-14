import { Card, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Img from "../../assets/—Pngtree—credit card_5933595.png";
import { FaRegBookmark } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const SuggestList = () => {
  return (
    <div className="mx-[300px] rounded-md mt-4">
      <Card>
        <p className="text-center font-semibold m-5">Suggest Today</p>
        <Divider variant="middle" />

        <div className="flex flex-wrap gap-2 mx-[42px]">
          <Card className="my-3 flex flex-col items-center pb-3">
            <div className="w-[80px] h-[80px]">
              <img src={Img} />
            </div>
            <div className="container w-40">
              <p className="p-2 truncate whitespace-nowrap">
                Đèn học bảo vệ mắt
              </p>
            </div>
            <button className="bg-orange-500 p-3 rounded-full w-[80%] hover:bg-orange-700 transition-all duration-300 hover:text-white">
              View Detail
            </button>
            <div className="my-3 flex gap-2">
              <FaRegBookmark
                size={"22px"}
                className="text-blue-500 cursor-pointer"
              />

              <MdReportProblem
                size={"22px"}
                className="text-red-500 cursor-pointer"
              />
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default SuggestList;
