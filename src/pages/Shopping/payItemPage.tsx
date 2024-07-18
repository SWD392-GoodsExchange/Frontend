import { Grid, Paper } from "@mui/material";

import PayItem from "../../components/Shopping/payItem";
import BackButton from "../back/backButton";

const PayItemPage = () => {
  return (
    <Grid>
      <Box sx={{ paddingTop: "0px", marginLeft: "5px" }}>
        <BackButton />
      </Box>
      <Paper
        sx={{
          backgroundColor: "white",
          marginTop: "60px",
          paddingTop: "55px",
          height: "713px",
        }}
      >
        <BackButton />
        <PayItem />
      </Paper>
    </Grid>
  );
};

export default PayItemPage;
