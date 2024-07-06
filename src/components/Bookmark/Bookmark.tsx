import { Card } from "@mui/material";
import React from "react";
import FakeImg from "../../assets/—Pngtree—credit card_5933595.png";
import fakeAvt from "../../assets/bear.png";

const Bookmark = () => {
  return (
    <Card sx={{ padding: "30px 20px" }}>
      <div className="flex gap-8">
        <img src={FakeImg} width={150} height={150} className="outline" />
        <div className="flex flex-col">
          <p className="font-bold">Tôi muốn đổi cái card này</p>
          <p className="">Description: {"Mới xài được 2 năm"}</p>
          <div className="flex gap-1">
            <div className="p-2 my-2 bg-yellow-500 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
              <p>Category</p>
            </div>
            <div className="p-2 my-2 bg-blue-500 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
              <p>Origin</p>
            </div>
            <div className="p-2 my-2 bg-orange-500 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
              <p>Type</p>
            </div>
          </div>
          <p className="font-light flex items-center gap-2">
            <img src={fakeAvt} width={30} height={30} />
            Bookmark from{" "}
            <span className="font-semibold"> Nguyen Dinh Hoang Huy</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Bookmark;
