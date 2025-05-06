import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

const AmortizationTable = () => {
  const { amortizationData, currency } = useContext(AppContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Amortization Schedule
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Payment ({currency})</TableCell>
              <TableCell align="right">Principal ({currency})</TableCell>
              <TableCell align="right">Interest ({currency})</TableCell>
              <TableCell align="right">Balance ({currency})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {amortizationData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell align="right">{row.payment}</TableCell>
                  <TableCell align="right">{row.principal}</TableCell>
                  <TableCell align="right">{row.interest}</TableCell>
                  <TableCell align="right">{row.balance}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={amortizationData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AmortizationTable;
