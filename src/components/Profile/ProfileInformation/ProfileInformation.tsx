import { IoCheckmark } from "react-icons/io5";

const ProfileInformation = () => {
  return (
    <>
      <div className="flex flex-col gap-2 my-1">
        <label>User name</label>
        <p className="flex justify-between items-center bg-white p-3 w-[300px] rounded-2xl">
          User
          <IoCheckmark color="0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Email</label>
        <p className="flex justify-between items-center bg-white p-3 w-[300px] rounded-2xl">
          user2003@fpt.edu.vn
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Password</label>
        <p className="flex justify-between items-center bg-white p-3 w-[300px] rounded-2xl">
          ******
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Address</label>
        <p className="flex justify-between items-center bg-white p-3 w-[300px] rounded-2xl">
          Hẻm 48, Bùi Thị Xuân
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Phone</label>
        <p className="flex justify-between items-center bg-white p-3 w-[300px] rounded-2xl">
          0931337204
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
      <div className="flex flex-col gap-2 my-1">
        <label>Date of birth</label>
        <p className="flex justify-between items-center bg-white p-3 w-[300px] rounded-2xl">
          18/10/2003
          <IoCheckmark color="#0D6EFD" />
        </p>
      </div>
    </>
  );
};

export default ProfileInformation;
