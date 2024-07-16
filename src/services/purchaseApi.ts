import { CheckoutResponse } from "../interfaces/checkOutResponse";
import axiosClient from "./axiosClient";

const purchaseApi = {
  checkOutPayment(data: CheckoutResponse) {
    const url = "/Members/checkout";
    return axiosClient.post(url, data);
  },
};

export default purchaseApi;
