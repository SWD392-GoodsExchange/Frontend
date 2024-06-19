import { Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { RxEyeClosed } from "react-icons/rx";
import { RiExchangeFill } from "react-icons/ri";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";

type Props = {
  setChangeForm: React.Dispatch<React.SetStateAction<string>>;
};

const SignUp = ({ setChangeForm }: Props) => {
  const [feId, setFeId] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [dob, setDob] = useState<string>();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const onChangeFeiD = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeId(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onChangeDob = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
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
        <h4 className="text-20 font-semibold">Sign up</h4>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p>FeID</p>
          <input
            className="p-3 bg-slate-500 text-white rounded-md outline-none"
            type="text"
            onChange={onChangeFeiD}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Email</p>
          <input
            className="p-3 bg-slate-500 text-white rounded-md outline-none"
            type="email"
            onChange={onChangeEmail}
          />
        </div>
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
        <div className="flex flex-col gap-2">
          <p>Address</p>
          <input
            className="p-3 bg-slate-500 text-white rounded-md outline-none"
            type="text"
            onChange={onChangeAddress}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Gender</p>
          <select
            className="p-3 bg-slate-500 text-white rounded-md outline-none "
            onChange={onChangeGender}
          >
            <option value={"male"}> Male </option>
            <option value={"female"}>Female</option>
            <option value={"other"}>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Phone</p>
          <input
            className="p-3 bg-slate-500 text-white rounded-md outline-none"
            type="string"
            onChange={onChangePhone}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Date of birth</p>
          <input
            className="p-3 bg-slate-500 text-white rounded-md outline-none"
            type="date"
            onChange={onChangeDob}
          />
        </div>
      </div>
      <button
        className={`mt-10 p-3 ${
          feId &&
          email &&
          userName &&
          password &&
          address &&
          gender &&
          phone &&
          dob
            ? "bg-orange-600"
            : "bg-orange-300 cursor-not-allowed "
        } text-white rounded-md`}
        disabled={
          feId &&
          email &&
          userName &&
          password &&
          address &&
          gender &&
          phone &&
          dob
            ? false
            : true
        }
      >
        Sign Up
      </button>
      <p className="text-slate-400 mr-48 justify-center items-center">
        You have account?
        <span className="text-orange-400">
          <button
            onClick={() => {
              setChangeForm("Signin");
            }}
            className="hover:underline mx-1"
          >
            Sign in
          </button>
        </span>
      </p>
    </div>
  );
};

export default SignUp;
