import { CreateReport } from "../interfaces/product/Report";
import axiosClient from "./axiosClient";

const reportApi = {
  getAllReport() {
    const url = "/Report";
    return axiosClient.get(url);
  },

  createReport(data: CreateReport) {
    const url = "/reports/";
    return axiosClient.post(url, data);
  },
  totalReport() {
    const url = "/reports/totalReports";
    return axiosClient.get(url);
  },
};

export default reportApi;
