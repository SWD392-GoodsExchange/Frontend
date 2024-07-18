import React, { useEffect, useState } from "react";
import Avatar from "../../assets/bear.png";
import ATM from "../../assets/—Pngtree—credit card_5933595.png";
import { CiBookmark } from "react-icons/ci";
import { GoReport } from "react-icons/go";
import { LiaExchangeAltSolid } from "react-icons/lia";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import productApi from "../../services/productApi";
import Loading from "../Loading";
import bookMarkApi from "../../services/bookMarkApi";
import { ProductResponse } from "../../interfaces/productResponse";
import { GoBookmarkFill } from "react-icons/go";
import reportApi from "../../services/reportApi";
import { ToastContainer, toast } from "react-toastify";

const ExchangeList = () => {
  const [products, setproducts] = useState<ProductResponse[]>();
  const navigate = useNavigate();
  const [bookmarkedList, setBookmarkedList] = useState<ProductResponse[]>();
  const [openReport, setOpenReport] = React.useState(false);
  const [productIdReport, setProductIdReport] = useState<number>();
  const [messageReport, setMessageReport] = useState<string>();
  const [isSendReport, setIsSendReport] = useState<boolean>(false);
  const handleClickOpenReport = (productId: number) => {
    setOpenReport(true);
    setProductIdReport(productId);
  };

  const handleCloseReport = () => {
    setMessageReport("");
    setIsSendReport(false);
    setOpenReport(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const bookmarkedList: any = await bookMarkApi.getAllBookmark();
      setBookmarkedList(bookmarkedList.data);
      const productsApi: any = await productApi.getExchangeProducts();
      setproducts(productsApi.data.data);
    };
    fetchProducts();
  }, [products, bookmarkedList]);

  const onClickExchange = (
    productId: number,
    productObject: ProductResponse
  ) => {
    navigate(`/exchange-ticket/${productId}`, {
      state: productObject,
    });
  };

  const listProductBookmarked = bookmarkedList?.map((item) => {
    return item.productId;
  });

  const bookMarkProduct = (productId: number) => {
    if (listProductBookmarked?.includes(productId) === true) {
      bookMarkApi
        .deleteBookMark(productId)
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
    }

    bookMarkApi
      .createBookMark({
        ProductId: productId.toString(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeMessageReport = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageReport(e.target.value);
  };

  const sendReport = () => {
    setIsSendReport(true);
    reportApi
      .createReport({
        ProductId: productIdReport,
        Message: messageReport,
      })
      .then((response: any) => {
        if (response.isSuccess == true) {
          setIsSendReport(false);
          setMessageReport("");
          setOpenReport(false);
          console.log("Success");
          toast.success("Report success!", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        console.log("Report error", error);
        setOpenReport(false);
        toast.success("Report fail!", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      {products ? (
        products?.map((item) => (
          <div
            key={item.productId}
            className="px-3 py-3 my-1 flex flex-col items-start gap-2 bg-white w-[100%] rounded-md shadow-2xl"
          >
            <div className="flex gap-3">
              <img src={item.avatar} width={50} height={50} />
              <div className="flex flex-col items-start">
                <h4 className="font-bold">{item.userName}</h4>
                <p className="font-light">
                  {item.createdTime.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="p-2 my-2 bg-yellow-500 text-center items-center rounded-2xl text-white hover:bg-yellow-700 cursor-text">
                <p>{item.categoryName}</p>
              </div>
              <div className="p-2 my-2 bg-blue-500 text-center items-center rounded-2xl text-white hover:bg-blue-700 cursor-text">
                <p>{item.origin}</p>
              </div>
              <div className="p-2 my-2 bg-orange-500 text-center items-center rounded-2xl text-white hover:bg-orange-700 cursor-text">
                <p>{item.type}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold flex justify-start">{item.title}</p>
              <p className="font-light flex justify-start">
                Description: {item.description}
              </p>
            </div>
            <div className="flex flex-col justify-center my-2">
              {item.images.map((image) => (
                <img
                  className="outline outline-1 w-full rounded-lg"
                  src={image.imageUrl}
                  width={"auto"}
                  height="auto"
                />
              ))}
            </div>
            <p className="bg-slate-300 w-[100%] h-[2px]"></p>
            <div className="w-[100%] text-slate-700 flex justify-between">
              <button
                onClick={() => {
                  bookMarkProduct(item.productId);
                }}
                className={`${
                  listProductBookmarked?.includes(item.productId) == true &&
                  `text-white bg-purple-500 font-bold`
                } flex gap-1 items-center transition-all duration-300 bg-purple-300 rounded-lg p-2 cursor-pointer hover:bg-purple-500`}
              >
                {listProductBookmarked?.includes(item.productId) == true ? (
                  <GoBookmarkFill size={"22px"} />
                ) : (
                  <CiBookmark size={"22px"} />
                )}
                Bookmark
              </button>
              <button
                onClick={() => {
                  onClickExchange(item.productId, item);
                }}
                className="flex gap-1 items-center transition-all duration-300 bg-orange-300 rounded-lg p-2 cursor-pointer hover:bg-orange-500  "
              >
                <LiaExchangeAltSolid size={"22px"} />
                Exchange
              </button>
              <button
                onClick={() => {
                  handleClickOpenReport(item.productId);
                }}
                className="flex gap-1 items-center transition-all duration-300 bg-red-300 rounded-lg p-2 cursor-pointer hover:bg-red-500 "
              >
                <GoReport size={"22px"} />
                Report
              </button>
            </div>

            <Dialog open={openReport} onClose={handleCloseReport}>
              <DialogTitle>Report</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Write reason which you want send for GoodsExchange to report
                  this product
                </DialogContentText>
                <textarea
                  value={messageReport}
                  onChange={onChangeMessageReport}
                  style={{ height: "auto", width: "80%", marginTop: 5 }}
                  autoFocus
                  required
                  id="report"
                  name="report"
                  placeholder="Reason report"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseReport}>Cancel</Button>
                {isSendReport === true ? (
                  <div className="p-3">
                    <Loading />
                  </div>
                ) : (
                  <Button
                    disabled={messageReport ? false : true}
                    onClick={sendReport}
                    variant="contained"
                  >
                    Send
                  </Button>
                )}
              </DialogActions>
            </Dialog>
          </div>
        ))
      ) : (
        <div className="flex justify-center mt-20">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ExchangeList;
