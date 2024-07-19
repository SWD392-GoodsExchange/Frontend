import { Grid } from "@mui/material";
import AdminDashboard from "../../components/Admin/AdminDashboard";
import AdminNav from "../../components/Admin/AdminNav";
import Report from "../../components/manager/report";
import ReportApproved from "../../components/manager/reportApproved";
import ReportRejected from "../../components/manager/reportRejected";
import ManageMemberPage from "./manageMemberPage";

type Props = {};

const RejectReportPage = (props: Props) => {
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
          {location.pathname === "/admin/report/approved" && <ReportApproved />}
          {location.pathname === "/admin/report/rejected" && <ReportRejected />}
        </Grid>
      </Grid>
    </div>
  );
};

export default RejectReportPage;
