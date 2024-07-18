import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Location from "../../assets/Location.png";

import {
  CheckoutResponse,
  OrderDetail,
} from "../../interfaces/checkOutResponse";
import { MemberInfor } from "../../interfaces/memberResponse";
import { ProductResponse } from "../../interfaces/productResponse";
import authApi from "../../services/authApi";
import productApi from "../../services/productApi";
import purchaseApi from "../../services/purchaseApi";

const PayItem = () => {
  const { state } = useLocation();
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [memberInfor, setMemberInfor] = useState<MemberInfor | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const fetchMember = async () => {
    try {
      const response: any = await authApi.getInformationMember();
      setMemberInfor(response);
    } catch (error) {
      console.error("Error fetching member information:", error);
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);
  console.log("FeId", memberInfor?.feId);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productApi.getProductByPId(state.productId);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product information:", error);
      }
    };
    fetchProduct();
  }, [state.productId]);

  useEffect(() => {
    if (products) {
      setTotalPrice(products.price);
    }
  }, [products]);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmAddress = () => {
    if (memberInfor) {
      setMemberInfor({
        ...memberInfor,
        address: selectedAddress,
      });
    }
    setOpen(false);
  };

  console.log("products", products);
  console.log("memberInfor", memberInfor);
  console.log("feId", memberInfor?.feId);

  const handlePayment = async () => {
    fetchMember();
    if (!products || !memberInfor || !memberInfor.feId) {
      console.error("Missing required data for payment.");
      return;
    }

    const orderDetails: OrderDetail[] = [
      {
        productId: products.productId,
        sellerId: products.feId ?? "",
        amount: products.price,
      },
    ];

    const checkoutData: CheckoutResponse = {
      memberId: memberInfor.feId,
      orderDetails: orderDetails,
    };

    try {
      const response = await purchaseApi.checkOutPayment(checkoutData);
      console.log("Payment response:", response);
      // Handle success (e.g., navigate to success page)
      window.location.href = response.data;
    } catch (error) {
      console.error("Payment error:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Container>
      {/* Delivery Address Section */}
      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
        <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
          Delivery Address
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Location}
              alt="Location"
              style={{ marginRight: 10, width: 30, height: 20 }}
            />
            <Box>
              <Typography>{memberInfor?.address}</Typography>
              <Typography>{memberInfor?.username}</Typography>
              <Typography>{memberInfor?.phone}</Typography>
            </Box>
          </Box>
          <button
            className="p-3 bg-blue-500 rounded-lg text-white hover:bg-blue-700"
            onClick={handleClickOpen}
          >
            Change Address
          </button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Delivery Address Change</DialogTitle>
            <DialogContent>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                value={memberInfor?.username ?? ""}
                onChange={(e) =>
                  setMemberInfor({
                    ...memberInfor!,
                    username: e.target.value,
                  })
                }
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={memberInfor?.phone ?? ""}
                onChange={(e) =>
                  setMemberInfor({
                    ...memberInfor!,
                    phone: e.target.value,
                  })
                }
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                value={selectedAddress}
                onChange={handleAddressChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleConfirmAddress} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Paper>

      {/* Selected Products Section */}
      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
        <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
          Selected Products
        </Typography>
        {products ? (
          <Card sx={{ display: "flex", marginBottom: 2 }}>
            <CardMedia
              component="img"
              image={products.images[0]?.imageUrl}
              alt="Product Image"
              style={{ width: 151, height: "100%" }}
            />
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5" gutterBottom>
                {products.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                {products.origin}
              </Typography>
              <Typography variant="h6" color="primary">
                {products.price.toLocaleString()} VND
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Typography>No products found</Typography>
        )}
      </Paper>

      {/* Payment Section */}
      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Payment Method
            </Typography>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Payment method</InputLabel>
              <Select label="Payment method">
                <MenuItem value="CashOnDelivery">
                  Cash on delivery - COD
                </MenuItem>
                <MenuItem value="BankingThroughCard">
                  Banking through Card
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
            <Typography variant="h6" gutterBottom>
              Total Amount
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {totalPrice.toLocaleString()} VND
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePayment}
              fullWidth
            >
              Pay items
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PayItem;
