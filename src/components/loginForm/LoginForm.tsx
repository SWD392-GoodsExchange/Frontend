import { Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { RxEyeClosed } from "react-icons/rx";
import { RiExchangeFill } from "react-icons/ri";

type Props = {
  setChangeForm: React.Dispatch<React.SetStateAction<string>>;
};

const LoginForm = ({ setChangeForm }: Props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col w-[500px]">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col justify-center items-center text-20">
          <RiExchangeFill
            color="white"
            size={"40px"}
            className=" bg-orange-500 rounded-full"
          />
          <h3 className="text-orange-500 font-bold">GoodsExchange</h3>
        </div>
        <h4 className="text-20 font-semibold">Sign in</h4>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p>User name</p>
          <input
            className="p-3 bg-slate-500 text-white rounded-md outline-none"
            type="text"
            onChange={handleChangeUserName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Password</p>
          <label className="flex items-center bg-slate-500 text-white rounded-md ">
            <input
              id="password-input"
              className="p-3 w-[90%] mr-3 bg-slate-500 text-white rounded-md outline-none"
              type={showPassword ? "text" : "password"}
              onChange={handleChangePassword}
            />
            {showPassword ? (
              <FiEye
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
                size={"22px"}
              />
            ) : (
              <RxEyeClosed
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
                size={"22px"}
              />
            )}
          </label>
        </div>
      </div>
      <button
        className={`mt-10 p-3 ${
          userName && password
            ? "bg-orange-600"
            : "bg-orange-300 cursor-not-allowed "
        } text-white rounded-md`}
        disabled={userName && password ? false : true}
      >
        Sign In
      </button>
      <p className="text-slate-400 mr-48 justify-center items-center">
        You don't have account?
        <span className="text-orange-400">
          <button
            onClick={() => {
              setChangeForm("Signup");
            }}
            className="hover:underline mx-1"
          >
            Sign up
          </button>
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
