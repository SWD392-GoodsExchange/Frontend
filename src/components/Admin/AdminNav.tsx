import React from "react";
import Avt from "../../assets/bear.png";
import { useLocation, useNavigate } from "react-router-dom";
import ExchangeImg from "../../assets/exchange.png";
import { FiLogOut } from "react-icons/fi";

type Props = {};

const AdminNav = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem("loggedIn", "false");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="flex flex-col h-[100%] items-center rounded-tl-3xl rounded-bl-3xl bg-[#e2d1bd] py-[20px]">
      <p className="flex items-center gap-2 font-semibold text-20">
        <img src={ExchangeImg} alt="" width={40} height={40} />
        GoodsExchange
      </p>
      <div className="mt-[30px] flex flex-col items-center">
        <img
          src={localStorage.getItem("avatar")}
          alt=""
          width={60}
          height={60}
        />
        <div className="flex flex-col items-center mt-[10px] gap-1">
          <p className="font-bold">{localStorage.getItem("userName")}</p>
          <p className="font-light">{localStorage.getItem("roleName")}</p>
        </div>
      </div>
      <div className="my-[80px]">
        <ul className="text-center flex flex-col gap-14">
          <li
            className={`cursor-pointer ${
              location.pathname == "/admin" && `font-bold underline`
            }`}
            onClick={() => {
              navigate("/admin");
            }}
          >
            Dashboard
          </li>
          <li
            className={`cursor-pointer ${
              location.pathname == "/admin/manageMember" &&
              `font-bold underline`
            }`}
            onClick={() => {
              navigate("/admin/manageMember");
            }}
          >
            Manage Member
          </li>
          <li
            className={`cursor-pointer ${
              location.pathname == "/admin/report" && `font-bold underline`
            }`}
            onClick={() => {
              navigate("/admin/report");
            }}
          >
            Manage Report
          </li>
        </ul>
      </div>
      <button onClick={handleLogout} className="flex items-center gap-2 ">
        <div className="p-3 bg-black rounded-full">
          <FiLogOut color="white" />
        </div>
        <p className="font-light">Log out</p>
      </button>
    </div>
  );
};

export default AdminNav;
