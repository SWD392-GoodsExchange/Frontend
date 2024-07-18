import React from "react";

import Weather from "../Weather";
import DashboardInformation from "../Dashboard/DashboardInformation";
import ProductChart from "../Chart/ProductChart";
import Top5PostProduct from "../TopAccount/Top5PostProduct";
import AdminChannels from "./AdminChannels";

type Props = {};

const AdminDashboard = (props: Props) => {
  const chartData = [65, 59, 80, 81, 56, 55, 40];
  const chartLabels = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  return (
    <div className="p-[30px] flex flex-col gap-5">
      <div className="flex justify-between">
        <DashboardInformation />
        <Top5PostProduct />
      </div>
      <div>
        <ProductChart data={chartData} labels={chartLabels} />
      </div>
      <div>
        <AdminChannels />
      </div>
    </div>
  );
};

export default AdminDashboard;
