import { CheckoutResponse } from "../interfaces/checkOutResponse";
import axiosClient from "./axiosClient";

const purchaseApi = {
  checkOutPayment(data: CheckoutResponse) {
    const url = "/Members/checkout";
    return axiosClient.post(url, data);
  },

  getOHList() {
    const url = "/Members/order";
    return axiosClient.get(url);
  },
};

export default purchaseApi;
