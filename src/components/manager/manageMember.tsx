import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Member } from "../../interfaces/memberResponse";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.MuiTableCell-head`]: {
    backgroundColor: "lightblue", // Đổi màu cam tại đây
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  [`&.MuiTableCell-body`]: {
    fontSize: 14,
    padding: "8px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageMember = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      FeID: "FE4",
      RoleID: 1,
      Username: "Le Quang Dung",
      Password: "12345",
      Dob: "12/01/2021",
      Address: "Dong Nai",
      Gender: "Male",
      Email: "dungngo23@gmail.com",
      Phone: "0798002647",
      CreatedTime: "12/01/2019",
      Status: "Processing",
    },
    {
      FeID: "FE5",
      RoleID: 2,
      Username: "Le Quang Luan",
      Password: "12345",
      Dob: "12/01/2021",
      Address: "Dong Nai",
      Gender: "Male",
      Email: "luanle@gmail.com",
      Phone: "0798002647",
      CreatedTime: "12/01/2019",
      Status: "Processing",
    },
    // Add more members as needed
  ]);

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

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

  const handleAddMember = () => {
    // Logic to add a new member
  };

  const handleExportData = () => {
    // Logic to export data
  };

  // Filter members based on search keyword and status
  const filteredMembers = members.filter((member) => {
    const keyword = searchKeyword.toLowerCase();
    const usernameLower = member.Username.toLowerCase();
    const emailLower = member.Email.toLowerCase();
    const phone = member.Phone;

    // Check if member matches search keyword and status filter
    return (
      (usernameLower.includes(keyword) ||
        emailLower.includes(keyword) ||
        phone.includes(searchKeyword)) &&
      (filterStatus === "" || member.Status === filterStatus)
    );
  });

  // Get the members to display on the current page
  const displayedMembers = filteredMembers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 2 }}>
      {/* Controls */}
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <TextField
            label="Search by Username, Email, or Phone"
            variant="outlined"
            size="small"
            onChange={handleSearchChange}
            value={searchKeyword}
            sx={{ marginRight: 2 }}
          />
          <FormControl variant="outlined" size="small">
            <InputLabel>Status</InputLabel>
            <Select
              value={filterStatus}
              onChange={handleFilterChange}
              label="Status"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
            onClick={handleAddMember}
          >
            Thêm thành viên mới
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleExportData}
          >
            Xuất dữ liệu
          </Button>
        </Box>
      </Box>

      {/* Table of Members */}
      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#FFA500" }}>
              <StyledTableCell>Index</StyledTableCell>
              <StyledTableCell>Member ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Gender</StyledTableCell>
              <StyledTableCell align="left">Date of Birth</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Created Time</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedMembers.map((member, index) => (
              <StyledTableRow key={member.FeID}>
                <StyledTableCell>
                  {page * rowsPerPage + index + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {member.FeID}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {member.Username}
                </StyledTableCell>
                <StyledTableCell align="left">{member.Gender}</StyledTableCell>
                <StyledTableCell align="left">{member.Dob}</StyledTableCell>
                <StyledTableCell align="left">{member.Address}</StyledTableCell>
                <StyledTableCell align="left">{member.Email}</StyledTableCell>
                <StyledTableCell align="left">{member.Phone}</StyledTableCell>
                <StyledTableCell align="left">
                  {member.CreatedTime}
                </StyledTableCell>
                <StyledTableCell align="left">{member.Status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredMembers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default ManageMember;
