import React, { useEffect, useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { IoIosArrowBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import ProductList from "../../components/Profile/ProfileInformation/Product/ProductList";
import Weather from "../../components/Weather";
import Navbar from "../../components/navbar/Navbar";
import productApi from "../../services/productApi";
import { ProductReponse } from "../../interfaces/productResponse";
import authApi from "../../services/authApi";
import { MemberInformations } from "../../interfaces/Auth/MemberInformations";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import FilterProduct from "../../components/Profile/ProfileInformation/Product/FilterProduct";
import categoryApi from "../../services/categoryApi";

const MyProduct = () => {
  const [productList, setProductList] = useState<ProductReponse[]>();
  const [memberInfor, setMemberInfor] = useState<MemberInformations>();
  const navigate = useNavigate();
  const backBefore = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const memberInfor: any = await authApi.getInformationMember();
      setMemberInfor(memberInfor);
      const products: any = await productApi.getAllProductByFeid(
        localStorage.getItem("feId")
      );
      setProductList(products.data);
    };
    fetchProduct();
  }, []);
  console.log(productList);

  return (
    <div className="h-auto text-black bg-[#42FCAC00] mt-[100px] ">
      <div className="flex justify-between px-3 py-2 items-center">
        <div
          className="rounded-full p-3 bg-white hover:bg-orange-200 cursor-pointer"
          onClick={backBefore}
        >
          <IoIosArrowBack size={"22px"} />
        </div>
        <p className="font-normal text-24">My Product</p>
        <div className="rounded-full p-3 bg-[#42fcac00] hover:bg-orange-200 cursor-pointer"></div>
      </div>
      <div className="flex justify-center ">
        <Avatar memberInfor={memberInfor} />
      </div>
      <Divider variant="middle" />
      <Grid container xs={12} sx={{ padding: "20px 0" }}>
        <Grid item xs={5} sx={{ padding: "0 50px" }}>
          <CreateProduct />
          <FilterProduct />
        </Grid>
        <Grid item xs={7}>
          <div className="flex flex-col items-start w-[500px] text-[#1B1E28]">
            <ProductList productList={productList} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyProduct;
