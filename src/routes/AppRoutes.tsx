import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyProfile from "../pages/MyProfile/MyProfile";
import MemberInformation from "../pages/MyProfile/MemberInformation";
import ExchangeTicket from "../components/ExchangeList/ExchangeTicket";
import MyProduct from "../pages/MyProfile/MyProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-profile/information" element={<MemberInformation />} />
      <Route path="/my-profile/product" element={<MyProduct />} />
      <Route path="/exchange-ticket" element={<ExchangeTicket />} />
    </Routes>
  );
};

export default AppRoutes;
