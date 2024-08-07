import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MemberResponse } from "../../interfaces/memberResponse";
import { ProductResponse } from "../../interfaces/productResponse";
import productApi from "../../services/productApi";

const ManageOrder = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [member, setMember] = useState<MemberResponse>();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    if (member?.FeID) {
      productApi.getAllProductByFeid(member.FeID || null).then((response) => {
        console.log("response:", response);
        setProducts(response.data);
      });
    }
  }, [member]);

  const fetchProductList = async () => {
    const res: any = await productApi.getAllProductByFeid(member?.FeID || null);
    console.log("bookmark:", res);
    if (res && res.length > 0) {
      setProducts(res);
    }
  };

  useEffect(() => {
    const initUseEffect = async () => {
      await fetchProductList();
    };
    initUseEffect();
  }, []);

  const handleCheckboxChange = (productId: number) => {
    setCheckedItems({
      ...checkedItems,
      [productId]: !checkedItems[productId],
    });
  };

  const totalPrice = products.reduce((total, product) => {
    if (checkedItems[product.productId]) {
      return total + product.price;
    }
    return total;
  }, 0);

  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="shopping-cart-container" style={{ position: "relative" }}>
      <Container sx={{ paddingTop: "10px" }}>
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="custom tabs"
            variant="fullWidth"
          >
            <Tab label="All" />
            <Tab label="Completed" />
            <Tab label="Cancelled" />
            <Tab label="Return Goods" />
          </Tabs>
        </Paper>
        <Paper
          elevation={3}
          style={{ padding: 20, width: "100%", marginTop: "20px" }}
        >
          <List>
            {products.map((product) => (
              <React.Fragment key={product.productId}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    backgroundColor: checkedItems[product.productId]
                      ? "rgb(251 146 60)"
                      : "inherit",
                    marginTop: "5px",
                  }}
                >
                  <Checkbox
                    checked={checkedItems[product.productId] || false}
                    onChange={() => handleCheckboxChange(product.productId)}
                  />
                  <Card style={{ display: "flex", width: "100%" }}>
                    <div style={{ width: 151 }}>
                      <Slider {...sliderSettings}>
                        {product.images.map((image) => (
                          <CardMedia
                            key={image.publicId}
                            component="img"
                            style={{ width: 151 }}
                            image={image.imageUrl}
                            alt="Product Image"
                          />
                        ))}
                      </Slider>
                    </div>
                    <CardContent style={{ flex: "1 0 auto" }}>
                      <Link to={`/product/${product.productId}`}>
                        <Typography component="h5" variant="h5">
                          {product.title}
                        </Typography>
                      </Link>
                      <Typography variant="subtitle1" color="textSecondary">
                        {product.description} {product.origin}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {product.price.toLocaleString()} đ
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
};

export default ManageOrder;
