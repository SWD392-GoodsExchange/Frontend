import React from "react";
import { FaUser } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const Content = () => {
  return (
    <section className="flex-col">
      <div className="ml-[70px] mr-[54px] font-bold flex flex-col items-center shadow-md bg-gradient-to-b from-white/40 to-transparent rounded-[24px]">
        <div className="flex mt-16 items-start gap-8 ">
          <FaUser size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            12553
            <p className="text-13 font-semibold mb-[36px]">Member</p>
          </p>
        </div>
        <div className="gap-8 flex items-start mb-16 ">
          <FaProductHunt size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            63523
            <p className="text-13 font-semibold">Products</p>
          </p>
        </div>
      </div>
      <div className="mt-[90px] flex flex-col gap-8 font-semibold ">
        <div className="mb-[51px] gap-8 flex items-center ml-[70px] mr-[29px]">
          <FaCircleCheck size={"30px"} />
          <p className="text-20 flex  pl-[20px]">Convenient</p>
        </div>
        <div className="mb-[51px] gap-8 flex items-center ml-[70px] mr-[29px]">
          <FaCircleCheck size={"30px"} />
          <p className="text-20 flex  pl-[20px]">No external fees</p>
        </div>
        <div className="mb-[51px] gap-8 flex items-center ml-[70px] mr-[29px]">
          <FaCircleCheck size={"30px"} />
          <p className="text-20 flex  pl-[20px]">Fast</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
