import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MyAvat from "../../assets/bear.png";
import { TiDelete } from "react-icons/ti";
import { GiClothes, GiShorts } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { PiGuitarLight, PiShirtFolded, PiToolboxLight } from "react-icons/pi";
import { MdOutlinePets } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgGames } from "react-icons/cg";
import JapanFlag from "../../assets/japan.png";
import VietNamFlag from "../../assets/vietnam.png";
import UsaFlag from "../../assets/united-states.png";
import ChinaFlag from "../../assets/china.png";
import ThaiLanFlag from "../../assets/thailand.png";

const categoryList = [
  {
    icon: <GiClothes size={"25px"} />,
    title: "Fashion",
  },
  {
    icon: <RiComputerLine size={"25px"} />,
    title: "Laptop",
  },
  {
    icon: <FaMobileAlt size={"25px"} />,
    title: "Mobile",
  },
  {
    icon: <PiShirtFolded size={"25px"} />,
    title: "T-Shirt",
  },
  {
    icon: <MdOutlinePets size={"25px"} />,
    title: "Pet",
  },
  {
    icon: <IoFastFoodOutline size={"25px"} />,
    title: "Food",
  },
  {
    icon: <GiShorts size={"25px"} />,
    title: "Short",
  },
  {
    icon: <CgGames size={"25px"} />,
    title: "Game",
  },
  {
    icon: <PiGuitarLight size={"25px"} />,
    title: "Music",
  },
  {
    icon: <PiToolboxLight size={"25px"} />,
    title: "Work",
  },
];

const originList = [
  {
    icon: <img src={JapanFlag} alt="Japan" />,
    title: "Japan",
  },
  {
    icon: <img src={VietNamFlag} alt="VietNam" />,
    title: "VietNam",
  },
  {
    icon: <img src={UsaFlag} alt="USA" />,
    title: "USA",
  },
  {
    icon: <img src={ChinaFlag} alt="China" />,
    title: "China",
  },
  {
    icon: <img src={ThaiLanFlag} alt="Thailand" />,
    title: "Thailand",
  },
];

const CreateProduct = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const onClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className="flex justify-start mx-[250px] text-20 text-black mt-[50px]">
      <Card>
        <div className="flex p-3 items-center">
          <img src={MyAvat} className="w-[50px] h-[50px]" />
          <button
            onClick={onClickOpenDialog}
            className="flex text-16 p-3 ml-3 rounded-full bg-slate-200 hover:bg-slate-300"
          >
            Post your product
          </button>
        </div>
      </Card>
      <Dialog
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
        <DialogTitle className="w-[500px] flex justify-end">
          <div className="flex justify-between gap-[110px] items-center">
            <p>Post Product</p>
            <IconButton>
              <TiDelete onClick={handleCloseDialog} size={"30px"} />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider variant="fullWidth" />
        <DialogContent className="flex overflow-x-hidden overflow-y-auto">
          <div className="flex items-center">
            <img src={MyAvat} className="w-[50px] h-[50px]" />
            <div className="flex flex-col justify-center ">
              <p className="font-bold mx-2 text-20">Mong Luan Vo</p>
              <div className="flex gap-5 items-center mx-2">
                <div className="p-2 flex gap-3 bg-yellow-400 hover:bg-yellow-600 rounded-md">
                  <label>Category </label>
                  <select>
                    {categoryList.map((item) => (
                      <option>
                        {item.icon} {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="p-2 flex gap-3 bg-blue-400 hover:bg-blue-600 rounded-md">
                  <label>Origin</label>
                  <select>
                    {originList.map((item) => (
                      <option>
                        {item.icon} {item.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProduct;
