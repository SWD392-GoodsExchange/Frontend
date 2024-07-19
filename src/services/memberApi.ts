import axiosClient from "./axiosClient";

const memberApi = {
  getAllMember() {
    const url = "/Members";
    return axiosClient.get(url);
  },
  top3PostingProduct() {
    const url = "/members/top3PostingProducts";
    return axiosClient.get(url);
  },
  top3Traders() {
    const url = "/members/top3PostingProductsTradeType";
    return axiosClient.get(url);
  },
  totalMember() {
    const url = "/members/totalAccounts";
    return axiosClient.get(url);
  },
};

export default memberApi;
