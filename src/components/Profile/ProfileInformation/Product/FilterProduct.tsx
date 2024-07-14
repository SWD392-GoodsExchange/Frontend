import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GoFilter } from "react-icons/go";
import { TiDeleteOutline } from "react-icons/ti";
import { CategoryInterface } from "../../../CreateProduct/CreateProduct";
import categoryApi from "../../../../services/categoryApi";

const FilterProduct = () => {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [categories, setCategories] = useState<CategoryInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      const categoryList: any = await categoryApi.getAllCategory();
      setCategories(categoryList.data);
    };
    fetchData();
  }, []);

  const handleClickOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  return (
    <Card>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <p className="font-bold">Product</p>
          <button
            onClick={handleClickOpenFilter}
            className=" flex gap-1 bg-slate-300 p-3 hover:bg-slate-500 hover:text-white rounded-md"
          >
            <GoFilter size={"22px"} />
            Filer
          </button>
        </div>
      </div>
      <Dialog
        open={openFilter}
        onClose={handleCloseFilter}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleCloseFilter();
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="font-bold">Filter Product</p>
          <button
            onClick={handleCloseFilter}
            className="p-1 bg-slate-200 rounded-full hover:bg-slate-400 "
          >
            <TiDeleteOutline size={"30px"} />
          </button>
        </DialogTitle>
        <Divider variant="fullWidth" />
        <DialogContent sx={{ width: "400px" }}>
          <div>
            <p className="font-semibold">
              Use filters to find posts on your timeline.
            </p>
            <p className="font-light">
              People will still see your timeline as usual.
            </p>
            <form className="flex flex-col gap-3 my-3">
              <div className="flex items-center gap-20">
                <label className="w-[50px]">Type:</label>
                <select className="p-2 bg-slate-300 rounded-md outline-orange-500">
                  <option>All</option>
                  <option>Exchange</option>
                  <option>Trade</option>
                </select>
              </div>

              <div className="flex items-center gap-20">
                <label className="w-[50px]">Category:</label>
                <select className="p-2 bg-slate-300 rounded-md outline-orange-500">
                  <option>All</option>
                  {categories?.map((item) => (
                    <option value={item.cateId}>{item.cateName}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2 justify-end mt-5">
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handleCloseFilter}
                >
                  Delete
                </Button>
                <Button type="submit" variant="contained">
                  Done
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default FilterProduct;
