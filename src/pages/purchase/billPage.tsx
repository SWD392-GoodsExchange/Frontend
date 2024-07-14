import { Box, Grid, Paper } from "@mui/material";
import Bill from "../../components/purchase/Bill";
import BackButton from "../back/backButton";

const BillPage = () => {
  return (
    <Grid>
      <Box sx={{ paddingTop: "100px", marginLeft: "5px" }}>
        <BackButton />
      </Box>
      <Paper
        sx={{
          backgroundColor: "white",
          width: "70%",
          marginLeft: "230px",
          height: "500px",
          marginTop: "20px",
        }}
      >
        <Bill />
      </Paper>
    </Grid>
  );
};

export default BillPage;
