import React from "react";
import Bookmark from "./Bookmark";
import { ProductResponse } from "../../interfaces/productResponse";

type Props = {
  bookmarks: ProductResponse[] | undefined;
};

const BookmarkList = ({ bookmarks }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {bookmarks?.map((item) => (
        <Bookmark
          key={item.productId}
          productId={item.productId}
          feId={item.feId}
          userName={item.userName}
          avatar={item.avatar}
          categoryName={item.categoryName}
          description={item.description}
          origin={item.origin}
          type={item.type}
          status={item.status}
          price={item.price}
          title={item.title}
          images={item.images}
          createdTime={item.createdTime}
        />
      ))}
    </div>
  );
};

export default BookmarkList;
