import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdFilterList } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
const BookmarkFilter = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold text-20"> All</p>
        <button
          className={`py-2 px-3 transition-all  bg-slate-300  ${
            anchorEl ? `bg-white text-orange-500 rounded-full` : ``
          }`}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MdFilterList
            className="hover:text-orange-300 cursor-pointer"
            size={"25px"}
          />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 85,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <MenuItem onClick={handleClose} className="flex items-center">
            <p>All</p>
            <IoMdCheckmark color="#0D6EFD" className="ml-[500px]" />
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              width: "420px",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <p>Exchange</p>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              width: "420px",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <p>Trade</p>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default BookmarkFilter;
