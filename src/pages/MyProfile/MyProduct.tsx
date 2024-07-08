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
        <Grid item xs={4} spacing={1}>
          <div className="flex flex-col items-start gap-5 ml-[60px]">
            {/* Search by title */}
            <form className="form relative">
              <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                <svg
                  width="17"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="search"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                    stroke="currentColor"
                    stroke-width="1.333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                placeholder="Search by title..."
                type="text"
              />
              <button
                type="reset"
                className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </form>
            {/* Filter by type */}
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" color="warning">
                  Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="exchange"
                    control={<Radio color="warning" />}
                    label="Exchange"
                  />
                  <FormControlLabel
                    value="trade"
                    control={<Radio color="warning" />}
                    label="Trade"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="flex flex-col items-center w-[500px] text-[#1B1E28]">
            <ProductList productList={productList} />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="p-3 bg-white w-[245px] rounded-2xl">
            <Weather />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyProduct;
