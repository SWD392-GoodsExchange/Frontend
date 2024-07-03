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
          width: "90%",
          marginLeft: "100px",
        }}
      >
        <ProductCard />
      </Paper>
    </Grid>
  );
};

export default ProductCardPage;
