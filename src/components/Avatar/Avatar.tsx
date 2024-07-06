import MyAvatar from "../../assets/panda.png";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center my-8 rounded-full text-black">
      <img
        src={localStorage.getItem("avatar")}
        alt="My Avatar"
        className="w-[80px] h-[80px]"
      />
      <p className="font-semibold text-20 flex items-center gap-1">
        {localStorage.getItem("userName")}
        <div className="p-1 bg-white rounded-full">
          <IoIosMale color="#0D6EFD" size={"22px"} />
        </div>
      </p>

      <p className="font-light text-20 italic">
        {localStorage.getItem("feId")}
      </p>
    </div>
  );
};

export default Avatar;
