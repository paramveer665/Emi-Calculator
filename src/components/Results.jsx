import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Paper, Typography, Grid, Box } from "@mui/material";

const Results = () => {
  const { emi, currency } = useContext(AppContext);

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        EMI Results
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="subtitle2">Monthly Payment</Typography>
            <Typography variant="h5">
              {currency} {emi}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="subtitle2">Total Payment</Typography>
            <Typography variant="h5">
              {currency} {(emi * 12).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="subtitle2">Total Interest</Typography>
            <Typography variant="h5">
              {currency} {(emi * 12 - 10000).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Results;
