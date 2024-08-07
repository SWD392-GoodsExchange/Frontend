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
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react"; // Ensure React and useState are imported correctly
import { Product } from "../../interfaces/productResponse";

const ShoppingCart = () => {
  const state = useState();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Yellow Pencil with Love Heart",
      categoryName: "Study Stuff",
      usageInfor: "To write and note down information",
      origin: "Vietnam",
      price: 198000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Blue Gel Pen with Smiley Face",
      categoryName: "Study Stuff",
      usageInfor: "Smooth writing experience for detailed notes",
      origin: "China",
      price: 120000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Vintage Fountain Pen",
      categoryName: "Luxury Pens",
      usageInfor: "Ideal for elegant handwriting and signatures",
      origin: "Germany",
      price: 450000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Mechanical Pencil Set",
      categoryName: "Drawing Tools",
      usageInfor: "Perfect for precise sketches and technical drawings",
      origin: "Japan",
      price: 280000,
      image: "https://via.placeholder.com/150",
    },
  ]);

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

  const handlePayItems = () => {
    const selectedProducts = products.filter(
      (product) => checkedItems[product.id]
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
              <React.Fragment key={product.id}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    backgroundColor: checkedItems[product.id]
                      ? "rgb(251 146 60)"
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
                        {product.usageInfor} {product.origin}
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
        <Paper
          elevation={3}
          style={{
            padding: 20,
            marginTop: "20px",
            width: "100%",
            position: "sticky",
            top: "20px", // Adjust as needed
            zIndex: 1000, // Ensure it appears above other content
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            spacing={2}
            sx={{ paddingRight: "100px" }}
          >
            <Grid item>
              <Typography variant="h5" sx={{ paddingLeft: "20px" }}>
                Total Amount
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ paddingLeft: "50px" }}
              >
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
                onClick={handlePayItem}
              >
                Pay items
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ShoppingCart;
