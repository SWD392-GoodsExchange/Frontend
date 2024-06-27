import { CssBaseline } from "@mui/material";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import ManageOrderPage from "./pages/Shopping/manageOrderPage";
import PayItemPage from "./pages/Shopping/payItemPage";
import ShoppingCartPage from "./pages/Shopping/shoppingCartPage";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<ShoppingCartPage />} />
        <Route path="/shoppingCart/payItem" element={<PayItemPage />} />
        <Route path="/shoppingCart/payItem" element={<ManageOrderPage />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
