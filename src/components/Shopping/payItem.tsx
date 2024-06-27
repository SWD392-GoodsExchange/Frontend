import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Location from "../../assets/Location.png";
import { Member } from "../../interfaces/memberResponse";
import { Product } from "../../interfaces/productResponse";

const PayItem = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [member, setMember] = useState<Member>({} as Member);
  const [open, setOpen] = useState(false);
  const [openNewAddress, setOpenNewAddress] = useState(false); // State for new address form
  const [selectedAddress, setSelectedAddress] = useState(
    member.Address || "address1"
  );
  const location = useLocation();

  const selectedProducts = location.state?.products || [];

  const handleCheckboxChange = (productId: number) => {
    setCheckedItems({
      ...checkedItems,
      [productId]: !checkedItems[productId],
    });
  };

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

  const handleAddressChange = (event: any) => {
    setSelectedAddress(event.target.value);
    setMember({ ...member, Address: event.target.value });
  };

  const totalPrice = products.reduce((total, product) => {
    if (checkedItems[product.id]) {
      return total + product.price;
    }
    return total;
  }, 0);

  return (
    <Container>
      <Paper elevation={3} style={{ marginBottom: 20 }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Delivery Address
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Location}
              height={20}
              width={30}
              alt="Location"
              style={{ marginRight: 10 }}
            />
            <Typography>{member.Address}</Typography>
            <Box>
              <Typography>{member.Username}</Typography>
              <Typography>{member.Phone}</Typography>
              <Typography>{member.Address}</Typography>
            </Box>
            <Box>
              <Button variant="contained" onClick={handleClickOpen}>
                Change Address
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Địa Chỉ Của Tôi</DialogTitle>
                <DialogContent>
                  <RadioGroup
                    aria-label="address"
                    name="address"
                    value={selectedAddress}
                    onChange={handleAddressChange}
                  >
                    <FormControlLabel
                      value="address1"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography>Lê Quang Huy</Typography>
                          <Typography>(+84) 797090433</Typography>
                          <Typography>
                            Khu Phố Mỹ Khoan Thị Trấn Hiệp Phước Thị Trấn Hiệp
                            Phước, Huyện Nhơn Trạch, Đồng Nai
                          </Typography>
                        </Box>
                      }
                    />
                    <FormControlLabel
                      value="address2"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography>Lê Quang Huy</Typography>
                          <Typography>(+84) 387687323</Typography>
                          <Typography>
                            5 Đường 12b, Kp Chân Phúc Cẩm Phường Long Thạnh Mỹ,
                            Thành Phố Thủ Đức, TP. Hồ Chí Minh
                          </Typography>
                        </Box>
                      }
                    />
                  </RadioGroup>
                  <Button
                    onClick={handleClickOpenNewAddress}
                    sx={{
                      backgroundColor: "white",
                      color: "rgb(251 146 60)",
                      borderColor: "rgb(251 146 60)",
                      border: "solid 1px",
                      fontSize: "10px",
                    }}
                  >
                    + New Address
                  </Button>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    sx={{
                      backgroundColor: "white",
                      color: "rgb(251 146 60)",
                      borderColor: "rgb(251 146 60)",
                      border: "solid 1px",
                      fontSize: "12px",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={{
                      backgroundColor: "rgb(251 146 60)",
                      color: "white",
                      fontSize: "12px",
                    }}
                  >
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
        <Typography variant="h6" gutterBottom>
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
                <Checkbox
                  checked={checkedItems[product.id] || false}
                  onChange={() => handleCheckboxChange(product.id)}
                />
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
                      {product.price.toLocaleString()} đ
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <del>{product.originalPrice.toLocaleString()} đ</del>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton color="primary">
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
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
              {totalPrice.toLocaleString()} đ
            </Typography>
          </Grid>
          <Grid item textAlign="right">
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ maxWidth: 300 }}
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
