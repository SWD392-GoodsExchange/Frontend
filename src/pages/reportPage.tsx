import { Box, Grid, Paper } from "@mui/material";
import Report from "../components/manager/report";
import BackButton from "./back/backButton";

const ReportPage = () => {
  return (
    <Grid>
      <Box sx={{ marginLeft: "5px" }}>
        <BackButton />
      </Box>
      <Paper
        sx={{
          backgroundColor: "white",
          marginTop: "40px",
          paddingTop: "105px",
          height: "735px",
          paddingLeft: "100px",
        }}
      >
        {/* <Navbar /> */}
        <Report />
      </Paper>
    </Grid>
  );
};

export default ReportPage;
