import { Box, Grid, Paper } from "@mui/material";
import ProductView from "../../components/manager/productView";
import BackButton from "../back/backButton";

const ProductViewPage = () => {
  return (
    <Grid>
      <Box sx={{ paddingTop: "100px", marginLeft: "5px" }}>
        <BackButton />
      </Box>
      <Paper
        sx={{
          backgroundColor: "white",
          width: "70%",
          marginLeft: "230px",
          height: "500px",
          marginTop: "20px",
        }}
      >
        <ProductView />
      </Paper>
    </Grid>
  );
};

export default ProductViewPage;
