import { Box, Grid } from "@mui/material";
import ProductList from "../../components/purchase/productList";
import BackButton from "../back/backButton";

type Props = {};

const ProductListPage = (props: Props) => {
  return (
    <Grid>
      <Box sx={{ marginTop: "100px", height: "1px" }}>
        <BackButton />
      </Box>
      <Box
        sx={{
          width: "70%",
          marginLeft: "230px",
          height: "500px",
        }}
      >
        <ProductList />
      </Box>
    </Grid>
  );
};

export default ProductListPage;
