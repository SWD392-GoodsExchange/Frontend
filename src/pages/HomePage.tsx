import React from "react";
import Navbar from "../components/navbar/Navbar";
import Category from "../components/category/Category";
import SuggestList from "../components/suggestList/SuggestList";
import CreateProduct from "../components/CreateProduct/CreateProduct";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CreateProduct />
      <Category />
      <SuggestList />
    </div>
  );
};

export default HomePage;
