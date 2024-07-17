import axiosClient from "./axiosClient";

const productApi = {
  getExchangeProducts() {
    const url = "/products?type=Exchange";
    return axiosClient.get(url);
  },
  getAllProductByFeid(FeId: string | null) {
    const url = `/products/fe/${FeId}`;
    return axiosClient.get(url);
  },
  getAllProductExchangeByFeid(FeId: string | null) {
    const url = `/products/fe/${FeId}?Type=Exchange`;
    return axiosClient.get(url);
  },
  createProduct(data: FormData) {
    const url = "/products";
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getAllProduct() {
    const url = "/Products";
    return axiosClient.get(url);
  },

  getProductByPId(productId: number) {
    const url = `/Products/${productId}`;
    return axiosClient.get(url);
  },

  getProductByProductId(productId: number) {
    const url = `/Products/${productId}`;
    return axiosClient.get(url);
  },
};

export default productApi;
