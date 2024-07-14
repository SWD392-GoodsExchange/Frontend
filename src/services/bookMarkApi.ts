import { CreateBookmark } from "../interfaces/product/bookmarkProduct";
import axiosClient from "./axiosClient";

const bookMarkApi = {
  createBookMark(data: CreateBookmark) {
    const url = "/members/bookmark";
    return axiosClient.post(url, data);
  },
  getAllBookmark() {
    const url = "/members/bookmark";
    return axiosClient.get(url);
  },
};

export default bookMarkApi;
