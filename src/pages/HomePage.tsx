import React from "react";
import Navbar from "../components/navbar/Navbar";
import Category from "../components/category/Category";
import SuggestList from "../components/suggestList/SuggestList";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <SuggestList />
    </div>
  );
};

export default HomePage;
