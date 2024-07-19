import {
  Box,
  Button,
  Grid,
  Paper,
  SelectChangeEvent,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReportResponse } from "../../interfaces/report";
import productApi from "../../services/productApi";
import reportApi from "../../services/reportApi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.MuiTableCell-head`]: {
    backgroundColor: "lightblue",
    color: theme.palette.common.black,
    fontWeight: "bold",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  [`&.MuiTableCell-body`]: {
    fontSize: 14,
    padding: "8px",
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ReportApproved = () => {
  const navigate = useNavigate();
  const [report, setReport] = useState<ReportResponse[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [activeButton, setActiveButton] = React.useState<string | null>(null);
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const fetchReportList = async () => {
    const response = (await reportApi.getApprovedReport()).data.data;
    console.log("report:", response);
    setReport(response);
  };

  useEffect(() => {
    fetchReportList();
  }, []);

  const handleProductView = async (productId: number) => {
    try {
      const response = (await productApi.getProductByPId(productId)).data;
      console.log("product:", response.data);
      // handle the product data as needed

      handleView(productId);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleView = (productId: number) => {
    navigate(`/manager/productView/${productId}`, {
      state: productId,
    });
  };

  const handleApprove = async (reportId: number) => {
    console.log("reportId:", reportId);
    const response: any = (await reportApi.approveReport(reportId)).data;
    console.log("response:", response);
  };

  const handleReject = (reportId: number) => {
    console.log("reportIdReject:", reportId);
    reportApi.rejectReport(reportId).then((response) => {
      console.log("reportReject:", response);
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilterStatus(event.target.value);
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredReports = report.filter((report) => {
    const keyword = searchKeyword.toLowerCase();
    const productId = report.productId.toString();
    const message = report.message.toLowerCase();
    const feId = report.feId.toString();

    return (
      productId.includes(keyword) ||
      message.includes(keyword) ||
      feId.includes(searchKeyword)
    );
  });

  const displayedReports = filteredReports.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Grid sx={{ padding: "20px" }}>
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <TextField
            label="🔎 Search by FeId, Time, or Message"
            variant="outlined"
            size="small"
            onChange={handleSearchChange}
            value={searchKeyword}
            sx={{ marginRight: 2, width: "300px" }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "lightblue",
            borderRadius: "40px",
            marginRight: "15px",
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/admin/report/approved"
            sx={{
              fontWeight: "bold",
              color: activeButton === "approved" ? "grey" : "black",
              width: "110px",
              "&:hover": {
                color: activeButton === "rejected" ? "black" : "grey",
              },
            }}
            onClick={() => handleButtonClick("approved")}
          >
            Approved
          </Button>
          |
          <Button
            color="inherit"
            component={Link}
            to="/admin/report/rejected"
            sx={{
              fontWeight: "bold",
              color: activeButton === "approved" ? "grey" : "black",
              width: "110px",
              "&:hover": {
                color: activeButton === "rejected" ? "black" : "grey",
              },
            }}
            onClick={() => handleButtonClick("rejected")}
          >
            Rejected
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index</StyledTableCell>
              <StyledTableCell>Fe ID</StyledTableCell>
              <StyledTableCell>Message</StyledTableCell>
              <StyledTableCell>Created Time</StyledTableCell>
              <StyledTableCell>Updated Time</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedReports.map((report, index) => (
              <StyledTableRow key={report?.reportId}>
                <StyledTableCell>{report?.reportId}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {report.feId}
                </StyledTableCell>
                <StyledTableCell>{report.message}</StyledTableCell>

                <StyledTableCell>
                  {new Date(report.createdTime).toLocaleDateString()}
                </StyledTableCell>

                <StyledTableCell>
                  {new Date(report.updatedTime).toLocaleDateString()}
                </StyledTableCell>

                <StyledTableCell sx={{ width: "50px" }}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleProductView(report.productId)}
                      sx={{ backgroundColor: "ButtonFace", color: "black" }}
                    >
                      View
                    </Button>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredReports.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Grid>
  );
};

export default ReportApproved;
