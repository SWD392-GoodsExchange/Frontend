import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Comments from "./Comments";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import MyAvat from "../../assets/bear.png";

type Props = {
  open: boolean;
  scroll: DialogProps["scroll"];
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Comment = ({ open, scroll, setOpen }: Props) => {
  const [postComent, setPostComment] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const onChangePostComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostComment(e.target.value);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <React.Fragment>
      <Dialog
        open={open}
        // onClose={handleClose}
        scroll={scroll}
        className="font-sora"
      >
        <DialogTitle
          id="scroll-dialog-title"
          className="flex justify-between items-center font-bold "
        >
          Nguyen Dinh Hoang Huy post's comment
          <TiDeleteOutline
            onClick={handleClose}
            size={"35px"}
            className="text-slate-500 hover:text-slate-700"
          />
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Comments />
            <Comments />
          </DialogContentText>
        </DialogContent>
        <DialogActions className="flex gap-1">
          <div>
            <img src={MyAvat} width={50} height={50} />
          </div>

          <input
            className="w-[78%] bg-slate-300 rounded-md border-slate-300 border-none p-5"
            placeholder="Write Comment"
            onChange={onChangePostComment}
          />
          <IconButton disabled={postComent ? false : true}>
            <SendRoundedIcon color={postComent ? "info" : "disabled"} />
          </IconButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Comment;
