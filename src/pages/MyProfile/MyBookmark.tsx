import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BookMarkNav from "../../components/Bookmark/BookMarkNav";
import BookmarkFilter from "../../components/Bookmark/BookmarkFilter";
import BookmarkList from "../../components/Bookmark/BookmarkList";
import { ProductResponse } from "../../interfaces/productResponse";
import bookMarkApi from "../../services/bookMarkApi";

const MyBookmark = () => {
  const [bookmarks, setBookMarks] = useState<ProductResponse[]>();
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
