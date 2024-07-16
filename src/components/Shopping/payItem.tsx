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
  List,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Location from "../../assets/Location.png";

import { MemberInfor } from "../../interfaces/memberResponse";
import { Product } from "../../interfaces/productResponse";
import authApi from "../../services/authApi";
import productApi from "../../services/productApi";

const PayItem = () => {
  const { state } = useLocation();
  const handlePayment = () => {
    // window.location.replace(
    //   "https://sandbox.vnpayment.vn/paymentv2/Payment/Error.html?code=15"
    // );
  };

  const [products, setProducts] = useState<Product | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const [memberInfor, setMemberInfor] = useState<MemberInfor>();

  const [open, setOpen] = useState(false);
  const [openNewAddress, setOpenNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(memberInfor?.Address);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const fetchMember = async () => {
    const response = await authApi.getInformationMember();
    console.log("resMember:", response);
    setMemberInfor(response.data);
    console.log("setMember", setMemberInfor);
  };

  useEffect(() => {
    fetchMember();
  }, []);

  console.log("memberInfor:", memberInfor);

  const fetchProduct = async () => {
    const response = await productApi.getProductByPId(state.productId);
    console.log("res:", response);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, [state.productId]);

  useEffect(() => {
    if (products) {
      calculateTotalPrice();
    }
  }, [products]);

  const calculateTotalPrice = () => {
    if (products) {
      setTotalPrice(products.price);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseNewAddress = () => {
    setOpenNewAddress(false);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress(event.target.value);
  };

  const handleConfirmAddress = () => {
    if (memberInfor) {
      setMemberInfor({
        ...memberInfor,
        Address: selectedAddress,
      });
    }
    setOpen(false);
  };

  return (
    <Container>
      <Paper elevation={3} style={{}}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Delivery Address
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
              <img
                src={Location}
                height={20}
                width={30}
                alt="Location"
                style={{ marginRight: 10 }}
              />
              <Box>
                <Typography>{memberInfor?.Address}</Typography>
                <Typography>{memberInfor?.Username}</Typography>
                <Typography>{memberInfor?.Phone}</Typography>
              </Box>
            </Box>
            <Button variant="contained" onClick={handleClickOpen}>
              Change Address
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Delivery Address Change</DialogTitle>
              <DialogContent sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    marginTop: "10px",
                  }}
                >
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    value={memberInfor?.Username ?? ""}
                    onChange={(e) =>
                      setMemberInfor({
                        ...memberInfor!,
                        Username: e.target.value,
                      })
                    }
                  />
                  <TextField
                    sx={{ width: "500px" }}
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={memberInfor?.Phone ?? ""}
                    onChange={(e) =>
                      setMemberInfor({
                        ...memberInfor!,
                        Phone: e.target.value,
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
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} sx={{ fontSize: "12px" }}>
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirmAddress}
                  color="primary"
                  sx={{ fontSize: "12px" }}
                >
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Paper>

      <Paper
        elevation={3}
        style={{ padding: 20, marginBottom: 20, marginTop: "10px" }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Selected Products
        </Typography>
        <List>
          {products ? (
            <Card sx={{ display: "flex", width: "100%" }}>
              {products.images.map((image) => (
                <CardMedia
                  key={image.publicId}
                  component="img"
                  style={{ width: 151, height: "100%" }}
                  image={image.imageUrl}
                  alt="Product Image"
                />
              ))}
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="h5" variant="h5">
                  {products.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
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
        </List>
      </Paper>

      <Paper
        elevation={3}
        style={{
          padding: 20,
          marginBottom: 20,
          position: "sticky",
          top: 20,
          zIndex: 1000,
        }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Payment Method
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
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
          <Grid item textAlign="right">
            <Typography variant="h6" gutterBottom>
              Total Amount
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {totalPrice.toLocaleString()} VND
            </Typography>
          </Grid>
          <Grid item textAlign="right">
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ maxWidth: 300 }}
              onClick={handlePayment}
            >
              Pay items
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Dialog open={openNewAddress} onClose={handleCloseNewAddress}>
        <DialogTitle>New Address</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Full Name" variant="outlined" fullWidth />
            <TextField label="Phone Number" variant="outlined" fullWidth />
            <TextField label="Detail Address" variant="outlined" fullWidth />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewAddress} sx={{ fontSize: "12px" }}>
            Back
          </Button>
          <Button
            onClick={handleCloseNewAddress}
            color="primary"
            sx={{ fontSize: "12px" }}
          >
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PayItem;
