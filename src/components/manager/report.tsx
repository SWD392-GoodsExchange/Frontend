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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Report = () => {
  const navigate = useNavigate();
  const [report, setReport] = useState<ReportResponse[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const fetchReportList = async () => {
    const response = (await reportApi.getAllReport()).data.data;
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
            label="🔎 Search by Username, Email, or Phone"
            variant="outlined"
            size="small"
            onChange={handleSearchChange}
            value={searchKeyword}
            sx={{ marginRight: 2, width: "300px" }}
          />
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
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleProductView(report.productId)}
                    sx={{ backgroundColor: "ButtonFace", color: "black" }}
                  >
                    View
                  </Button>
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

export default Report;
