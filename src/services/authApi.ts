import { LoginRequest } from "../interfaces/Auth/Login";
import axiosClient from "./axiosClient";

const authApi = {
  login(loginRequest: LoginRequest) {
    const url = "/members/login";
    return axiosClient.post(url, loginRequest);
  },
  getInformationMember() {
    const url = "/Members/information";
    return axiosClient.get(url);
  },
};

export default authApi;
