import { Card } from "@mui/material";
import React from "react";
import FakeImg from "../../assets/—Pngtree—credit card_5933595.png";
import fakeAvt from "../../assets/bear.png";

type Props = {
  productId: number;
  feId: string;
  userName: string;
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
  return (
    <Card sx={{ padding: "30px 20px" }}>
      <div className="flex gap-8">
        <img src={FakeImg} width={150} height={150} className="outline" />
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
            {props.images.map((image) => (
              <img src={image.imageUrl} width={30} height={30} />
            ))}
            Bookmark from{" "}
            <span className="font-semibold"> {props.userName}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Bookmark;
