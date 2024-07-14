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
import React, { useEffect, useState } from "react";
import MyAvat from "../../assets/panda.png";
import { TiDelete } from "react-icons/ti";
import { RxAvatar } from "react-icons/rx";
import categoryApi from "../../services/categoryApi";
import productApi from "../../services/productApi";
import Loading from "../Loading";
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

export interface CategoryInterface {
  cateId: number;
  cateName: string;
}

export interface FormPostProduct {
  CateId: string;
  Description: string;
  Origin: string;
  Price: string;
  Title: string;
  File: File | null;
  Type: string;
}

const initialStatePostProduct: FormPostProduct = {
  CateId: "1",
  Description: "",
  Origin: "Vietnam",
  Type: "Exchange",
  Title: "",
  Price: "0",
  File: null,
};

const CreateProduct = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryInterface[]>();
  const [formPostProduct, setFormPostProduct] = useState<FormPostProduct>(
    initialStatePostProduct
  );
  const [loadingPostProduct, setLoadingPostProduct] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const category: any = await categoryApi.getAllCategory();
      setCategories(category.data);
    };
    fetchData();
  }, []);

  const handleChangeForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormPostProduct((prevFormPostProduct) => ({
      ...prevFormPostProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormPostProduct((prevFormPostProduct) => ({
        ...prevFormPostProduct,
        File: file,
      }));
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

  const createProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingPostProduct(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("CateId", formPostProduct.CateId);
    data.append("Origin", formPostProduct.Origin);
    data.append("Type", formPostProduct.Type);
    data.append("Title", formPostProduct.Title);
    data.append("Description", formPostProduct.Description);
    data.append("Price", formPostProduct.Price);
    if (formPostProduct.File) {
      data.append("File", formPostProduct.File);
    }

    productApi
      .createProduct(data)
      .then((response) => {
        console.log("Response post product", response);
        setFormPostProduct(initialStatePostProduct);
        setPreviewImage(null);
        setLoadingPostProduct(false);
        setOpenDialog(false);
      })
      .catch((error) => {
        console.log("Error post product", error);
      });
  };
  return (
    <div className="flex justify-center text-20 text-black my-1">
      <Card>
        <div className="flex p-3 w-[100%] items-center">
          <img
            src={localStorage.getItem("avatar")}
            className="w-[50px] h-[50px]"
          />

          <button
            onClick={onClickOpenDialog}
            className="flex text-16  p-3 ml-3 w-[600px] rounded-full bg-slate-200 hover:bg-slate-400 hover:text-white transiton-all duration-300"
          >
            Post your product...
          </button>
        </div>
      </Card>
      <Dialog
        fullWidth
        disableEscapeKeyDown
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle className="flex justify-between items-center">
          <p>Post Product</p>
          <IconButton>
            <TiDelete onClick={handleCloseDialog} size={"30px"} />
          </IconButton>
        </DialogTitle>
        <Divider variant="fullWidth" />
        <DialogContent className="flex flex-col overflow-x-hidden overflow-y-auto">
          <form onSubmit={createProduct}>
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <img
                  src={localStorage.getItem("avatar")}
                  className="w-[60px] h-[60px]"
                />
                <p className="font-bold mx-2 text-20">
                  {localStorage.getItem("userName")}
                </p>
              </div>
              <div className="flex flex-col my-3 justify-center ">
                <div className="flex gap-4 items-start mx-2">
                  <div className="p-2 flex gap-3 bg-yellow-400 hover:bg-yellow-600 rounded-md">
                    <label>Category </label>
                    <select
                      name="CateId"
                      value={formPostProduct.CateId}
                      onChange={handleChangeForm}
                    >
                      {categories?.map((item) => (
                        <option value={item.cateId}>{item.cateName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="p-2 flex gap-3 bg-blue-400 hover:bg-blue-600 rounded-md">
                    <label>Origin</label>
                    <select
                      name="Origin"
                      value={formPostProduct.Origin}
                      onChange={handleChangeForm}
                    >
                      {originList.map((item) => (
                        <option value={item.title}>{item.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="p-2 flex gap-3 bg-orange-400 hover:bg-orange-600 rounded-md">
                    <label>Type</label>
                    <select name="Type" onChange={handleChangeForm}>
                      <option value={"Exchange"}>Exchange</option>
                      <option value={"Trade"}>Trade</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <textarea
                value={formPostProduct.Title}
                name="Title"
                onChange={handleChangeForm}
                className="w-[100%] p-2  outline-none text-20"
                placeholder="Write title of your product"
              />
            </div>
            <div className="flex justify-center gap-2 my-3">
              <TextField
                value={formPostProduct.Description}
                name="Description"
                onChange={handleChangeForm}
                variant="outlined"
                fullWidth
                multiline
                label="Description"
                color="secondary"
              />
              <div className="text-black flex items-center gap-2 ">
                <label>Price</label>
                <Tooltip
                  placement="right-start"
                  title={
                    formPostProduct.Type === "Trade"
                      ? "Input price which you want"
                      : "Only trade"
                  }
                >
                  <input
                    value={formPostProduct.Price}
                    name="Price"
                    disabled={formPostProduct.Type === "Trade" ? false : true}
                    className={`bg-slate-200 p-2 rounded-md ${
                      formPostProduct.Type === "Trade"
                        ? `bg-slate-200`
                        : ` cursor-not-allowed`
                    }`}
                    type="number"
                    placeholder="VND"
                  />
                </Tooltip>
              </div>
            </div>
            {previewImage && (
              <div className="flex items-start w-[500px]">
                <div className="flex w-[450px] items-start justify-start outline">
                  <img className="w-[450px] h-[auto]" src={previewImage} />
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
                name="File"
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

            {loadingPostProduct == true && (
              <div className="flex justify-center">
                <Loading />
              </div>
            )}
            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                variant="contained"
                disabled={loadingPostProduct == true ? true : false}
              >
                {loadingPostProduct == true ? "Posting..." : "Post"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProduct;
