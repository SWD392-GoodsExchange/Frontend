import React from "react";
import Bookmark from "./Bookmark";

const BookmarkList = () => {
  return (
    <div className="flex flex-col gap-4">
      <Bookmark />
      <Bookmark />
      <Bookmark />
      <Bookmark />
    </div>
  );
};

export default BookmarkList;
