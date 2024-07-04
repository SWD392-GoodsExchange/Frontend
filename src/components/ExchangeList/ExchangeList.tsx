import React, { useEffect, useState } from "react";
import Avatar from "../../assets/bear.png";
import ATM from "../../assets/—Pngtree—credit card_5933595.png";
import { CiBookmark } from "react-icons/ci";
import { GoReport } from "react-icons/go";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productApi from "../../services/productApi";
import { ProductReponse } from "../../interfaces/productResponse";
import Loading from "../Loading";

const ExchangeList = () => {
  const [products, setproducts] = useState<ProductReponse[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsApi: any = await productApi.getExchangeProducts();
      setproducts(productsApi.data.data);
    };
    fetchProducts();
  }, []);

  const onClickExchange = () => {
    navigate("/exchange-ticket");
  };

  return (
    <>
      {products ? (
        products?.map((item) => (
          <div
            key={item.productId}
            className="px-3 py-3 my-1 flex flex-col items-start gap-2 bg-white w-[100%] rounded-md shadow-2xl"
          >
            <div className="flex gap-3">
              <img src={Avatar} width={50} height={50} />
              <div className="flex flex-col items-start">
                <h4 className="font-bold">{item.userName}</h4>
                <p className="font-light">
                  {item.createdTime.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="p-2 my-2 bg-yellow-500 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
                <p>{item.categoryName}</p>
              </div>
              <div className="p-2 my-2 bg-blue-500 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
                <p>{item.origin}</p>
              </div>
              <div className="p-2 my-2 bg-orange-500 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
                <p>{item.type}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold flex justify-start">{item.title}</p>
              <p className="font-light">Description: {item.description}</p>
            </div>
            <div className="flex flex-col justify-center my-2">
              <img
                className="outline outline-1 w-full rounded-lg"
                src={ATM}
                width={"300px"}
                height="auto"
              />
            </div>
            <p className="bg-slate-300 w-[100%] h-[2px]"></p>
            <div className="w-[100%] text-slate-700 flex justify-between">
              <button className="flex gap-1 items-center transition-all duration-300 bg-purple-500 rounded-lg p-2 cursor-pointer hover:bg-purple-700 hover:text-white">
                <CiBookmark size={"22px"} />
                Bookmark
              </button>
              <button
                onClick={onClickExchange}
                className="flex gap-1 items-center transition-all duration-300 bg-orange-500 rounded-lg p-2 cursor-pointer hover:bg-orange-700 hover:text-white "
              >
                <LiaExchangeAltSolid size={"22px"} />
                Exchange
              </button>
              <button className="flex gap-1 items-center transition-all duration-300 bg-red-500 rounded-lg p-2 cursor-pointer hover:bg-red-700 hover:text-white">
                <GoReport size={"22px"} />
                Report
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center mt-20">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ExchangeList;