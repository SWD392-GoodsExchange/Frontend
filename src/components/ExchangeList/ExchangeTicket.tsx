import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ExchangeTicket = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

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
    setOpen(false);
  };
  const handleDropImage = () => {
    setPreviewImage(null);
  };
  return (
    <div className="text-black h-[1000px] bg-gradient-to-b from-orange-600 to-[#f4a767] pb-4">
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
            <img src={Avatar} width={50} height={50} />
            <div className="flex flex-col items-start">
              <h4 className="font-bold">Nguyen Dinh Hoang Huy</h4>
              <p className="font-light">23p</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="p-2 my-2 bg-yellow-500 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
              <p>Technology</p>
            </div>
            <div className="p-2 my-2 bg-blue-500 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
              <p>Japan</p>
            </div>
            <div className="p-2 my-2 bg-orange-500 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
              <p>Exchange</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Title</p>
            <p className="font-light">Description</p>
          </div>
          <div className="flex flex-col justify-center my-2">
            <img
              className="outline outline-1 w-full rounded-lg"
              src={ATM}
              width={"300px"}
              height="auto"
            />
          </div>
        </Card>
        <div className="p-5 bg-white rounded-full ">
          <FaExchangeAlt size={"40px"} />
        </div>
        {/* Thông tin người muốn trao đổi */}
        <Card
          sx={{
            width: "300px",
            padding: 2,
            minheight: "450px",
            height: "auto",
          }}
        >
          <div className="flex items-center gap-3">
            <img src={MyAvat} width={50} height={50} />
            <div className="flex flex-col items-start">
              <h4 className="font-bold">Vo Mong Luan</h4>
              <p className="font-light">Now</p>
            </div>
          </div>
          <div className="flex justify-center mt-3 ">
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
          )}
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
          Did you want send exchange request to{" "}
          <span className="font-semibold"> Nguyen Dinh Hoang Huy</span>?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            We will send notification for Nguyen Dinh Hoang Huy now
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
