import MyAvatar from "../../assets/panda.png";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center my-8 rounded-full text-black">
      <img src={MyAvatar} alt="My Avatar" className="w-[80px] h-[80px]" />
      <p className="font-semibold text-20 flex items-center gap-1">
        User <IoIosMale color="#0D6EFD" size={"22px"} />
      </p>
      <p className="font-light text-20 italic">user2003@fpt.edu.vn</p>
    </div>
  );
};

export default Avatar;
