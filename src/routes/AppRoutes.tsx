import { Route, Routes } from "react-router-dom";

import ExchangeTicket from "../components/ExchangeList/ExchangeTicket";
import ProductList from "../components/purchase/productList";
import ShoppingCart from "../components/Shopping/shoppingCart";
import GuestPage from "../pages/Guest/GuestPage";
import HomePage from "../pages/HomePage";
import ManageMemberPage from "../pages/Manager/manageMemberPage";
import MemberInformation from "../pages/MyProfile/MemberInformation";
import MyBookmark from "../pages/MyProfile/MyBookmark";
import MyProduct from "../pages/MyProfile/MyProduct";
import MyProfile from "../pages/MyProfile/MyProfile";
import BillPage from "../pages/purchase/billPage";
import OrderHistoryPage from "../pages/purchase/orderHistoryPage";
import ProductCardPage from "../pages/purchase/productCardPage";
import ManageOrderPage from "../pages/Shopping/manageOrderPage";
import PayItemPage from "../pages/Shopping/payItemPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />

      <Route path="/exchange" element={<HomePage />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-profile/information" element={<MemberInformation />} />
      <Route path="/my-profile/product" element={<MyProduct />} />
      <Route path="my-profile/bookmark" element={<MyBookmark />} />
      <Route path="/exchange-ticket/:productId" element={<ExchangeTicket />} />

      <Route path="/trade" element={<ProductList />} />
      <Route path="/products/:productId" element={<ProductCardPage />} />
      <Route path="/Purchase/PayItem" element={<PayItemPage />} />
      <Route path="/order/history" element={<OrderHistoryPage />} />
      <Route path="/Purchase/ShoppingCart" element={<ShoppingCart />} />
      <Route path="/Purchase/Bookmark" element={<ManageOrderPage />} />
      <Route path="/manager/manageMember" element={<ManageMemberPage />} />
      <Route path="/manager/manageMember" element={<BillPage />} />
    </Routes>
  );
};

export default AppRoutes;
