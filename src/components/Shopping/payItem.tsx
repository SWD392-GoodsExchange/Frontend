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
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Location from "../../assets/Location.png";

import { MemberInfor } from "../../interfaces/memberResponse";
import { Product } from "../../interfaces/productResponse";
import authApi from "../../services/authApi";
import productApi from "../../services/productApi";

const PayItem = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handlePayment = () => {
    window.location.replace(
      "https://sandbox.vnpayment.vn/paymentv2/Payment/Error.html?code=15"
    );
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const [memberInfor, setMemberInfor] = useState<MemberInfor>();
  const [open, setOpen] = useState(false);
  const [openNewAddress, setOpenNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    memberInfor?.Address || "address1"
  );
  const location = useLocation();

  const selectedProducts = location.state?.products || [];

  const handleCheckboxChange = (productId: number) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [productId]: !prevCheckedItems[productId],
    }));
  };

  const fetchMember = async () => {
    const response = await authApi.getInformationMember();
    console.log("resMember:", response);
    setMemberInfor(response.data);
  };

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchProduct = async () => {
    const response = await productApi.getProductByPId(state.productId);
    console.log("res:", response);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, [state.productId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenNewAddress = () => {
    setOpenNewAddress(true);
  };

  const handleCloseNewAddress = () => {
    setOpenNewAddress(false);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress(event.target.value);
  };

  const handleConfirmAddress = () => {
    setMemberInfor({
      ...memberInfor,
      Address: selectedAddress,
      FeID: memberInfor?.FeID || "",
      Username: memberInfor?.Username || "",
      Phone: memberInfor?.Phone || "",
    });
    setOpen(false);
  };

  const totalPrice = products.reduce((total, product) => {
    if (checkedItems[product.id]) {
      return total + product.price;
    }
    return total;
  }, 0);

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
                    value={memberInfor?.Username}
                    onChange={(e) =>
                      setMemberInfor({
                        ...memberInfor,
                        Username: e.target.value,
                      })
                    }
                  />
                  <TextField
                    sx={{ width: "500px" }}
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={memberInfor?.Phone}
                    onChange={(e) =>
                      setMemberInfor({
                        ...memberInfor,
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
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  backgroundColor: checkedItems[product.id]
                    ? "rgb(251 146 60 / 50%)"
                    : "inherit",
                  marginBottom: 5,
                }}
              >
                <Card sx={{ display: "flex", width: "100%" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151, objectFit: "cover" }}
                    image={product.image}
                    alt="Product"
                  />
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="h5" variant="h5">
                      {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {product.origin}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {product.price.toLocaleString()} VND
                    </Typography>
                  </CardContent>
                </Card>
              </ListItem>
              {index < products.length - 1 && <Divider />}
            </React.Fragment>
          ))}
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
