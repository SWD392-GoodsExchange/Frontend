import { Grid } from "@mui/material";
import { MultiChatWindow } from "react-chat-engine-advanced";

type Props = {};

const ChatRoomPage = (props: Props) => {
  return (
    <Grid>
      <MultiChatWindow />
    </Grid>
  );
};

export default ChatRoomPage;
