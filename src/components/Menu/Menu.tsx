import React from "react";
import BookmarkImg from "../../assets/bookmark.png";
import ProductImg from "../../assets/target.png";
import HistoryImg from "../../assets/history.png";
import MyAvatar from "../../assets/panda.png";
import Messenger from "../../assets/messenger.png";
import { Link } from "react-router-dom";
import Logout from "../../assets/logout.png";
import Weather from "../Weather";

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
  return (
    <div>
      <Link to="/my-profile">
        <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
          <img src={MyAvatar} width={40} height={40} />
          <p>{"Vo Mong Luan"}</p>
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

      <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
        <img src={Logout} width={40} height={40} />
        <p>{"Logout"}</p>
      </div>
    </div>
  );
};

export default Menu;
