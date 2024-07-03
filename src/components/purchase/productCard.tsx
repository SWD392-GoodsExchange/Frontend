import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Panda from "../../assets/panda.png";

const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  backgroundColor: "#f5f5f5",
});

const PriceContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "8px",
});

const ProductCard = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={3}>
        <ImageContainer>
          <CardMedia
            component="img"
            alt="Product Image"
            image={Panda}
            title="Product Image"
            sx={{ width: "50%", objectFit: "contain" }}
          />
        </ImageContainer>
      </Grid>
      <Grid item xs={9}>
        <CardContent>
          <Typography variant="h6" component="div">
            2 Pencil HC 16B yellow
          </Typography>

          <PriceContainer>
            <Box>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ marginRight: "8px" }}
              >
                Giảm đ1k
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ marginRight: "8px" }}
              >
                Giảm đ3k
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ marginRight: "8px" }}
              >
                Giảm đ5k
              </Button>
              <Button variant="contained" color="primary" size="small">
                Giảm đ8k
              </Button>
            </Box>
          </PriceContainer>
          <Box sx={{ marginTop: "16px" }}>
            <Button variant="outlined" size="small" sx={{ marginRight: "8px" }}>
              Trả hàng 15 ngày
            </Button>
            <Button variant="outlined" size="small">
              Miễn phí vận chuyển
            </Button>
          </Box>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
