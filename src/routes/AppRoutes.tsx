import { Route, Routes } from "react-router-dom";

import ExchangeTicket from "../components/ExchangeList/ExchangeTicket";
import HomePage from "../pages/HomePage";
import MemberInformation from "../pages/MyProfile/MemberInformation";
import MyBookmark from "../pages/MyProfile/MyBookmark";
import MyProduct from "../pages/MyProfile/MyProduct";
import MyProfile from "../pages/MyProfile/MyProfile";
import ProductCardPage from "../pages/purchase/productCardPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<GuestPage />} /> */}
      <Route path="/" element={<ProductCardPage />} />

      <Route path="/exchange" element={<HomePage />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-profile/information" element={<MemberInformation />} />
      <Route path="/my-profile/product" element={<MyProduct />} />
      <Route path="my-profile/bookmark" element={<MyBookmark />} />
      <Route path="/exchange-ticket/:productId" element={<ExchangeTicket />} />
      <Route path="/Purchase/ProductCard" element={<ProductCardPage />} />
      <Route path="/Purchase/ProductCard" element={<ProductCardPage />} />
    </Routes>
  );
};

export default AppRoutes;
