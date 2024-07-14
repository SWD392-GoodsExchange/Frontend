import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

type Props = {
  token: string | null;
};

export interface NotificationDto {
  NotificationId: number;

  SenderId: string;

  SenderUsername: string;

  RecipientId: string;

  RecipientUsername: string;

  OnwerProductId: string;

  ExchangerProductIds: string;

  Content: string;

  DateRead: Date;

  CreatedDate: Date;
  Type: string;
}

const SignalRServices = ({ token }: Props) => {
  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(
        `https://localhost:5001/hubs/notification?access_token=${token}`,
        {
          accessTokenFactory: () => {
            // Truy xuất và trả về thông tin xác thực (ví dụ: token) từ trạng thái ứng dụng hoặc lưu trữ trên máy chủ
            const accessToken = token != null ? token : "";
            return accessToken;
          },
        }
      )
      .build();
    connection.on("NotificationOfUser", (message: string) => {
      console.log("NotificationOfUser", message);
    });

    connection
      .start()
      .then(() => {
        console.log("SignalR connected");

        // Xử lý các sự kiện và phương thức SignalR tại đây

        // Ví dụ:
      })
      .catch((error: any) => console.log(`SignalR error: ${error}`));
  }, [token]);

  return null;
};

export default SignalRServices;
