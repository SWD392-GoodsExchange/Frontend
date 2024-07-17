import { AcceptExchangeRequest } from "../interfaces/ExchangeRequest";
import axiosClient from "./axiosClient";

const exchangeApi = {
  getAllRequestExchange() {
    const url = "/members/exchange/requests";
    return axiosClient.get(url);
  },
  acceptRequestExchange(data: AcceptExchangeRequest) {
    const url = "/members/exchange";
    return axiosClient.post(url, data);
  },
  getNotification() {
    const url = "/members/notifications";
    return axiosClient.get(url);
  },
};

export default exchangeApi;
