import { Grid } from "@mui/material";
import React from "react";
import AdminDashboard from "../../components/Admin/AdminDashboard";
import AdminNav from "../../components/Admin/AdminNav";
import { useLocation } from "react-router-dom";

type Props = {};

const AdminPage = (props: Props) => {
  const location = useLocation();
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
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
