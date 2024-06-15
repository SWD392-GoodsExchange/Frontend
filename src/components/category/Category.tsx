import { Divider } from "@mui/material";
import React from "react";
import { GiClothes } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { PiShirtFolded } from "react-icons/pi";
import { MdOutlinePets } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiShorts } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { PiGuitarLight } from "react-icons/pi";
import { PiToolboxLight } from "react-icons/pi";
import JapanFlag from "../../assets/japan.png";
import VietNamFlag from "../../assets/vietnam.png";
import UsaFlag from "../../assets/united-states.png";
import ChinaFlag from "../../assets/china.png";
import ThaiLanFlag from "../../assets/thailand.png";

const categoryList = [
  {
    icon: <GiClothes size={"25px"} />,
    title: "Fashion",
  },
  {
    icon: <RiComputerLine size={"25px"} />,
    title: "Laptop",
  },
  {
    icon: <FaMobileAlt size={"25px"} />,
    title: "Mobile",
  },
  {
    icon: <PiShirtFolded size={"25px"} />,
    title: "T-Shirt",
  },
  {
    icon: <MdOutlinePets size={"25px"} />,
    title: "Pet",
  },
  {
    icon: <IoFastFoodOutline size={"25px"} />,
    title: "Food",
  },
  {
    icon: <GiShorts size={"25px"} />,
    title: "Short",
  },
  {
    icon: <CgGames size={"25px"} />,
    title: "Game",
  },
  {
    icon: <PiGuitarLight size={"25px"} />,
    title: "Music",
  },
  {
    icon: <PiToolboxLight size={"25px"} />,
    title: "Work",
  },
];

const originList = [
  {
    icon: <img src={JapanFlag} alt="Japan" />,
    title: "Japan",
  },
  {
    icon: <img src={VietNamFlag} alt="VietNam" />,
    title: "VietNam",
  },
  {
    icon: <img src={UsaFlag} alt="USA" />,
    title: "USA",
  },
  {
    icon: <img src={ChinaFlag} alt="China" />,
    title: "China",
  },
  {
    icon: <img src={ThaiLanFlag} alt="Thailand" />,
    title: "Thailand",
  },
];
const Category = () => {
  return (
    <div className=" mt-32 mx-[300px] flex flex-col text-20 gap-4 bg-white p-8 rounded-md">
      <p className="text-gray-400">Category</p>
      <Divider variant="middle" />
      <div className="flex flex-wrap gap-2 font-light mx-2">
        {categoryList.map((item) => (
          <p className=" bg-yellow-500 flex flex-col items-center p-3 w-40 rounded-md hover:bg-yellow-700 transition-all text-center duration-300 cursor-pointer">
            {item.icon}
            {item.title}
          </p>
        ))}
      </div>

      <p className="text-gray-400 mt-4">Origin</p>
      <Divider />
      <div className="flex flex-wrap gap-2 font-light mx-2">
        {originList.map((item) => (
          <p className=" bg-blue-500 flex flex-col items-center p-3 w-40 rounded-md hover:bg-blue-700 transition-all text-center duration-300 cursor-pointer">
            {item.icon}
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Category;
