import React, { useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Box,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { AppContext } from "../context/AppContext";

const ExchangeRateTable = () => {
  const { exchangeRates, currency: baseCurrency } = useContext(AppContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!exchangeRates) {
    return (
      <Box display="flex" justifyContent="center" p={3}>
        <CircularProgress />
      </Box>
    );
  }

  // Filter out the base currency and convert to array
  const ratesArray = Object.entries(exchangeRates)
    .filter(([currency]) => currency !== baseCurrency)
    .map(([currency, rate]) => ({ currency, rate }));

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Exchange Rates (Base: {baseCurrency})
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">1 {baseCurrency} =</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ratesArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ currency, rate }) => (
                <TableRow key={currency}>
                  <TableCell>
                    <Avatar
                      src={`https://flagcdn.com/24x18/${getCountryCode(
                        currency
                      ).toLowerCase()}.png`}
                      sx={{ width: 24, height: 18 }}
                      variant="square"
                    />
                  </TableCell>
                  <TableCell>{currency}</TableCell>
                  <TableCell align="right">{rate.toFixed(6)}</TableCell>
                  <TableCell align="right">
                    1 {baseCurrency} = {rate.toFixed(6)} {currency}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={ratesArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

// Helper function to map currency codes to country codes
const getCountryCode = (currency) => {
  const currencyToCountry = {
    USD: "US",
    EUR: "EU",
    GBP: "GB",
    JPY: "JP",
    AUD: "AU",
    CAD: "CA",
    CHF: "CH",
    CNY: "CN",
    INR: "IN",
    BRL: "BR",
    SEK: "SE",
    NZD: "NZ",
    // Add more mappings as needed
  };
  return currencyToCountry[currency] || "UN";
};

export default ExchangeRateTable;
