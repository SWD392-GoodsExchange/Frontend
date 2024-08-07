import Avatar from "../../components/Avatar/Avatar";
import { IoIosArrowBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import ProfileInformation from "../../components/Profile/ProfileInformation/ProfileInformation";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import authApi from "../../services/authApi";
import { MemberInformations } from "../../interfaces/Auth/MemberInformations";

const MemberInformation = () => {
  const [memberInfo, setMemberInfor] = useState<MemberInformations>();
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchMemberInformation = async () => {
      const memberInformation: any = await authApi.getInformationMember();
      setMemberInfor(memberInformation);
    };
    fetchMemberInformation();
  }, []);
  return (
    <div className="h-auto text-black bg-[#42FCAC00] pb-4 mt-[100px]">
      <div className="flex justify-between px-3 py-2 items-center">
        <div
          className="rounded-full p-3 bg-white hover:bg-orange-200 cursor-pointer"
          onClick={backButton}
        >
          <IoIosArrowBack size={"22px"} />
        </div>
        <p className="font-normal text-24">My Profile</p>
        <div className="rounded-full p-3 bg-white hover:bg-orange-200 cursor-pointer">
          <CiEdit size={"22px"} color="#0D6EFD" />
        </div>
      </div>
      <div className="flex justify-center ">
        <Avatar memberInfor={memberInfo} />
      </div>
      <div className="flex flex-col items-center mx-10 text-[#1B1E28]">
        <ProfileInformation memberInfor={memberInfo} />
      </div>
    </div>
  );
};

export default MemberInformation;
