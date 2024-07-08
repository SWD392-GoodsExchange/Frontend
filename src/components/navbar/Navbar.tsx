import React, { useState } from "react";

import { RiExchangeFill } from "react-icons/ri";
import {
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
  Tooltip,
} from "@mui/material";
import MyAvat from "../../assets/panda.png";
import LoginForm from "../loginForm/LoginForm";
import SignUp from "../registerForm/SignUp";
import { RiMessengerFill } from "react-icons/ri";
import { RiExchangeLine } from "react-icons/ri";
import { RiNotification4Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { RiExchangeFundsLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import MyNotificatons from "../Notifications/MyNotifications";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [changeForm, setChangeForm] = useState("Signin");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setChangeForm("Signin");
    navigate("/");
  };

  return (
    <div className="flex flex-col fixed text-white  gap-3 items-center justify-center bg-gradient-to-b from-orange-600 to-orange-400  h-[100px] w-[1520px]">
      <div className="flex justify-between w-[93%] ">
        <div className="flex items-center gap-1">
          <p className="font-semibold text-20">GooodsExchange</p>
          <RiExchangeFill size={"30px"} />
        </div>
        <div>
          <Badge badgeContent={6} color="primary">
            <RiMessengerFill size={"30px"} />
          </Badge>
        </div>
      </div>
      <div className="flex justify-between items-center w-[93%]">
        <Tooltip title="Exchange" enterDelay={300}>
          <div
            className={`p-1 transition-all duration-300 ${
              location.pathname === "/exchange"
                ? `bg-white text-orange-500 rounded-full`
                : ``
            }`}
            onClick={() => {
              navigate("/exchange");
            }}
          >
            <RiExchangeLine
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </div>
        </Tooltip>
        <Tooltip title="Trade" enterDelay={300}>
          <div
            className={`p-1 transition-all duration-300 ${
              location.pathname === "/trade"
                ? `bg-white text-orange-500 rounded-full`
                : ``
            }`}
            onClick={() => {
              navigate("/trade");
            }}
          >
            <RiMoneyDollarCircleLine
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </div>
        </Tooltip>
        <Tooltip title="Transaction" enterDelay={300}>
          <div
            className={`p-1 transition-all duration-300 ${
              location.pathname === "/transaction"
                ? `bg-white text-orange-500 rounded-full`
                : ``
            }`}
            onClick={() => {
              navigate("/transaction");
            }}
          >
            <RiExchangeFundsLine
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </div>
        </Tooltip>
        <Tooltip title="Notifications" enterDelay={300}>
          <MyNotificatons />
        </Tooltip>
        <Tooltip title="Profile" enterDelay={300}>
          {localStorage.getItem("loggedIn") === "true" ? (
            <img
              className={`rounded-full cursor-pointer hover:outline  transition-all ${
                location.pathname === "/my-profile"
                  ? `bg-white text-orange-500 outline  rounded-full`
                  : ``
              }`}
              onClick={() => {
                navigate("/my-profile");
              }}
              src={localStorage.getItem("avatar")}
              width={30}
              height={30}
            />
          ) : (
            <button
              onClick={handleClickOpen}
              className="p-2 rounded-xl bg-white text-orange-500 hover:bg-orange-400 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-md"
            >
              Login
            </button>
          )}
        </Tooltip>
      </div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent className="overflow-x-hidden overflow-y-auto">
          {changeForm === "Signin" ? (
            <LoginForm
              setChangeForm={setChangeForm}
              handleClose={handleClose}
            />
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
