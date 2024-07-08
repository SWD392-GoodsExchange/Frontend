import React from "react";
import BookmarkImg from "../../assets/bookmark.png";
import ProductImg from "../../assets/target.png";
import HistoryImg from "../../assets/history.png";
import MyAvatar from "../../assets/panda.png";
import Messenger from "../../assets/messenger.png";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../assets/logout.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const menuList = [
//   { img: MyAvatar, title: "Vo Mong Luan" },
//   { img: ProductImg, title: "Product" },
//   {
//     img: BookmarkImg,
//     title: "Bookmark",
//   },
//   { img: HistoryImg, title: "Order History" },
//   { img: Messenger, title: "Chat" },
// ];
const Menu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setTimeout(() => {
      localStorage.clear();
      localStorage.setItem("loggedIn", "false");
      navigate("/");
    }, 3000);
  };
  return (
    <div>
      <ToastContainer />
      <Link to="/my-profile">
        <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
          <img src={localStorage.getItem("avatar")} width={40} height={40} />
          <p>{localStorage.getItem("userName")}</p>
        </div>
      </Link>
      <Link to="/my-profile/product">
        <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
          <img src={ProductImg} width={40} height={40} />
          <p>Product</p>
        </div>
      </Link>
      <Link to="/my-profile/bookmark">
        <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
          <img src={BookmarkImg} width={40} height={40} />
          <p>{"Bookmark"}</p>
        </div>
      </Link>
      <Link to="/my-profile/order-history">
        <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
          <img src={HistoryImg} width={40} height={40} />
          <p>{"Order History"}</p>
        </div>
      </Link>
      <Link to="/chat">
        <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
          <img src={Messenger} width={40} height={40} />
          <p>{"Chat"}</p>
        </div>
      </Link>

      <div
        onClick={handleLogout}
        className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer"
      >
        <img src={Logout} width={40} height={40} />
        <p>{"Logout"}</p>
      </div>
    </div>
  );
};

export default Menu;
