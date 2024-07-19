import { LoginRequest } from "../interfaces/Auth/Login";
import { SignUpRequest } from "../interfaces/Auth/SingUp";
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
  signUp(data: SignUpRequest) {
    const url = "/members/register";
    return axiosClient.post(url, data);
  },
};

export default authApi;
