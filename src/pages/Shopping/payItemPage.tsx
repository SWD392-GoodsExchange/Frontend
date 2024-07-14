import { Paper } from "@mui/material";

import PayItem from "../../components/Shopping/payItem";

const PayItemPage = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "white",
        marginTop: "100px",
        paddingTop: "15px",
        height: "800px",
      }}
    >
      {/* <Navbar /> */}
      <PayItem />
    </Paper>
  );
};

export default PayItemPage;
