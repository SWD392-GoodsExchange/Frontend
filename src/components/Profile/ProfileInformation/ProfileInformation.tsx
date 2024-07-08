import { IoCheckmark } from "react-icons/io5";
import { MemberInformations } from "../../../interfaces/Auth/MemberInformations";

type Props = {
  memberInfor: MemberInformations | undefined;
};

const ProfileInformation = ({ memberInfor }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2 my-1">
        <label>User name</label>
        <p className="flex justify-between shadow-md items-center bg-white p-3 w-[300px] rounded-2xl">
          {memberInfor?.userName}
          <IoCheckmark color="0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Email</label>
        <p className="flex justify-between shadow-md items-center bg-white p-3 w-[300px] rounded-2xl">
          {memberInfor?.email}
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
      {/* <div className="flex flex-col gap-2 my-1">
        <label>Password</label>
        <p className="flex justify-between shadow-md items-center bg-white p-3 w-[300px] rounded-2xl">
          ******
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div> */}
      <div className="flex flex-col gap-2 my-1">
        <label>Address</label>
        <p className="flex justify-between shadow-md items-center bg-white p-3 w-[300px] rounded-2xl">
          {memberInfor?.address}
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Phone</label>
        <p className="flex justify-between shadow-md items-center bg-white p-3 w-[300px] rounded-2xl">
          {memberInfor?.phone}
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Date of birth</label>
        <p className="flex justify-between shadow-md items-center bg-white p-3 w-[300px] rounded-2xl">
          {memberInfor?.dob.toString()}
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
    </>
  );
};

export default ProfileInformation;
