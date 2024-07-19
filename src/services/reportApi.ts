import { CreateReport } from "../interfaces/product/Report";
import axiosClient from "./axiosClient";

const reportApi = {
  getAllReport() {
    const url = "/Report/processing";
    return axiosClient.get(url);
  },

  createReport(data: CreateReport) {
    const url = "/reports/";
    return axiosClient.post(url, data);
  },

  approveReport(reportId: number) {
    const url = `/Report/approved/${reportId}`;
    return axiosClient.put(url);
  },

  rejectReport(reportId: number) {
    const url = `/Report/rejected/${reportId}`;
    return axiosClient.put(url);
  },

  getApprovedReport() {
    const url = "/Report/approved";
    return axiosClient.get(url);
  },

  getRejectedReport() {
    const url = "/Report/rejected";
    return axiosClient.get(url);
  },
};

export default reportApi;
