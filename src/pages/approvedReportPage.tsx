import { Grid } from "@mui/material";
import AdminNav from "../components/Admin/AdminNav";

type Props = {};

const ApprovedReportPage = (props: Props) => {
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
      </Grid>
    </div>
  );
};

export default ApprovedReportPage;
