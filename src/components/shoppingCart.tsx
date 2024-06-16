import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Yellow Pencil with Love Heart",
    categoryName: "Study Stuff",
    usageInfor: "To write and note down information",
    origin: "Vietnam",
    price: 198000,
    originalPrice: 350000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Yellow Pencil with Love Heart",
    categoryName: "Study Stuff",
    usageInfor: "To write and note down information",
    origin: "Vietnam",
    price: 198000,
    originalPrice: 350000,
    image: "https://via.placeholder.com/150",
  },
];

const ShoppingCart = () => {
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
    if (checkedItems[product.id]) {
      return total + product.price;
    }
    return total;
  }, 0);

  return (
    <Container>
      <Paper elevation={3} style={{ padding: 20, width: "100%" }}>
        <List>
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  backgroundColor: checkedItems[product.id]
                    ? "rgb(253 186 116)"
                    : "inherit",
                  marginTop: "5px",
                }}
              >
                <Checkbox
                  checked={checkedItems[product.id] || false}
                  onChange={() => handleCheckboxChange(product.id)}
                />
                <Card style={{ display: "flex", width: "100%" }}>
                  <CardMedia
                    component="img"
                    style={{ width: 151 }}
                    image={product.image}
                    alt="Product Image"
                  />
                  <CardContent style={{ flex: "1 0 auto" }}>
                    <Typography component="h5" variant="h5">
                      {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {product.usageInfor}, {product.origin}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {product.price.toLocaleString()} đ
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <del>{product.originalPrice.toLocaleString()} đ</del>
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
      <Paper
        elevation={3}
        style={{ padding: 20, marginTop: "20px", width: "100%" }}
      >
        <Grid container direction="column" alignItems="flex-end" spacing={2}>
          <Grid item>
            <Typography variant="h5">Total Amount</Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {totalPrice.toLocaleString()} đ
            </Typography>
          </Grid>
          <Grid item>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ width: "100%", maxWidth: "300px" }}
            >
              Pay items
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ShoppingCart;