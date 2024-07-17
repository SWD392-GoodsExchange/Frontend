import {
  Card,
  CardContent,
  Container,
  Divider,
  List,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Orders } from "../../interfaces/checkOutResponse"; // Adjust imports based on your actual interfaces
import { ProductResponse } from "../../interfaces/productResponse";
import productApi from "../../services/productApi";
import purchaseApi from "../../services/purchaseApi";

const OrderHistory = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [order, setOrder] = useState<Orders[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  // Function to handle checkbox change
  const handleCheckboxChange = (orderId: number) => {
    setCheckedItems({
      ...checkedItems,
      [orderId]: !checkedItems[orderId],
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
    // Handle payment logic here
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const fetchOrder = async () => {
    try {
      const response: any = (await purchaseApi.getOHList()).data;
      console.log("first", response);
      setOrder(response);
    } catch (error) {
      console.error("Error fetching order history:", error);
    }
  };

  const fetchProducts = async (productIds: number) => {
    try {
      const response: any = await productApi.getProductByProductId(productIds);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

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
            {order.map((orderItem) => (
              <React.Fragment key={orderItem.orderId}>
                <Card
                  sx={{
                    backgroundColor: checkedItems[orderItem.orderId]
                      ? "rgb(251 146 60)"
                      : "inherit",
                    marginTop: "5px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">
                      Order ID: {orderItem.orderId}
                    </Typography>
                    <Typography variant="body1">
                      Date:{" "}
                      {new Date(orderItem.createdTime).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1">
                      Total: ${orderItem.totalAmount}
                    </Typography>
                  </CardContent>
                </Card>
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
