import { Grid, Paper } from "@mui/material";
import ManageMember from "../../components/manager/manageMember";
import Navbar from "../../components/navbar/Navbar";

const ManageMemberPage = () => {
  return (
    <Grid>
      <Navbar />
      <Paper
        sx={{
          backgroundColor: "white",
          width: "90%",
          marginLeft: "100px",
          marginTop: "40px",
        }}
      >
        <ManageMember />
      </Paper>
    </Grid>
  );
};

export default ManageMemberPage;
