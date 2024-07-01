import React from "react";
import BookmarkImg from "../../assets/bookmark.png";
import ProductImg from "../../assets/target.png";
import HistoryImg from "../../assets/history.png";
import MyAvatar from "../../assets/panda.png";
import Messenger from "../../assets/messenger.png";

const menuList = [
  { img: MyAvatar, title: "Vo Mong Luan" },
  { img: ProductImg, title: "Product" },
  {
    img: BookmarkImg,
    title: "Bookmark",
  },
  { img: HistoryImg, title: "Order History" },
  { img: Messenger, title: "Chat" },
];
const Menu = () => {
  return (
    <div>
      {menuList.map((item) => (
        <div className="flex font-semibold p-2 gap-4 rounded-lg items-center hover:bg-gray-300 cursor-pointer">
          <img src={item.img} width={40} height={40} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
