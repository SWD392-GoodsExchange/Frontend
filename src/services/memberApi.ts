import axiosClient from "./axiosClient";

const memberApi = {
  getAllMember() {
    const url = "/Members";
    return axiosClient.get(url);
  },
};

export default memberApi;
