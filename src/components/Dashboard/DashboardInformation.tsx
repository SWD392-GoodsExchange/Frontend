import { Divider, Tooltip } from "@mui/material";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

type Props = {};

const DashboardInformation = (props: Props) => {
  return (
    <div className=" flex flex-col gap-10 w-[500px]">
      <p className=" flex justify-between font-bold items-center text-36">
        Dashboard
        <CiSettings size={"22px"} />
      </p>
      <div className="flex justify-between">
        <Tooltip title="Total product have in system">
          <div className="flex flex-col">
            <p className="flex gap-2 items-center">
              Product
              <IoIosInformationCircleOutline size={"22px"} />
            </p>
            <Divider />
            <p className=" mt-2 text-24 font-semibold">27,6 M</p>
          </div>
        </Tooltip>
        <Tooltip title="Total account in system">
          <div className="flex flex-col">
            <p className="flex gap-2 items-center">
              Account
              <IoIosInformationCircleOutline size={"22px"} />
            </p>
            <Divider />
            <p className=" mt-2 text-24 font-semibold">2 M</p>
          </div>
        </Tooltip>
        <Tooltip title="Report quantity in system">
          <div className="flex flex-col">
            <p className="flex gap-2 items-center">
              Report
              <IoIosInformationCircleOutline size={"22px"} />
            </p>
            <Divider />
            <p className=" mt-2 text-24 font-semibold">10 M</p>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default DashboardInformation;
