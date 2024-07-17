import { Grid, Paper } from "@mui/material";
import OrderHistory from "../../components/purchase/orderHistory";

const OrderHistoryPage = () => {
  return (
    <Grid>
      <Paper
        sx={{
          backgroundColor: "white",
          marginTop: "100px",
        }}
      >
        <OrderHistory />
      </Paper>
    </Grid>
  );
};

export default OrderHistoryPage;
