import { Box, Grid, Paper } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/purchase/productCard";
import BackButton from "../back/backButton";

const ProductCardPage = () => {
  return (
    <Grid>
      <Navbar />
      <Box sx={{ paddingTop: "10px", paddingLeft: "5px" }}>
        <BackButton />
      </Box>
      <Paper
        sx={{
          backgroundColor: "white",
          width: "80%",
          marginLeft: "150px",
          height: "500px",
        }}
      >
        <ProductCard />
      </Paper>
    </Grid>
  );
};

export default ProductCardPage;
