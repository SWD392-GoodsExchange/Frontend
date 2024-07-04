import { Route, Routes } from "react-router-dom";

import ExchangeTicket from "../components/ExchangeList/ExchangeTicket";
import HomePage from "../pages/HomePage";
import MemberInformation from "../pages/MyProfile/MemberInformation";
import MyProduct from "../pages/MyProfile/MyProduct";
import MyProfile from "../pages/MyProfile/MyProfile";
import ProductCardPage from "../pages/purchase/productCardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-profile/information" element={<MemberInformation />} />
      <Route path="/my-profile/product" element={<MyProduct />} />
      <Route path="/exchange-ticket" element={<ExchangeTicket />} />
      <Route path="/Purchase/ProductCard" element={<ProductCardPage />} />
    </Routes>
  );
};

export default AppRoutes;
