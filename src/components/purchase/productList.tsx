import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductResponse } from "../../interfaces/productResponse";
import productApi from "../../services/productApi";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductResponse[]>([]);
  console.log("first", products);

  const [clickedViewDetailId, setClickedViewDetailId] = useState<number | null>(
    null
  );

  const fetchProductsList = async () => {
    const response: any = (await productApi.getAllProduct()).data.data;
    console.log("FetchData:", response);
    if (response && response.length > 0) {
      setProducts(response);
    }
  };

  useEffect(() => {
    const initUseEffect = async () => {
      await fetchProductsList();
    };
    initUseEffect();
  }, []);

  const handleViewDetails = (
    productId: number,
    productResponse: ProductResponse
  ) => {
    if (clickedViewDetailId === productId) {
      setClickedViewDetailId(null);
    } else {
      setClickedViewDetailId(productId);
      navigate(`/Products/${productId}`, {
        state: productResponse,
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.productId} xs={12} sm={6} md={4}>
            <Card>
              {product.images.map((image) => (
                <CardMedia
                  key={image.publicId}
                  component="img"
                  style={{ width: 151 }}
                  image={image.imageUrl}
                  alt="Product Image"
                />
              ))}

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  onClick={() => handleViewDetails(product.productId, product)}
                >
                  View Details
                </Button>
                <Button size="small" color="secondary">
                  Purchase
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
