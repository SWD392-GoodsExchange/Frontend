import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

type Props = {
  token: string | null;
};

export interface NotificationDto {
  notificationId: number;

  senderId: string;

  senderUsername: string;

  recipientId: string;

  recipientUsername: string;

  onwerProductId: string;

  exchangerProductIds: string;

  content: string;

  dateRead: Date;

  createdDate: Date;
  type: string;
}

const SignalRServices = ({ token }: Props) => {
  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`https://localhost:5001/hubs/notification?access_token=${token}`)
      .build();

    connection
      .start()
      .then(() => {
        console.log("SignalR connected");

        connection.on("NotificationOfUser", (notifications) => {
          console.log("NotificationOfUser:", notifications);
        });
      })
      .catch((error) => console.log(`SignalR error: ${error}`));

    return () => {
      connection.stop();
    };
  }, [token]);

  return null;
};

export default SignalRServices;
