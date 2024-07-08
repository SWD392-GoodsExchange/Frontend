import { Grid, Paper } from "@mui/material";

import ShoppingCart from "../../components/Shopping/shoppingCart";

const ShoppingCartPage = () => {
  return (
    <Grid>
      <Paper
        sx={{
          backgroundColor: "white",
          marginTop: "100px",
        }}
      >
        <ShoppingCart />
      </Paper>
    </Grid>
  );
};

export default ShoppingCartPage;
