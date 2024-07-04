import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";
import { RiNotification4Line } from "react-icons/ri";
import OtherAvatar from "../../assets/bear.png";

const MyNotificatons = () => {
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
      <div>
        <button
          className={`p-1 transition-all duration-300 ${
            anchorEl ? `bg-white text-orange-500 rounded-full` : ``
          }`}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Badge badgeContent={8} color="primary">
            <RiNotification4Line
              className="hover:text-orange-300 cursor-pointer"
              size={"30px"}
            />
          </Badge>
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
                left: 14,
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
          <MenuItem
            onClick={handleClose}
            sx={{
              width: "420px",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <img src={OtherAvatar} width={50} height={50} />
            <div>
              <p className="font-bold">Le Trung Kien</p>
              <p>sent exchange request</p>
            </div>
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
            <img src={OtherAvatar} width={50} height={50} />
            <div>
              <p className="font-bold">Le Trung Kien</p>
              <p>sent exchange request</p>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default MyNotificatons;
