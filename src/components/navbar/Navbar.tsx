import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiExchangeFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import MyAvat from "../../assets/bear.png";
import LoginForm from "../loginForm/LoginForm";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <nav className="flex  items-center bg-gradient-to-b from-orange-600 to-orange-400 h-[120px] px-10">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">GoodsExchange</div>
        <RiExchangeFill
          size={"50px"}
          color="white"
          className="cursor-pointer"
        />
      </div>
      <div className="flex bg-white ml-[20px] p-2 rounded-md text-black">
        <input
          className="pr-20 border-none outline-none"
          placeholder="Search"
        ></input>
        <button className="bg-orange-500 p-2 rounded-md hover:bg-orange-700">
          <CiSearch size={"22px"} color="white" />
        </button>
      </div>
      <p className="ml-16 p-3 cursor-pointer text-20 bg-white text-orange-500 rounded-md hover:text-orange-300">
        Exchange
      </p>
      <p className="mx-16 cursor-pointer hover:text-orange-300 text-20">
        Purchase
      </p>

      <div className="mx-[50px] gap-14 flex items-center">
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
        {/* <p className="flex gap-2 items-center">
          <img src={MyAvat} width={50} height={50} />
          VoMongLuan
        </p> */}
        <button
          onClick={handleClickOpen}
          className="p-5 rounded-xl bg-white text-orange-500 hover:bg-orange-400 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-md"
        >
          Sign In
        </button>
      </div>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogContent>
          <LoginForm />
        </DialogContent>
        <DialogActions>
          <button
            className="mr-5 p-3 bg-red-500 text-white rounded-md hover:text-orange-500 font-semibold transition-all duration-300"
            onClick={handleClose}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;
