import { HubConnectionBuilder } from "@microsoft/signalr";
import * as signalR from "@microsoft/signalr";
import { useEffect } from "react";

type Props = {
  token: string | null;
};

export interface NotificationDto {
  avatarSender: string;
  notificationId: number;

  senderId: string;

  senderUsername: string;

  recipientId: string;

  recipientUsername: string;

  onwerProductId: string;

  exchangerProductIds: string;

  content: string;
  e;
  dateRead: Date;

  createdDate: Date;
  type: string;
}

const connection = new HubConnectionBuilder()
  .withUrl(
    `https://localhost:5001/hubs/notification?access_token=${localStorage.getItem(
      "jwtToken"
    )}`,
    {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
    }
  )
  .build();

export default connection;
