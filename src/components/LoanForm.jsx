import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useEMICalculator } from "../hooks/useEMICalculator";
import {
  TextField,
  Slider,
  Typography,
  Grid,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const LoanForm = () => {
  const {
    principal,
    setPrincipal,
    interestRate,
    setInterestRate,
    loanTerm,
    setLoanTerm,
    currency,
    setCurrency,
  } = useContext(AppContext);

  const { calculateEMI } = useEMICalculator();

  useEffect(() => {
    calculateEMI();
  }, [principal, interestRate, loanTerm]);

  const handlePrincipalChange = (e) => {
    setPrincipal(parseFloat(e.target.value));
  };

  const handleInterestChange = (e, newValue) => {
    setInterestRate(newValue);
  };

  const handleTermChange = (e, newValue) => {
    setLoanTerm(newValue);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Loan Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="currency-label">Currency</InputLabel>
            <Select
              labelId="currency-label"
              value={currency}
              label="Currency"
              onChange={handleCurrencyChange}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Loan Amount"
            type="number"
            value={principal}
            onChange={handlePrincipalChange}
            InputProps={{
              startAdornment: (
                <Typography sx={{ mr: 1 }}>{currency}</Typography>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>Interest Rate: {interestRate}%</Typography>
          <Slider
            value={interestRate}
            onChange={handleInterestChange}
            min={1}
            max={30}
            step={0.1}
            valueLabelDisplay="auto"
            aria-labelledby="interest-rate-slider"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>Loan Term: {loanTerm} years</Typography>
          <Slider
            value={loanTerm}
            onChange={handleTermChange}
            min={1}
            max={30}
            step={1}
            valueLabelDisplay="auto"
            aria-labelledby="loan-term-slider"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoanForm;
