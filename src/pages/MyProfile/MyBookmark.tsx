import { Grid } from "@mui/material";
import React from "react";
import BookMarkNav from "../../components/Bookmark/BookMarkNav";
import BookmarkList from "../../components/Bookmark/BookmarkList";
import BookmarkFilter from "../../components/Bookmark/BookmarkFilter";

const MyBookmark = () => {
  return (
    <div className="text-black">
      <Grid container xs={12}>
        <Grid item xs={3}>
          <BookMarkNav />
        </Grid>
        <Grid item xs={9}>
          <div className="my-2 mx-20 flex flex-col gap-4">
            <BookmarkFilter />
            <BookmarkList />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyBookmark;
