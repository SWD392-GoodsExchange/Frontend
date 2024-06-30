import React from "react";
import Navbar from "../components/navbar/Navbar";
import Category from "../components/category/Category";
import SuggestList from "../components/suggestList/SuggestList";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import { Card } from "@mui/material";
import { RiSearchLine } from "react-icons/ri";
import { BsFilterRight } from "react-icons/bs";
import ExchangeList from "../components/ExchangeList/ExchangeList";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CreateProduct />
      <div className="flex justify-center text-center items-center my-1">
        <Card className="flex items-center p-2 text-black bg-slate-200 w-[425px] md:max-w-md">
          <div className="bg-slate-200 p-3 rounded-tl-md rounded-bl-md">
            <RiSearchLine size={"24px"} />
          </div>
          <input
            placeholder="Search..."
            className="py-3 pr-12 md:pr-36 w-full outline-none bg-slate-200 rounded-tr-md rounded-br-md"
          />
          <div className="p-3 rounded-full bg-slate-200 ml-1 cursor-pointer transition-all duration-300 hover:bg-slate-400 hover:text-white">
            <BsFilterRight size={"25px"} />
          </div>
        </Card>
      </div>
      <div className=" text-center text-black flex flex-col s my-1">
        <ExchangeList />
        <ExchangeList />
      </div>
    </div>
  );
};

export default HomePage;
