import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyProfile from "../pages/MyProfile/MyProfile";
import MemberInformation from "../pages/MyProfile/MemberInformation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-profile/information" element={<MemberInformation />} />
    </Routes>
  );
};

export default AppRoutes;
