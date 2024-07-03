import axiosClient from "./axiosClient";

const productApi = {
  getExchangeProducts() {
    const url = "/products?type=Exchange";
    return axiosClient.get(url);
  },
};

export default productApi;
