import { Box, Container, Paper, Typography } from "@mui/material";

const Bill = () => {
  return (
    <Container>
      <Paper>
        <Box sx={{ background: "#EAEAEA" }}>
          <Typography>Order Bill</Typography>
          <Box>
            <Typography></Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Bill;
