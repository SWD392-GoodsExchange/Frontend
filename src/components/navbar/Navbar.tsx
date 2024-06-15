import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiExchangeFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Badge } from "@mui/material";
import MyAvat from "../../assets/bear.png";

const Navbar = () => {
  return (
    <nav className="flex fixed items-center bg-gradient-to-b from-orange-600 to-orange-400 h-[100px] px-10">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">GoodsExchange</div>
        <RiExchangeFill
          size={"50px"}
          color="white"
          className="cursor-pointer"
        />
      </div>
      <div className="flex bg-white ml-[200px] p-2 rounded-md text-black">
        <input
          className="pr-48 border-none outline-none"
          placeholder="Search"
        ></input>
        <button className="bg-orange-500 p-2 rounded-md hover:bg-orange-700">
          <CiSearch size={"22px"} color="white" />
        </button>
      </div>
      <div className="mx-[100px] gap-14 flex items-center">
        <div className="hover:bg-orange-700 p-2 rounded-md">
          <Badge badgeContent={4} color="info">
            <BsCart4 size={"25px"} />
          </Badge>
        </div>
        <div className="hover:bg-orange-700 p-2 rounded-md">
          <Badge badgeContent={5} color="info">
            <IoIosNotifications size={"25px"} />
          </Badge>
        </div>
        <div className="hover:bg-orange-700 p-2 rounded-md">
          <Badge badgeContent={10} color="info">
            <IoChatboxEllipsesOutline size={"25px"} />
          </Badge>
        </div>
      </div>
      <div className="font-semibold ">
        <p className="flex gap-2 items-center">
          <img src={MyAvat} width={50} height={50} />
          VoMongLuan
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
