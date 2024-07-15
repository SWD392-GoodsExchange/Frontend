import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  List,
  ListItem,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ProductResponse } from "../../interfaces/productResponse";

const OrderHistory = () => {
  const state = useState();
  const [products, setProducts] = useState<ProductResponse[]>([]);

  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  // Function to handle checkbox change
  const handleCheckboxChange = (productId: number) => {
    setCheckedItems({
      ...checkedItems,
      [productId]: !checkedItems[productId],
    });
  };

  // Calculate total price based on checked items
  const totalPrice = products.reduce((total, product) => {
    if (checkedItems[product.productId]) {
      return total + product.price;
    }
    return total;
  }, 0);

  const handlePayItems = () => {
    const selectedProducts = products.filter(
      (product) => checkedItems[product.productId]
    );
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handlePayItem = () => {};
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
            <Tab label="Purchase Area" />
            <Tab label="Exchange Area" />
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
                    {product.images.map((image) => (
                      <CardMedia
                        key={image.publicId}
                        component="img"
                        style={{ width: 151 }}
                        image={image.imageUrl}
                        alt="Product Image"
                      />
                    ))}
                    <CardContent style={{ flex: "1 0 auto" }}>
                      <Typography component="h5" variant="h5">
                        {product.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {product.description} {product.origin}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {product.price.toLocaleString()} đ
                      </Typography>
                    </CardContent>
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

export default OrderHistory;
