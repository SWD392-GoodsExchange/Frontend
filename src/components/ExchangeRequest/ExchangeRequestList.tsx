import { Button, Card } from "@mui/material";
import React from "react";
import Img from "../../assets/bear.png";
import { ExchangeRequest } from "../../interfaces/ExchangeRequest";
import { FaCheckCircle } from "react-icons/fa";
import exchangeApi from "../../services/exchangeApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as signalR from "@microsoft/signalr";

type Props = {
  exchangeList: ExchangeRequest[] | undefined;
};
const ExchangeRequestList = ({ exchangeList }: Props) => {
  const acceptRequestExchange = (ownerId: string, notificationId: number) => {
    exchangeApi
      .acceptRequestExchange({
        ownerID: ownerId,
        notificationID: notificationId,
      })
      .then((response) => {
        console.log(response);
        toast.success("Accept successfully", {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.log("Error accept", error);
      });
  };
  const denyRequestExchange = (notificationId: number) => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(
        `https://localhost:5001/hubs/notification?access_token=${localStorage.getItem(
          "jwtToken"
        )}`
      )
      .build();

    connection
      .start()
      .then(() => {
        console.log("SignalR connected");
        connection
          .invoke("DeniedRequestExchange", notificationId)
          .then(() => {
            console.log("Deny Success");
            toast.success("Deny successfully", {
              position: "top-center",
              autoClose: 3000,
            });
          })
          .catch((error) => {
            console.log("Error:", error);
            toast.success("Deny successfully", {
              position: "top-center",
              autoClose: 3000,
            });
          });
      })
      .catch((error) => {
        console.log(`SignalR error: ${error}`);
      });
  };
  return (
    <div>
      <ToastContainer />
      <p className="flex justify-center text-32">Exchange Request List</p>
      {exchangeList?.map((item) => (
        <div
          key={item.notificationId}
          className="bg-orange-200 mx-[100px] my-4 rounded-2xl"
        >
          <p className="ml-[580px] text-black">
            Exchange Request {item.notificationId}
          </p>
          <div className="flex py-4 items-center gap-3 justify-center">
            <Card
              sx={{
                width: "300px",
                padding: 2,
                minheight: "450px",
                height: "auto",
              }}
            >
              <div className="flex items-center gap-3">
                <img src={item.onwerProduct.avatar} width={50} height={50} />
                <div className="flex flex-col items-start">
                  <h4 className="font-bold">{item.recipientUsername}</h4>
                  <p className="font-light truncate">
                    {item.onwerProduct.createdTime.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="p-2 my-2 bg-yellow-500 text-13 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
                  <p>{item.onwerProduct.categoryName}</p>
                </div>
                <div className="p-2 my-2 bg-blue-500 text-13 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
                  <p>{item.onwerProduct.origin}</p>
                </div>
                <div className="p-2 my-2 bg-orange-500 text-13 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
                  <p>{item.onwerProduct.type}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">{item.onwerProduct.title}</p>
                <p className="font-light">
                  {" "}
                  Description : {item.onwerProduct.description}
                </p>
              </div>
              <div className="flex flex-col justify-center my-2">
                {item.onwerProduct.images.map((image) => (
                  <img
                    className="outline outline-1 w-full rounded-lg"
                    src={image.imageUrl}
                    width={"300px"}
                    height="300px"
                  />
                ))}
              </div>
            </Card>
            <div className="flex flex-col gap-4 p-4">
              {item.recipientId === localStorage.getItem("feId") ? (
                <>
                  <button
                    onClick={() => {
                      acceptRequestExchange(
                        item.recipientId,
                        item.notificationId
                      );
                    }}
                    className="p-3 bg-green-500 rounded-md hover:bg-green-700"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                      denyRequestExchange(item.notificationId);
                    }}
                    className="p-3 bg-red-500 rounded-md hover:bg-red-700"
                  >
                    Deny
                  </button>
                </>
              ) : (
                <div className="text-green-500 flex">
                  <FaCheckCircle size={"22px"} /> Sended
                </div>
              )}
            </div>
            {item.exchangerProducts.map((exchanger) => (
              <Card
                sx={{
                  width: "300px",
                  padding: 2,
                  minheight: "450px",
                  height: "auto",
                }}
              >
                <div className="flex items-center gap-3">
                  <img src={exchanger.avatar} width={50} height={50} />
                  <div className="flex flex-col items-start">
                    <h4 className="font-bold">{item.senderUsername}</h4>
                    <p className="font-light truncate">
                      {exchanger.createdTime.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="p-2 my-2 bg-yellow-500 text-13 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
                    <p>{exchanger.categoryName}</p>
                  </div>
                  <div className="p-2 my-2 bg-blue-500 text-13 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
                    <p>{exchanger.origin}</p>
                  </div>
                  <div className="p-2 my-2 bg-orange-500 text-13 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
                    <p>{exchanger.type}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">{exchanger.title}</p>
                  <p className="font-light">
                    Description: {exchanger.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center my-2">
                  {exchanger.images.map((image) => (
                    <img
                      className="outline outline-1 w-full rounded-lg"
                      src={image.imageUrl}
                      width={"300px"}
                      height="300px"
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExchangeRequestList;
