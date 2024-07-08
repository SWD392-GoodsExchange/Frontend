import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Bookmarks from "../../assets/Bookmarks.png";
import Panda from "../../assets/panda.png";
import ShoppingCart from "../../assets/ShoppingCart.png";

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
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      <Grid item xs={4}>
        <ImageContainer>
          <CardMedia
            component="img"
            alt="Product Image"
            image={Panda}
            title="Product Image"
            sx={{ width: "100%", objectFit: "contain", height: "100%" }}
          />
        </ImageContainer>
      </Grid>
      <Grid item xs={8}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            2 Pencil HC 16B yellow
          </Typography>
          <PriceContainer>
            <Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderBlockColor: "#E68730",
                  background: "#FFC58F",
                  color: "black",
                }}
              >
                <Typography sx={{ fontSize: "14px", paddingLeft: "5px" }}>
                  New
                </Typography>
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  marginLeft: "10px",
                  borderBlockColor: "#E68730",
                  background: "#FFC58F",
                  color: "black",
                }}
              >
                <Typography sx={{ fontSize: "14px", paddingLeft: "5px" }}>
                  Origin: Vietnam
                </Typography>
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  marginLeft: "10px",
                  borderBlockColor: "#E68730",
                  background: "#FFC58F",
                  color: "black",
                }}
              >
                <Typography sx={{ fontSize: "14px", paddingLeft: "5px" }}>
                  Status: Selling
                </Typography>
              </Button>
            </Box>
          </PriceContainer>

          <Box sx={{ marginTop: "16px" }}>
            <Button
              variant="outlined"
              size="small"
              sx={{ fontSize: "10px", width: "150px", fontWeight: "bold" }}
            >
              Posted by: Anchor Le
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{ fontSize: "10px", width: "150px", fontWeight: "bold" }}
            >
              Create time: 13:59:48 05/01/2024
            </Button>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "8px",
                height: "200px",
              }}
            >
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Description:
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ paddingLeft: "370px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ marginRight: "8px" }}
          >
            <img src={Bookmarks} width="20" height="20" alt="ShoppingCart" />
            <Typography sx={{ fontSize: "14px", paddingLeft: "5px" }}>
              Bookmark
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ marginRight: "8px" }}
          >
            <img src={ShoppingCart} width="20" height="20" alt="ShoppingCart" />
            <Typography sx={{ fontSize: "14px", paddingLeft: "5px" }}>
              Purchase
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
