import axiosClient from "./axiosClient";

const reportApi = {
  getAllReport() {
    const url = "/Report";
    return axiosClient.get(url);
  },
};

export default reportApi;
