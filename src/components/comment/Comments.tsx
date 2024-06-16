import React from "react";
import PandaAvt from "../../assets/panda.png";

const Comments = () => {
  return (
    <div>
      <div className="flex gap-4 my-5 rounded-full items-center text-black cursor-pointer">
        <img src={PandaAvt} width={50} height={50} />
        <div className="flex flex-col">
          <div className="flex flex-col bg-slate-300 p-3 rounded-md ">
            <p className="font-bold">Nguyen Ho Tan Tien</p>
            <p>
              Sản phẩm này còn không bạn
              ơiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            </p>
          </div>
          <div className="px-3">
            <p className="hover:underline text-13">6/15/2024 4:09</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
