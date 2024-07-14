import { Grid, Paper } from "@mui/material";

import ManageOrder from "../../components/Shopping/manageOrder";

const ManageOrderPage = () => {
  return (
    <Grid>
      <Paper
        sx={{
          backgroundColor: "white",
          marginTop: "100px",
          paddingTop: "15px",
          height: "800px",
        }}
      >
        <ManageOrder />
      </Paper>
    </Grid>
  );
};

export default ManageOrderPage;
