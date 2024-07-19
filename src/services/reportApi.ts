import { CreateReport } from "../interfaces/product/Report";
import axiosClient from "./axiosClient";

const reportApi = {
  getAllReport() {
    const url = "/Reports/processing";
    return axiosClient.get(url);
  },

  createReport(data: CreateReport) {
    const url = "/reports/";
    return axiosClient.post(url, data);
  },

  approveReport(reportId: number) {
    const url = `/Reports/approved/${reportId}`;
    return axiosClient.put(url);
  },

  rejectReport(reportId: number) {
    const url = `/Reports/rejected/${reportId}`;
    return axiosClient.put(url);
  },

  getApprovedReport() {
    const url = "/Reports/approved";
    return axiosClient.get(url);
  },

  getRejectedReport() {
    const url = "/Reports/rejected";
    return axiosClient.get(url);
  },
  totalReport() {
    const url = "/reports/totalReports";
    return axiosClient.get(url);
  },
};

export default reportApi;
