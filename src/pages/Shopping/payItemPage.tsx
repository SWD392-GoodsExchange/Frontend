import { Box, Grid, Paper } from "@mui/material";

import PayItem from "../../components/Shopping/payItem";
import BackButton from "../back/backButton";

const PayItemPage = () => {
  return (
    <Grid>
      <Box sx={{ paddingTop: "100px", marginLeft: "5px" }}>
        <BackButton />
      </Box>
      <Paper
        sx={{
          backgroundColor: "white",
          marginTop: "100px",
          paddingTop: "15px",
          height: "800px",
        }}
      >
        {/* <Navbar /> */}
        <PayItem />
      </Paper>
    </Grid>
  );
};

export default PayItemPage;
