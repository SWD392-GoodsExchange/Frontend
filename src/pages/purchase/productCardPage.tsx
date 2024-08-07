import { Box, Grid, Paper } from "@mui/material";
import ProductCard from "../../components/purchase/productCard";
import BackButton from "../back/backButton";

const ProductCardPage = () => {
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
        <ProductCard />
      </Paper>
    </Grid>
  );
};

export default ProductCardPage;
