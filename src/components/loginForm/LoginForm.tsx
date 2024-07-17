import { Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { RxEyeClosed } from "react-icons/rx";
import { RiExchangeFill } from "react-icons/ri";
import authApi from "../../services/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import SignalRServices from "../../services/signalR/signalRServices";

type Props = {
  setChangeForm: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
};

const LoginForm = ({ setChangeForm, handleClose }: Props) => {
  const navigate = useNavigate();
  const [feId, setFeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [isLogged, setIsLogged] = useState<boolean>();

  const handleChangeFeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeId(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const loginResponse: any = await authApi.login({
        FeId: feId,
        Password: password,
      });
      if (loginResponse.isSuccess) {
        toast.success("Login successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        localStorage.clear();
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("avatar", loginResponse.data.avatar);
        localStorage.setItem("feId", loginResponse.data.feId);
        localStorage.setItem("userName", loginResponse.data.userName);
        localStorage.setItem("jwtToken", loginResponse.data.jwtToken);
        localStorage.setItem("refreshToken", loginResponse.data.refreshToken);
        setIsLogged(true);
        setTimeout(() => {
          handleClose();
          navigate("/exchange");
        }, 4000);
      } else {
        toast.error("Invalid FeId or password", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex flex-col md:w-auto">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center gap-5">
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
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>FeId</p>
            <input
              className="p-3 bg-slate-500 text-white rounded-md outline-none"
              type="text"
              id="FeId"
              value={feId}
              onChange={handleChangeFeId}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Password</p>
            <label className="flex items-center bg-slate-500 text-white rounded-md ">
              <input
                id="password"
                value={password}
                className="p-3 w-[90%] mr-3 bg-slate-500 text-white rounded-md outline-none"
                type={showPassword ? "text" : "password"}
                onChange={handleChangePassword}
              />
              {showPassword ? (
                <FiEye
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer mr-3"
                  size={"22px"}
                />
              ) : (
                <RxEyeClosed
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer mr-3"
                  size={"22px"}
                />
              )}
            </label>
          </div>
        </div>
        <button
          className={`mt-10 p-3 ${
            feId && password
              ? "bg-orange-600"
              : "bg-orange-300 cursor-not-allowed "
          } text-white rounded-md`}
          disabled={feId && password ? false : true}
          type="submit"
        >
          Sign In
        </button>
      </form>
      <p className="text-slate-400 justify-center items-center">
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
