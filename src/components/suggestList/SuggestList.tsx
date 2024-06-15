import { Card, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Suggest from "./Suggest";

const SuggestList = () => {
  return (
    <div className=" mx-[300px] rounded-md my-4 ">
      <Card className="font-sora bg-gradient-to-b from-orange-200 to-orange-100">
        <p className="text-center text-20 font-semibold m-5">
          <span className="text-blue-500">Suggest</span> Today
        </p>
        <Divider variant="middle" />

        <div className="flex flex-wrap gap-2 mx-[67px]">
          <Suggest />
          <Suggest />
          <Suggest />
          <Suggest />
          <Suggest />
        </div>
      </Card>
    </div>
  );
};

export default SuggestList;
