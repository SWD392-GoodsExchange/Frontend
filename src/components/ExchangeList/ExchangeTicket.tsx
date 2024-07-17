import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../assets/bear.png";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Tooltip,
} from "@mui/material";
import ATM from "../../assets/—Pngtree—credit card_5933595.png";
import { FaExchangeAlt } from "react-icons/fa";
import MyAvat from "../../assets/panda.png";
import { TiDelete } from "react-icons/ti";
import { TransitionProps } from "@mui/material/transitions";
import productApi from "../../services/productApi";
import { IoBanOutline } from "react-icons/io5";
import * as signalR from "@microsoft/signalr";
import { ProductResponse } from "../../interfaces/productResponse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ExchangeTicket = () => {
  const location = useLocation();
  const productObject: ProductResponse = location.state;
  console.log(productObject);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [openProductList, setOpenProductList] = useState(false);
  const [myProductList, setMyProductList] = useState<ProductResponse[]>();
  const [chooseProductId, setChooseProductId] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const fetchProductList: any =
        await productApi.getAllProductExchangeByFeid(
          localStorage.getItem("feId")
        );
      setMyProductList(fetchProductList.data);
    };
    fetchData();
  }, []);

  const openProductLists = async () => {
    setOpenProductList(!openProductList);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendExchangeRequest = () => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(
        `https://localhost:5001/hubs/notification?access_token=${localStorage.getItem(
          "jwtToken"
        )}`
      )
      .build();

    connection
      .start()
      .then(() => {
        console.log("SignalR connected");
        connection
          .invoke("SendNotification", {
            RecipientId: productObject.feId.toString(),
            OnwerProductId: productObject.productId.toString(),
            ExchangerProductIds: chooseProductId?.toString(),
          })
          .then(() => {
            toast.success("Send exchange request success", {
              position: "top-right",
              autoClose: 3000,
              onClose: () => {
                setOpen(false);
                navigate("/exchange");
              },
            });
            console.log("Success");
          })
          .catch((error) => {
            toast.success("Send exchange request success", {
              position: "top-right",
              autoClose: 3000,
              onClose: () => {
                setOpen(false);
                navigate("/exchange");
              },
            });
            // console.log("Error:", error);
          });
      })
      .catch((error) => {
        console.log(`SignalR error: ${error}`);
      });
  };

  const handleDropImage = () => {
    setPreviewImage(null);
  };
  console.log(myProductList);
  const chooseProduct = myProductList?.find(
    (item) => item.productId === chooseProductId
  );
  console.log(chooseProduct);
  return (
    <div className="text-black h-[640px] bg-gradient-to-b from-orange-600 to-[#f4a767] pb-4 mt-[100px]">
      <ToastContainer />
      <div className="flex justify-between px-3 py-2 items-center">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="rounded-full p-3 bg-white hover:bg-orange-200 cursor-pointer"
        >
          <IoIosArrowBack size={"22px"} color="black" />
        </div>
        <p className="font-normal text-24 ">Exchange Ticket</p>
        <Tooltip title="Send request">
          <div
            onClick={handleClickOpen}
            className="rounded-full p-3 bg-white hover:bg-orange-200 cursor-pointer"
          >
            <IoMdCheckmark size={"22px"} color="#0D6EFD" />
          </div>
        </Tooltip>
      </div>
      <div className="flex items-start justify-between my-10 mx-96">
        {/* Thông tin của người trao đổi  */}
        <Card
          sx={{
            width: "300px",
            padding: 2,
            minheight: "450px",
            height: "auto",
          }}
        >
          <div className="flex items-center gap-3">
            <img src={productObject.avatar} width={50} height={50} />
            <div className="flex flex-col items-start">
              <h4 className="font-bold">{productObject.userName}</h4>
              <p className="font-light truncate">
                {productObject.createdTime.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="p-2 my-2 bg-yellow-500 text-13 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
              <p>{productObject.categoryName}</p>
            </div>
            <div className="p-2 my-2 bg-blue-500 text-13 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
              <p>{productObject.origin}</p>
            </div>
            <div className="p-2 my-2 bg-orange-500 text-13 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
              <p>{productObject.type}</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">{productObject.title}</p>
            <p className="font-light">
              Description: {productObject.description}
            </p>
          </div>
          <div className="flex flex-col justify-center my-2">
            {productObject.images.map((image) => (
              <img
                className="outline outline-1 w-full rounded-lg"
                src={image.imageUrl}
                width={"300px"}
                height="300px"
              />
            ))}
          </div>
        </Card>
        <Tooltip title="Show all products">
          <div
            onClick={openProductLists}
            className={`${
              openProductList
                ? "text-orange-700 bg-orange-700 shadow-sm"
                : `text-black`
            } p-4 bg-white rounded-full hover:text-orange-700 text-orange-400 transition-all duration-300`}
          >
            <FaExchangeAlt size={"40px"} />
          </div>
        </Tooltip>
        {/* Thông tin người muốn trao đổi */}
        <Card
          sx={{
            width: "300px",
            padding: 2,
            minheight: "450px",
            height: "470px",
          }}
        >
          <div className="flex items-center gap-3">
            <img src={localStorage.getItem("avatar")} width={50} height={50} />
            <div className="flex flex-col items-start">
              <h4 className="font-bold">{localStorage.getItem("userName")}</h4>
              <p className="font-light">Now</p>
            </div>
          </div>
          <div className="flex flex-col h-[auto] justify-center mt-2">
            <div>
              {chooseProductId === undefined ? (
                <p className="flex justify-center mt-5 items-center gap-1 font-semibold">
                  <IoBanOutline color="red" size={"22px"} />
                  No product choosen
                </p>
              ) : (
                <>
                  <div className="flex gap-1">
                    <div className="p-2 my-2 bg-yellow-500 text-13 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
                      <p>{chooseProduct?.categoryName}</p>
                    </div>
                    <div className="p-2 my-2 bg-blue-500 text-13 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
                      <p>{chooseProduct?.origin}</p>
                    </div>
                    <div className="p-2 my-2 bg-orange-500 text-13 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
                      <p>{chooseProduct?.type}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{chooseProduct?.title}</p>
                    <p className="font-light">
                      Description: {chooseProduct?.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center my-2">
                    {chooseProduct?.images.map((image) => (
                      <img
                        className="outline outline-1 w-full rounded-lg"
                        src={image.imageUrl}
                        width={"300px"}
                        height="auto"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {openProductList === true && (
            <div className="flex fixed  overflow-y-auto p-5 bg-slate-200 flex-col rounded-md right-[50px] w-[320px] h-[470px] top-[200px] ">
              {myProductList === null && (
                <p>No Product, please post product!!</p>
              )}
              {myProductList?.map((item) => (
                <div
                  key={item.productId}
                  onClick={() => {
                    setChooseProductId(item.productId);
                  }}
                  className={`${
                    item.productId === chooseProductId &&
                    `outline outline-orange-500`
                  } flex flex-col w-[auto] h-[auto] rounded-md px-[10px] py-[5px] my-[5px] bg-white shadow-md cursor-pointer`}
                >
                  <div className="flex gap-1">
                    <div className="p-2 my-2 bg-yellow-500 text-13 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
                      <p>{item.categoryName}</p>
                    </div>
                    <div className="p-2 my-2 bg-blue-500 text-13 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
                      <p>{item.origin}</p>
                    </div>
                    <div className="p-2 my-2 bg-orange-500 text-13 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
                      <p>{item.type}</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <p className="font-bold">{item.title}</p>
                    <p className="font-light">
                      Description: {item.description}
                    </p>
                  </div>
                  {item.images.map((image) => (
                    <img src={image.imageUrl} alt="" width={200} height={200} />
                  ))}
                </div>
              ))}
            </div>
          )}
          {/* <div className="flex justify-center mt-3 ">
            <input
              type="file"
              className="hidden"
              id="image-input"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="image-input"
              className="cursor-pointer flex items-center justify-center w-60 h-16 bg-gray-200 border border-gray-400 rounded-lg"
            >
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span className="ml-2 text-gray-500">Upload Image</span>
            </label>
          </div>
          {previewImage && (
            <div className="flex flex-col justify-center my-2">
              <img
                className="outline outline-1 w-full rounded-lg"
                src={previewImage}
                width={"300px"}
                height="auto"
              />
            </div>
          )} */}
        </Card>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Did you want send exchange request to
          <span className="font-semibold"> {productObject.userName}</span>?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            We will send notification for {productObject.userName} now
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={sendExchangeRequest}
          >
            Send Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExchangeTicket;
