import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookMarkNav from "../../components/Bookmark/BookMarkNav";
import BookmarkList from "../../components/Bookmark/BookmarkList";
import BookmarkFilter from "../../components/Bookmark/BookmarkFilter";
import bookMarkApi from "../../services/bookMarkApi";
import { ProductReponse } from "../../interfaces/productResponse";

const MyBookmark = () => {
  const [bookmarks, setBookMarks] = useState<ProductReponse[]>();
  useEffect(() => {
    const fetchData = async () => {
      const bookmarkList: any = await bookMarkApi.getAllBookmark();
      setBookMarks(bookmarkList.data);
    };
    fetchData();
  }, []);
  return (
    <div className="text-black mt-[100px]">
      <Grid container xs={12}>
        <Grid item xs={3}>
          <BookMarkNav />
        </Grid>
        <Grid item xs={9}>
          <div className="my-2 mx-20 flex flex-col gap-4">
            <BookmarkFilter />
            <BookmarkList bookmarks={bookmarks} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyBookmark;
