import { Paper } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";
import ShoppingCart from "../../components/Shopping/shoppingCart";

const ShoppingCartPage = () => {
  return (
    <Paper sx={{ backgroundColor: "white" }}>
      <Navbar />
      <ShoppingCart />
    </Paper>
  );
};

export default ShoppingCartPage;
