import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Bookmarks from "../../assets/Bookmarks.png";
import ShoppingCart from "../../assets/ShoppingCart.png";
import { ProductResponse } from "../../interfaces/productResponse";
import productApi from "../../services/productApi";

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
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductResponse | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const response = await productApi.getProductByPId(Number(id)); // assuming productApi has a method getProductByPId
        setProduct(response.data);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Grid container spacing={3} sx={{ padding: "20px", paddingLeft: "30px" }}>
      <Grid item xs={4}>
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <ImageContainer key={index}>
              <CardMedia
                component="img"
                alt={`Product Image ${index + 1}`}
                image={image.imageUrl}
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
            {product.title}
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
                  Origin: {product.origin}
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
                sx={{ background: "#CCCCCC", color: "black", width: "250px" }}
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
                    {product.price.toLocaleString()} VND
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
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ paddingLeft: "350px" }}>
          <Button
            variant="outlined"
            size="small"
            sx={{ background: "#CCCCCC", color: "black", width: "250px" }}
          >
            <img
              src={ShoppingCart}
              alt="Shopping Cart"
              style={{ width: "20px", marginRight: "5px" }}
            />
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ background: "#CCCCCC", color: "black", width: "250px" }}
          >
            <img
              src={Bookmarks}
              alt="Bookmarks"
              style={{ width: "20px", marginRight: "5px" }}
            />
            Bookmark
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
