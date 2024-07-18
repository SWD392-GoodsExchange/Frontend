import React from "react";
import { FaFacebook } from "react-icons/fa";
import Instagram from "../../assets/instagram.png";
import Tiktok from "../../assets/tiktok.png";
import Linkedin from "../../assets/linkedin.png";

type Props = {};

const channelList = [
  {
    id: 1,
    icon: <FaFacebook size={"30px"} color="blue" />,
    title: "Facebook",
    link: "@GoodsExchange",
    profit: "+2 %",
  },
  {
    id: 2,
    icon: <img src={Instagram} width={30} height={30} />,
    title: "Instagram",
    link: "@GoodsExchange",
    profit: "+5 %",
  },
  {
    id: 3,
    icon: <img src={Tiktok} width={30} height={30} />,
    title: "Tiktok",
    link: "@GoodsExchange",
    profit: "+3 %",
  },
  {
    id: 4,
    icon: <img src={Linkedin} width={30} height={30} />,
    title: "Linkedin",
    link: "@GoodsExchange",
    profit: "+7 %",
  },
];

const AdminChannels = (props: Props) => {
  return (
    <div className="bg-[#d5dad8] p-[20px] rounded-3xl flex gap-4 items-center">
      <div className="w-[200px]">
        <p className="text-20 font-bold">Channels</p>
        <p>
          Your channels statistics for{" "}
          <span className="font-semibold">1 week </span>
          period
        </p>
      </div>
      {channelList.map((item) => (
        <div className="flex flex-col items-center bg-white shadow-md rounded-3xl p-3">
          {item.icon}
          <p className="font-bold">{item.title}</p>
          <p className="font-light">{item.link}</p>
          <p className="font-bold text-26">{item.profit}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminChannels;
