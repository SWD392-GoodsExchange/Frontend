import { Grid } from "@mui/material";
import "./App.css";
import ManageMemberPage from "./pages/manageMemberPage";

function App() {
  return (
    <Grid sx={{ width: "1300px" }}>
      <ManageMemberPage />;
    </Grid>
  );
}

export default App;
