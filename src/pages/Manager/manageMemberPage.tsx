import { Grid, Paper } from "@mui/material";
import ManageMember from "../../components/manager/manageMember";

const ManageMemberPage = () => {
  return (
    <Grid>
      {/* <Navbar /> */}
      <Paper
        sx={{
          backgroundColor: "white",
          width: "90%",
          marginLeft: "40px",
          marginTop: "150px",
        }}
      >
        <ManageMember />
      </Paper>
    </Grid>
  );
};

export default ManageMemberPage;
