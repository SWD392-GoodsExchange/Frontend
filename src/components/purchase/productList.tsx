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
import { useNavigate } from "react-router-dom";
import { MemberInfor } from "../../interfaces/memberResponse";
import { ProductResponse } from "../../interfaces/productResponse";
import authApi from "../../services/authApi";
import productApi from "../../services/productApi";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductResponse[]>([]);
  console.log("first", products);
  const [memberInfor, setMemberInfor] = useState<MemberInfor>();

  const [clickedViewDetailId, setClickedViewDetailId] = useState<number | null>(
    null
  );

  const fetchMemberInfor = async () => {
    const response: any = await authApi.getInformationMember();
    console.log("responseMember", response);
    if (response && response.length > 0) {
      setMemberInfor(response);
    }
  };

  useEffect(() => {
    const initUseEffect = async () => {
      await fetchMemberInfor();
    };
    initUseEffect();
  });

  const fetchProductsList = async () => {
    const response: any = (await productApi.getAllProduct()).data.data;
    console.log("FetchData:", response);

    // Filter products based on feId match
    const filteredProducts = response.filter((product: ProductResponse) => {
      return product.feId !== memberInfor?.feId;
    });
    setProducts(filteredProducts);
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
    <Container maxWidth="lg" sx={{ marginTop: "130px" }}>
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
