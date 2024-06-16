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
    backgroundColor: "lightblue",
    color: theme.palette.common.black,
    fontWeight: "bold",
    textAlign: "center", // Center align header cells
  },
  [`&.MuiTableCell-body`]: {
    fontSize: 14,
    padding: "8px",
    textAlign: "center", // Center align body cells
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

const ManageMember = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      FeID: "FE1",
      RoleID: 1,
      Username: "Le Quang Dung",
      Password: "12345",
      Dob: "12/01/2021",
      Address: "Dong Nai",
      Gender: "Male",
      Email: "dungngo23@gmail.com",
      Phone: "0798002647",
      CreatedTime: "12/01/2019",
      Status: "Active",
    },
    {
      FeID: "FE2",
      RoleID: 2,
      Username: "Le Quang Luan",
      Password: "12345",
      Dob: "12/01/2021",
      Address: "Dong Nai",
      Gender: "Male",
      Email: "luanle@gmail.com",
      Phone: "0798002647",
      CreatedTime: "12/01/2019",
      Status: "Active",
    },
    {
      FeID: "FE4",
      RoleID: 1,
      Username: "Le Quang Kien",
      Password: "12345",
      Dob: "12/01/2021",
      Address: "Dong Nai",
      Gender: "Male",
      Email: "dungngo23@gmail.com",
      Phone: "0798002647",
      CreatedTime: "12/01/2019",
      Status: "Active",
    },
    {
      FeID: "FE5",
      RoleID: 2,
      Username: "Le Quang Tien",
      Password: "12345",
      Dob: "12/01/2021",
      Address: "Dong Nai",
      Gender: "Male",
      Email: "luanle@gmail.com",
      Phone: "0798002647",
      CreatedTime: "12/01/2019",
      Status: "Active",
    },
    {
      FeID: "FE6",
      RoleID: 3,
      Username: "Nguyen Tien Dung",
      Password: "12345",
      Dob: "01/03/1990",
      Address: "Ho Chi Minh",
      Gender: "Male",
      Email: "nguyenvana@gmail.com",
      Phone: "0987000001",
      CreatedTime: "11/01/2020",
      Status: "Active",
    },
    {
      FeID: "FE7",
      RoleID: 4,
      Username: "Nguyen Tien Luan",
      Password: "12345",
      Dob: "04/05/1985",
      Address: "Ha Noi",
      Gender: "Female",
      Email: "tranthib@gmail.com",
      Phone: "0987000002",
      CreatedTime: "10/01/2020",
      Status: "Active",
    },
    {
      FeID: "FE8",
      RoleID: 2,
      Username: "Pham Huy Kien",
      Password: "12345",
      Dob: "12/12/1988",
      Address: "Da Nang",
      Gender: "Male",
      Email: "phamvanc@gmail.com",
      Phone: "0987000003",
      CreatedTime: "09/01/2020",
      Status: "Inactive",
    },
    {
      FeID: "FE9",
      RoleID: 1,
      Username: "Ngo Tan Tien",
      Password: "12345",
      Dob: "22/07/1992",
      Address: "Hai Phong",
      Gender: "Female",
      Email: "hoangthid@gmail.com",
      Phone: "0987000004",
      CreatedTime: "08/01/2020",
      Status: "Active",
    },
    {
      FeID: "FE10",
      RoleID: 3,
      Username: "Nguyen Hoang Huy",
      Password: "12345",
      Dob: "30/06/1995",
      Address: "Can Tho",
      Gender: "Male",
      Email: "vuvane@gmail.com",
      Phone: "0987000005",
      CreatedTime: "07/01/2020",
      Status: "Inactive",
    },
    {
      FeID: "FE11",
      RoleID: 4,
      Username: "Nguyen Kien Dung",
      Password: "12345",
      Dob: "14/02/1993",
      Address: "Quang Ninh",
      Gender: "Female",
      Email: "lethif@gmail.com",
      Phone: "0987000006",
      CreatedTime: "06/01/2020",
      Status: "Active",
    },
    {
      FeID: "FE12",
      RoleID: 2,
      Username: "Tran Thi Thy",
      Password: "12345",
      Dob: "19/11/1986",
      Address: "Vung Tau",
      Gender: "Male",
      Email: "tranvang@gmail.com",
      Phone: "0987000007",
      CreatedTime: "05/01/2020",
      Status: "Inactive",
    },
    {
      FeID: "FE13",
      RoleID: 1,
      Username: "Nguyen Thi Thy",
      Password: "12345",
      Dob: "25/09/1987",
      Address: "Da Lat",
      Gender: "Female",
      Email: "nguyenthih@gmail.com",
      Phone: "0987000008",
      CreatedTime: "04/01/2020",
      Status: "Active",
    },
    {
      FeID: "FE14",
      RoleID: 3,
      Username: "Pham Van Van",
      Password: "12345",
      Dob: "18/10/1991",
      Address: "Hue",
      Gender: "Male",
      Email: "phamvani@gmail.com",
      Phone: "0987000009",
      CreatedTime: "03/01/2020",
      Status: "Inactive",
    },
    {
      FeID: "FE15",
      RoleID: 4,
      Username: "Pham Thi Thy",
      Password: "12345",
      Dob: "11/08/1994",
      Address: "Binh Dinh",
      Gender: "Female",
      Email: "tranthij@gmail.com",
      Phone: "0987000010",
      CreatedTime: "02/01/2020",
      Status: "Active",
    },
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

  const handleAddMember = () => {};

  const handleExportData = () => {};

  // Filter members based on search keyword and status
  const filteredMembers = members.filter((member) => {
    const keyword = searchKeyword.toLowerCase();
    const usernameLower = member.Username.toLowerCase();
    const emailLower = member.Email.toLowerCase();
    const phone = member.Phone;

    return (
      (usernameLower.includes(keyword) ||
        emailLower.includes(keyword) ||
        phone.includes(searchKeyword)) &&
      (filterStatus === "" || member.Status === filterStatus)
    );
  });

  const displayedMembers = filteredMembers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 2 }}>
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
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ marginRight: 2 }}
            onClick={handleAddMember}
          >
            New member
          </Button>
          <Button variant="contained" onClick={handleExportData}>
            Export Data
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index</StyledTableCell>
              <StyledTableCell>Member ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Date of Birth</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Created Time</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
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
                <StyledTableCell>{member.Username}</StyledTableCell>
                <StyledTableCell>{member.Gender}</StyledTableCell>
                <StyledTableCell>{member.Dob}</StyledTableCell>
                <StyledTableCell>{member.Address}</StyledTableCell>
                <StyledTableCell>{member.Email}</StyledTableCell>
                <StyledTableCell>{member.Phone}</StyledTableCell>
                <StyledTableCell>{member.CreatedTime}</StyledTableCell>
                <StyledTableCell>{member.Status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
