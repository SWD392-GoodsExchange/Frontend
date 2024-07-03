import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import MyAvat from "../../assets/panda.png";
import { TiDelete } from "react-icons/ti";
// import { GiClothes, GiShorts } from "react-icons/gi";
// import { RiComputerLine } from "react-icons/ri";
// import { FaMobileAlt } from "react-icons/fa";
// import { PiGuitarLight, PiShirtFolded, PiToolboxLight } from "react-icons/pi";
// import { MdOutlinePets } from "react-icons/md";
// import { IoFastFoodOutline } from "react-icons/io5";
// import { CgGames } from "react-icons/cg";
// import JapanFlag from "../../assets/japan.png";
// import VietNamFlag from "../../assets/vietnam.png";
// import UsaFlag from "../../assets/united-states.png";
// import ChinaFlag from "../../assets/china.png";
// import ThaiLanFlag from "../../assets/thailand.png";
// import ReactImageUploading from "react-images-uploading";

const categoryList = [
  { title: "School supply" },
  {
    title: "Colthes",
  },
  {
    title: "Technology",
  },
  {
    title: "Game",
  },
  {
    title: "HomeStuff",
  },
  {
    title: "Pet",
  },
  {
    title: "Others",
  },
];

const originList = [
  { title: "Vietnam" },
  {
    title: "Japan",
  },
  {
    title: "USA",
  },
  {
    title: "China",
  },
  {
    title: "Thailand",
  },
  {
    title: "Korea",
  },
  {
    title: "Others",
  },
];

const CreateProduct = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [type, setType] = useState("exchange");

  const onChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
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

  const handleDropImage = () => {
    setPreviewImage(null);
  };

  const onClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className="flex justify-center text-20 text-black my-1">
      <Card>
        <div className="flex p-3 w-[100%]items-center">
          <img src={MyAvat} className="w-[50px] h-[50px]" />
          <button
            onClick={onClickOpenDialog}
            className="flex text-16  p-3 ml-3 w-[600px] rounded-full bg-slate-200 hover:bg-slate-400 hover:text-white transiton-all duration-300"
          >
            Post your product...
          </button>
        </div>
      </Card>
      <Dialog
        maxWidth="md"
        disableEscapeKeyDown
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleCloseDialog();
          },
        }}
      >
        <DialogTitle className="flex justify-between items-center">
          <p>Post Product</p>
          <IconButton>
            <TiDelete onClick={handleCloseDialog} size={"30px"} />
          </IconButton>
        </DialogTitle>
        <Divider variant="fullWidth" />
        <DialogContent className="flex flex-col overflow-x-hidden overflow-y-auto">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src={MyAvat} className="w-[60px] h-[60px]" />
              <p className="font-bold mx-2 text-20">Mong Luan Vo</p>
            </div>

            <div className="flex flex-col my-3 justify-center ">
              <div className="flex flex-col gap-5 items-start mx-2">
                <div className="p-2 flex gap-3 bg-yellow-400 hover:bg-yellow-600 rounded-md">
                  <label>Category </label>
                  <select>
                    {categoryList.map((item) => (
                      <option>{item.title}</option>
                    ))}
                  </select>
                </div>
                <div className="p-2 flex gap-3 bg-blue-400 hover:bg-blue-600 rounded-md">
                  <label>Origin</label>
                  <select>
                    {originList.map((item) => (
                      <option>{item.title}</option>
                    ))}
                  </select>
                </div>
                <div className="p-2 flex gap-3 bg-orange-400 hover:bg-orange-600 rounded-md">
                  <label>Type</label>
                  <select onChange={onChangeType}>
                    <option value={"exchange"}>Exchange</option>
                    <option value={"trade"}>Trade</option>
                  </select>
                </div>
                <div className="text-black flex items-center gap-2 ">
                  <label>Price</label>
                  <Tooltip
                    placement="right-start"
                    title={
                      type === "trade"
                        ? "Input price which you want"
                        : "Only trade"
                    }
                  >
                    <input
                      disabled={type === "trade" ? false : true}
                      className={`bg-slate-200 p-2 rounded-md ${
                        type === "trade"
                          ? `bg-slate-200`
                          : ` cursor-not-allowed`
                      }`}
                      type="number"
                      placeholder="VND"
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <textarea
              className="w-[100%] p-2  outline-none text-20"
              placeholder="Write title of your product"
            />
          </div>
          <div className="flex justify-center my-3">
            <TextField
              variant="outlined"
              fullWidth
              multiline
              label="Description"
              color="secondary"
            />
          </div>
          {previewImage && (
            <div className="flex items-start w-[375px]">
              <div className="flex w-[250px] items-start justify-start outline-dashed">
                <img className="w-[250px] h-[auto]" src={previewImage} />
              </div>
              <div>
                <TiDelete
                  className="text-slate-400 hover:text-slate-600"
                  size={"30px"}
                  onClick={handleDropImage}
                />
              </div>
            </div>
          )}
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
          <div className="flex justify-center mt-6">
            <Button variant="contained">Post</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProduct;
