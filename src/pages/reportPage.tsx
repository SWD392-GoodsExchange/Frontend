import { Box, Grid, Paper } from "@mui/material";
import Report from "../components/manager/report";
import BackButton from "./back/backButton";
import AdminNav from "../components/Admin/AdminNav";
import AdminDashboard from "../components/Admin/AdminDashboard";
import ManageMemberPage from "./Manager/manageMemberPage";

const ReportPage = () => {
  return (
    <div className="mt-[100px] text-black bg-[#cd5b3c] h-auto px-[50px] py-[70px]">
      <Grid
        className="rounded-3xl "
        container
        xs={12}
        sx={{ backgroundColor: "white" }}
      >
        <Grid item xs={3}>
          <AdminNav />
        </Grid>
        <Grid item xs={9}>
          {location.pathname === "/admin" && <AdminDashboard />}
          {location.pathname === "/admin/report" && <Report />}
          {location.pathname === "/admin/manageMember" && <ManageMemberPage />}
        </Grid>
      </Grid>
    </div>
  );
};

export default ReportPage;
