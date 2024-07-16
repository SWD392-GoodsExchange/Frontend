import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";
import { RiNotification4Line } from "react-icons/ri";
import OtherAvatar from "../../assets/bear.png";
import * as signalR from "@microsoft/signalr";
import { NotificationDto } from "../../services/signalR/signalRServices";

const MyNotificatons = () => {
  const [notifications, setNotifications] = React.useState<NotificationDto[]>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  React.useEffect(() => {
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

        connection.on("NotificationOfUser", (notifications) => {
          console.log("NotificationOfUser:", notifications);
          setNotifications(notifications);
        });
      })
      .catch((error: any) => console.log(`SignalR error: ${error}`));
  }, [localStorage.getItem("jwtToken")]);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const subNotifications = notifications?.slice(0, 5);
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
          <Badge badgeContent={notifications?.length} color="primary">
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
          disableScrollLock={true}
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
          {subNotifications ? (
            subNotifications.map((item) => (
              <MenuItem
                key={item.notificationId}
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
                  <p className="font-bold">
                    {item.senderUsername}{" "}
                    <span className="font-light italic">{item.senderId}</span>
                  </p>
                  <p>{item.content}</p>
                </div>
              </MenuItem>
            ))
          ) : (
            <div>No Notifications</div>
          )}
        </Menu>
      </div>
    </>
  );
};

export default MyNotificatons;
