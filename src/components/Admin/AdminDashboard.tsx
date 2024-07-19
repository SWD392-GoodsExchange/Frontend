import React, { useEffect, useState } from "react";

import Weather from "../Weather";
import DashboardInformation from "../Dashboard/DashboardInformation";
import ProductChart from "../Chart/ProductChart";
import Top5PostProduct from "../TopAccount/Top5PostProduct";
import AdminChannels from "./AdminChannels";
import productApi from "../../services/productApi";
import memberApi from "../../services/memberApi";
import reportApi from "../../services/reportApi";

type Props = {};

const AdminDashboard = (props: Props) => {
  const [totalProduct, setTotalProduct] = useState<number>();
  const [totalMember, setTotalMember] = useState<number>();
  const [totalReport, setTotalReport] = useState<number>();
  useEffect(() => {
    const fetchData = async () => {
      const totalProduct: any = await productApi.totalProduct();
      setTotalProduct(totalProduct.data);
      const totalMember: any = await memberApi.totalMember();
      setTotalMember(totalMember.data);
      const totalReport: any = await reportApi.totalReport();
      setTotalReport(totalReport.data);
    };
    fetchData();
  }, [totalProduct, totalMember, totalReport]);
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
        <DashboardInformation
          totalProduct={totalProduct}
          totalMember={totalMember}
          totalReport={totalReport}
        />
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
