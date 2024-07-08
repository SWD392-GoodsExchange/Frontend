import { Card } from "@mui/material";
import React from "react";
import { IoMdSettings } from "react-icons/io";

const BookMarkNav = () => {
  return (
    <div className="fixed w-[25%] h-screen">
      <Card sx={{ height: "100%" }}>
        <div className="flex items-center justify-between mx-4 my-2">
          <p className="font-bold text-20">Bookmark</p>
          <button className="p-2 bg-slate-200 rounded-full hover:bg-slate-300">
            <IoMdSettings size={"25px"} />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default BookMarkNav;
