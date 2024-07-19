import { Grid, Paper } from "@mui/material";
import ManageMember from "../../components/manager/manageMember";
import AdminDashboard from "../../components/Admin/AdminDashboard";
import AdminNav from "../../components/Admin/AdminNav";
import Report from "../../components/manager/report";

const ManageMemberPage = () => {
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
          {location.pathname === "/admin/manageMember" && <ManageMember />}
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageMemberPage;
