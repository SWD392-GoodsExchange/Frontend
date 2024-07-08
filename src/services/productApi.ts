import axiosClient from "./axiosClient";

const productApi = {
  getExchangeProducts() {
    const url = "/products?type=Exchange";
    return axiosClient.get(url);
  },
  getAllProductByFeid(FeId: string | null) {
    const url = `/products/${FeId}`;
    return axiosClient.get(url);
  },
};

export default productApi;
