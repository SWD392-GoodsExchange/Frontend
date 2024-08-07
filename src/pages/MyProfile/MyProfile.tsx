import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { CgBookmark, CgProfile } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { GoChevronRight, GoHistory } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import { MemberInformations } from "../../interfaces/Auth/MemberInformations";
import authApi from "../../services/authApi";

const MyProfile = () => {
  const [memberInfor, setMemberInfor] = useState<MemberInformations>();
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const memberInfo: any = await authApi.getInformationMember();
      setMemberInfor(memberInfo);
    };
    fetchData();
  });

  return (
    <div className="h-screen text-black bg-[#42FCAC00] pb-4 mt-[100px]">
      <div className="flex justify-between px-3 py-2 items-center">
        <div
          onClick={handleBackHome}
          className="rounded-full p-3 bg-white hover:bg-orange-200 cursor-pointer"
        >
          <IoIosArrowBack size={"22px"} />
        </div>
        <p className="font-normal text-24 ">My Profile</p>
        <div className="rounded-full p-3 bg-white hover:bg-orange-200 cursor-pointer">
          <CiEdit size={"22px"} color="#0D6EFD" />
        </div>
      </div>
      <div className="flex justify-center ">
        <Avatar memberInfor={memberInfor} />
      </div>
      <div className="flex justify-center items-center mb-5">
        <div className="flex flex-col shadow-md items-center p-4 w-[90px] mx-0.5 bg-white rounded-xl">
          <p>Product</p>
          <p className="italic text-orange-500 font-bold">34</p>
        </div>
        <div className="flex flex-col shadow-md items-center p-4  w-[90px] mx-0.5  bg-white rounded-xl">
          <p>Order</p>
          <p className="italic text-orange-500 font-bold">16</p>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center">
        <ul className="flex flex-col shadow-md text-20 w-[300px] bg-white rounded-2xl">
          <Link to="information">
            <li className="pl-4 py-5 flex items-center justify-between pr-5 hover:bg-orange-100 hover:rounded-t-2xl cursor-pointer">
              <p className="flex gap-3 items-center">
                <CgProfile color="grey" size={"22px"} /> Profile
              </p>
              <div>
                <GoChevronRight />
              </div>
            </li>
          </Link>
          <Divider variant="fullWidth" />
          <Link to="product">
            <li className="pl-4 py-5  flex items-center justify-between pr-5  hover:bg-orange-100 cursor-pointer">
              <p className="flex gap-3 items-center">
                <AiFillProduct color="grey" size={"22px"} /> Product
              </p>
              <div>
                <GoChevronRight />
              </div>
            </li>
          </Link>
          <Divider variant="fullWidth" />
          <Link to="bookmark">
            <li className="pl-4 py-5  flex items-center justify-between pr-5  hover:bg-orange-100 cursor-pointer">
              <p className="flex gap-3 items-center">
                <CgBookmark color="grey" size={"22px"} /> Bookmark
              </p>
              <div>
                <GoChevronRight />
              </div>
            </li>
          </Link>
          <Divider variant="fullWidth" />
          <Link to="orderHistory">
            <li className="pl-4 py-5  flex items-center justify-between pr-5  hover:bg-orange-100 hover:rounded-b-2xl cursor-pointer">
              <p className="flex gap-3 items-center">
                <GoHistory color="grey" size={"22px"} /> Order History
              </p>
              <div>
                <GoChevronRight />
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
