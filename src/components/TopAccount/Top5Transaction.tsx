import { useEffect, useState } from "react";
import Avatar from "../../assets/bear.png";
import memberApi from "../../services/memberApi";
import { Top3PostProduct } from "./Top5PostProduct";

const Top5Transaction = () => {
  const [top3Trader, setTop3Trader] = useState<Top3PostProduct[]>();
  useEffect(() => {
    const fetchData = async () => {
      const top3Trader: any = await memberApi.top3Traders();
      setTop3Trader(top3Trader.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm">
        <p className="text-20 italic text-green-600">
          Top 3 successful traders{" "}
        </p>
        {top3Trader?.map((item) => (
          <div className="mx-2 my-1 hover:bg-gray-300 p-2 rounded-2xl cursor-pointer">
            <p className=" flex items-center gap-2 font-semibold">
              <img src={item.avatar} width={50} height={50} />
              {item.userName}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Top5Transaction;
