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
    <Grid container xs={12} sx={{ padding: "50px", paddingLeft: "200px" }}>
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
                New
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ marginRight: "8px" }}
              >
                Origin: Vietnam
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ marginRight: "8px" }}
              >
                Status: Selling
              </Button>
            </Box>
          </PriceContainer>
          <Box
            sx={{ marginTop: "16px", display: "flex", flexDirection: "column" }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{ marginBottom: "8px", fontSize: "10px", width: "150px" }}
            >
              Create time: 13:59:48 05/01/2024
            </Button>
            <Box
              sx={{
                border: "black solid 1px",
                borderRadius: "5px",
                padding: "10px",
                width: "60%",
              }}
            >
              <Typography>Description :</Typography>
              <Typography variant="body2" sx={{ marginTop: "8px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ marginRight: "8px" }}
          >
            Purchase
          </Button>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
