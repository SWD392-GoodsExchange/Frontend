import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { RiExchangeFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const hadndleMenu = () => {
    setOpenMenu(!openMenu);
  };
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
      <div className="mx-[100px] gap-4 flex items-center">
        <div className="hover:bg-orange-700 p-2 rounded-md">
          <BsCart4 size={"25px"} />
        </div>
        <div className="hover:bg-orange-700 p-2 rounded-md">
          <IoIosNotifications size={"25px"} />
        </div>
        <div className="hover:bg-orange-700 p-2 rounded-md">
          <IoChatboxEllipsesOutline size={"25px"} />
        </div>
      </div>
      <div className="px-10 font-semibold">
        <p className="flex gap-2">
          <RxAvatar size={"22px"} onClick={hadndleMenu} />
          VoMongLuan
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
