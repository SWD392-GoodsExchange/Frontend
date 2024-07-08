import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Bookmarks from "../../assets/Bookmarks.png";
import MSI1 from "../../assets/MSI1.jpg";
import MSI2 from "../../assets/MSI2.jpg";
import MSI3 from "../../assets/MSI3.jpg";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [MSI1, MSI2, MSI3];

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      <Grid item xs={4}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <CardMedia
                component="img"
                alt={`Product Image ${index + 1}`}
                image={image}
                title={`Product Image ${index + 1}`}
                sx={{ width: "100%", objectFit: "contain", height: "100%" }}
              />
            </ImageContainer>
          ))}
        </Slider>
      </Grid>
      <Grid item xs={8}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Laptop MSI Gaming GF63 12UC-887VN
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
            <Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  background: "#CCCCCC",
                  color: "black",
                  width: "250px",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>Price:</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    marginLeft: "10px",
                    borderBlockColor: "#E68730",
                    background: "#FFFFFF",
                    color: "black",
                  }}
                >
                  <Typography sx={{ fontSize: "14px", paddingLeft: "5px" }}>
                    1.000.000.000 VND
                  </Typography>
                </Button>
              </Button>
            </Box>
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
                <li>
                  CPU Intel Core i7-12650H đem lại khả năng xử lý những tác vụ
                  làm việc nhanh chóng
                </li>
                <li>
                  Card đồ họa RTX 3050 cân mọi tựa game như Esport hoặc game AAA
                  ở mức đồ họa Medium
                </li>
                <li>
                  RAM 8GB giúp bạn có thể thực hiện công việc trên nhiều tác vụ
                  cùng lúc
                </li>
                <li>
                  Ổ cứng 512GB SSD cho không gian thoải mái, tải game và sử dụng
                  phần mềm nhanh chóng
                </li>
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
