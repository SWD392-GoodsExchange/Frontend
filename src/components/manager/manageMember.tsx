import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { useEffect, useState } from "react";
import { Member } from "../../interfaces/memberResponse";
import memberApi from "../../services/memberApi";

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

const ManageMember = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [editMember, setEditMember] = useState<Member | null>(null);
  const [newMember, setNewMember] = useState<Member | null>(null);

  const fetchMember = async () => {
    const response = (await memberApi.getAllMember()).data.data;
    console.log("member", response);
    setMembers(response);
  };

  useEffect(() => {
    fetchMember();
  }, []);

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
    setNewMember({
      feId: "",
      userName: "",
      address: "",
      gender: "",
      email: "",
      phone: "",
      dob: new Date(),
    });
  };

  const handleExportData = () => {
    // Logic to export data
  };

  const handleEditMember = (member: Member) => {
    setEditMember(member);
  };

  const handleSaveMember = () => {
    if (editMember) {
      setMembers((prevMembers) =>
        prevMembers.map((m) => (m.feId === editMember.feId ? editMember : m))
      );
      setEditMember(null);
    } else if (newMember) {
      setMembers((prevMembers) => [
        ...prevMembers,
        {
          ...newMember,
          FeID: `FE${prevMembers.length + 1}`,
          CreatedTime: new Date().toISOString(),
        },
      ]);
      setNewMember(null);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (editMember) {
      setEditMember((prevMember) =>
        prevMember ? { ...prevMember, [name]: value } : null
      );
    } else if (newMember) {
      setNewMember((prevMember) =>
        prevMember ? { ...prevMember, [name]: value } : null
      );
    }
  };

  const handleCloseDialog = () => {
    setEditMember(null);
    setNewMember(null);
  };

  const handleDeleteMember = (memberId: string) => {
    setMembers((prevMembers) => prevMembers.filter((m) => m.feId !== memberId));
  };

  const filteredMembers = members.filter((member) => {
    const keyword = searchKeyword.toLowerCase();
    const usernameLower = member.userName.toLowerCase();
    const emailLower = member.email.toLowerCase();
    const phone = member.phone;

    return (
      usernameLower.includes(keyword) ||
      emailLower.includes(keyword) ||
      phone.includes(searchKeyword)
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
            label="🔎 Search by Username, Email, or Phone"
            variant="outlined"
            size="small"
            onChange={handleSearchChange}
            value={searchKeyword}
            sx={{ marginRight: 2, width: "300px" }}
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
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedMembers.map((member, index) => (
              <StyledTableRow key={member.feId}>
                <StyledTableCell>
                  {page * rowsPerPage + index + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {member.feId}
                </StyledTableCell>
                <StyledTableCell>{member.userName}</StyledTableCell>
                <StyledTableCell>{member.gender}</StyledTableCell>
                <StyledTableCell>
                  {new Date(member.dob).toLocaleDateString()}
                </StyledTableCell>
                <StyledTableCell>{member.address}</StyledTableCell>
                <StyledTableCell>{member.email}</StyledTableCell>
                <StyledTableCell>{member.phone}</StyledTableCell>

                <StyledTableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleEditMember(member)}
                    sx={{
                      marginRight: 1,
                      backgroundColor: "lightgrey",
                      color: "black",
                      opacity: "90%",
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleDeleteMember(member.feId)}
                    sx={{ backgroundColor: "ButtonShadow", color: "black" }}
                  >
                    Delete
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
        count={filteredMembers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {editMember && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>Edit Member</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update the details of the member.
            </DialogContentText>
            <TextField
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              name="Username"
              value={editMember.userName}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Gender"
              type="text"
              fullWidth
              name="Gender"
              value={editMember.gender}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Date of Birth"
              type="text"
              fullWidth
              name="Dob"
              value={editMember.dob}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Address"
              type="text"
              fullWidth
              name="Address"
              value={editMember.address}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              name="Email"
              value={editMember.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Phone"
              type="text"
              fullWidth
              name="Phone"
              value={editMember.phone}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveMember} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {newMember && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>New Member</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the details of the new member.
            </DialogContentText>
            <TextField
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              name="Username"
              value={newMember.userName}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Gender"
              type="text"
              fullWidth
              name="Gender"
              value={newMember.gender}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Date of Birth"
              type="text"
              fullWidth
              name="Dob"
              value={newMember.dob}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Address"
              type="text"
              fullWidth
              name="Address"
              value={newMember.address}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              name="Email"
              value={newMember.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Phone"
              type="text"
              fullWidth
              name="Phone"
              value={newMember.phone}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveMember} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ManageMember;
