import React, { useEffect, useState } from "react";
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
  Tooltip,
} from "@mui/material";
import MyAvat from "../../assets/bear.png";
import LoginForm from "../loginForm/LoginForm";
import SignUp from "../registerForm/SignUp";
import { RiMessengerFill } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { RiNotification4Line } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { RiExchangeFundsLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [changeForm, setChangeForm] = useState("Signin");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setChangeForm("Signin");
  };

  const handleClickProfile = () => {
    navigate("/my-profile");
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-gradient-to-b from-orange-600 to-orange-400 h-[100px]">
      <div className="flex justify-between w-[93%] ">
        <div className="flex items-center gap-1">
          <p className="font-semibold text-20">GooodsExchange</p>
          <RiExchangeFill size={"30px"} />
        </div>
        <div>
          <Badge badgeContent={4} color="primary">
            <RiMessengerFill size={"30px"} />
          </Badge>
        </div>
      </div>
      <div className="flex justify-between items-center w-[93%]">
        <Tooltip title="Exchange" enterDelay={300}>
          <div>
            <RiExchangeLine
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </div>
        </Tooltip>
        <Tooltip title="Trade" enterDelay={300}>
          <div>
            <BsHouseDoor
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </div>
        </Tooltip>
        <Tooltip title="Transaction" enterDelay={300}>
          <div>
            <RiExchangeFundsLine
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </div>
        </Tooltip>
        <Tooltip title="Notifications" enterDelay={300}>
          <Badge badgeContent={4} color="primary">
            <RiNotification4Line
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </Badge>
        </Tooltip>
        <Tooltip title="Profile" enterDelay={300}>
          <div>
            <RxAvatar
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
              onClick={handleClickOpen}
            />
          </div>
        </Tooltip>
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
        <DialogContent className="overflow-x-hidden overflow-y-auto">
          {changeForm === "Signin" ? (
            <LoginForm setChangeForm={setChangeForm} />
          ) : (
            <SignUp setChangeForm={setChangeForm} />
          )}
        </DialogContent>
        <DialogActions className="flex justify-center items-center">
          <button
            className="mr-5 p-3 bg-red-500 text-white rounded-md hover:text-orange-500 font-semibold transition-all duration-300"
            onClick={handleClose}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Navbar;
