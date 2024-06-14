import { Divider } from "@mui/material";
import React from "react";
import { GiClothes } from "react-icons/gi";
const Category = () => {
  return (
    <div className=" mt-32 mx-[300px] flex flex-col text-20 gap-4 bg-white p-8 rounded-2xl">
      <p className="text-gray-400">Category</p>
      <Divider variant="middle" />
      <div className="flex gap-2">
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
        <p className=" bg-orange-500 p-3 rounded-md hover:bg-orange-700 transition-all duration-300 cursor-pointer hover:p-4">
          <GiClothes size={"22px"} />
          Fashion
        </p>
      </div>
    </div>
  );
};

export default Category;
