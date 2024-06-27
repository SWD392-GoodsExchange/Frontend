import { Paper } from "@mui/material";

import PayItem from "../../components/Shopping/payItem";
import Navbar from "../../components/navbar/Navbar";

const PayItemPage = () => {
  return (
    <Paper sx={{ backgroundColor: "white" }}>
      <Navbar />
      <PayItem />
    </Paper>
  );
};

export default PayItemPage;
