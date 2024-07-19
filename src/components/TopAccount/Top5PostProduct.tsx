import { useEffect, useState } from "react";
import Avatar from "../../assets/bear.png";
import memberApi from "../../services/memberApi";

export interface Top3PostProduct {
  feId: string;
  userName: string;
  avatar: string;
}

const Top5PostProduct = () => {
  const [top3PostProduct, setTop3PostProduct] = useState<Top3PostProduct[]>();
  useEffect(() => {
    const fetchData = async () => {
      const top3PostProduct: any = await memberApi.top3PostingProduct();
      setTop3PostProduct(top3PostProduct.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm">
        <p className="text-20 italic text-orange-600">Top 3 member post</p>
        {top3PostProduct?.map((item) => (
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

export default Top5PostProduct;
