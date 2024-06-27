import Avatar from "../../components/Avatar/Avatar";
import { IoIosArrowBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import ProfileInformation from "../../components/Profile/ProfileInformation/ProfileInformation";
import { useNavigate } from "react-router-dom";

const MemberInformation = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };
  return (
    <div className="h-auto text-black bg-gradient-to-b from-orange-600 to-[#fbc4b8] pb-4">
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
        <Avatar />
      </div>
      <div className="flex flex-col items-center mx-10 text-[#1B1E28]">
        <ProfileInformation />
      </div>
    </div>
  );
};

export default MemberInformation;
