import { Paper } from "@mui/material";

import ManageOrder from "../../components/Shopping/manageOrder";
import Navbar from "../../components/navbar/Navbar";

const ManageOrderPage = () => {
  return (
    <Paper sx={{ backgroundColor: "white" }}>
      <Navbar />
      <ManageOrder />
    </Paper>
  );
};

export default ManageOrderPage;
