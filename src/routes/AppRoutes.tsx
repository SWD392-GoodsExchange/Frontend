import { Route, Routes } from "react-router-dom";

import ExchangeTicket from "../components/ExchangeList/ExchangeTicket";
import ShoppingCart from "../components/Shopping/shoppingCart";
import AdminPage from "../pages/Admin/AdminPage";
import ExchangeRequestPage from "../pages/Exchange/ExchangeRequestPage";
import GuestPage from "../pages/Guest/GuestPage";
import HomePage from "../pages/HomePage";
import ManageMemberPage from "../pages/Manager/manageMemberPage";
import ProductViewPage from "../pages/Manager/productViewPage";
import MemberInformation from "../pages/MyProfile/MemberInformation";
import MyBookmark from "../pages/MyProfile/MyBookmark";
import MyProduct from "../pages/MyProfile/MyProduct";
import MyProfile from "../pages/MyProfile/MyProfile";
import OrderHistoryPage from "../pages/purchase/orderHistoryPage";
import ProductCardPage from "../pages/purchase/productCardPage";
import ProductListPage from "../pages/purchase/productListPage";
import ReportPage from "../pages/reportPage";
import ManageOrderPage from "../pages/Shopping/manageOrderPage";
import PayItemPage from "../pages/Shopping/payItemPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<GuestPage />} /> */}
      <Route path="/" element={<GuestPage />} />

      <Route path="/exchange" element={<HomePage />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/exchange-request" element={<ExchangeRequestPage />} />
      <Route path="/my-profile/information" element={<MemberInformation />} />
      <Route path="/my-profile/product" element={<MyProduct />} />
      <Route path="my-profile/bookmark" element={<MyBookmark />} />
      <Route path="/exchange-ticket/:productId" element={<ExchangeTicket />} />

      <Route path="/trade" element={<ProductListPage />} />
      <Route path="/products/:productId" element={<ProductCardPage />} />
      <Route path="/Purchase/PayItem/:productId" element={<PayItemPage />} />
      <Route path="/my-profile/order-history" element={<OrderHistoryPage />} />
      <Route path="/Purchase/ShoppingCart" element={<ShoppingCart />} />
      <Route path="/Purchase/Bookmark" element={<ManageOrderPage />} />
      <Route path="/admin/manageMember" element={<ManageMemberPage />} />
      {/* Admin Route */}
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/report" element={<ReportPage />} />
      <Route
        path="/manager/productView/:productId"
        element={<ProductViewPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
