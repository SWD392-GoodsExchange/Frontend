import { Card } from "@mui/material";
import React from "react";
import FakeImg from "../../assets/—Pngtree—credit card_5933595.png";
import fakeAvt from "../../assets/bear.png";
import { CiBookmark } from "react-icons/ci";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { GoReport } from "react-icons/go";
import { GoBookmarkSlash } from "react-icons/go";
import bookMarkApi from "../../services/bookMarkApi";
import { useNavigate } from "react-router-dom";
import { ProductResponse } from "../../interfaces/productResponse";

type Props = {
  productId: number;
  feId: string;
  userName: string;
  avatar: string;
  categoryName: string;
  description: string;
  origin: string;
  type: string;
  status: string;
  price: number;
  title: string;
  images: Images[];
  createdTime: Date;
};

export interface Images {
  imageUrl: string;
  publicId: string;
}

const Bookmark = (props: Props) => {
  const navigate = useNavigate();
  const onClickExchange = (
    productId: number,
    productObject: ProductResponse
  ) => {
    navigate(`/exchange-ticket/${productId}`, {
      state: productObject,
    });
  };
  const deleteBookmark = (productId: number) => {
    bookMarkApi
      .deleteBookMark(productId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Card sx={{ padding: "30px 20px" }}>
      <div className="flex gap-8">
        {props.images.map((image) => (
          <img
            src={image.imageUrl}
            width={150}
            height={150}
            className="outline"
          />
        ))}

        <div className="flex flex-col">
          <p className="font-bold">{props.title}</p>
          <p className="">Description: {props.description}</p>
          <div className="flex gap-1">
            <div className="p-2 my-2 bg-yellow-500 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
              <p>{props.categoryName}</p>
            </div>
            <div className="p-2 my-2 bg-blue-500 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
              <p>{props.origin}</p>
            </div>
            <div className="p-2 my-2 bg-orange-500 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
              <p>{props.type}</p>
            </div>
          </div>
          <p className="font-light flex items-center gap-2">
            <img src={props.avatar} width={30} height={30} />
            Bookmark from{" "}
            <span className="font-semibold"> {props.userName}</span>
          </p>
        </div>
        <div className=" ml-40 flex flex-col gap-2">
          <button
            onClick={() => {
              deleteBookmark(props.productId);
            }}
            className="flex gap-1 items-center transition-all duration-300 bg-purple-300 rounded-lg p-2 cursor-pointer hover:bg-purple-500"
          >
            <GoBookmarkSlash size={"22px"} />
            UnBookmark
          </button>
          <button
            onClick={() => {
              onClickExchange(props.productId, props);
            }}
            className="flex gap-1 items-center transition-all duration-300 bg-orange-300 rounded-lg p-2 cursor-pointer hover:bg-orange-500  "
          >
            <LiaExchangeAltSolid size={"22px"} />
            Exchange
          </button>
          <button className="flex gap-1 items-center transition-all duration-300 bg-red-300 rounded-lg p-2 cursor-pointer hover:bg-red-500 ">
            <GoReport size={"22px"} />
            Report
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Bookmark;
