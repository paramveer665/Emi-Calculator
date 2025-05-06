import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Alert,
  Box,
  Snackbar,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const CurrencyConverter = () => {
  const { emi, currency, exchangeRates, exchangeError, refreshRates } =
    useContext(AppContext);

  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [apiLimitReached, setApiLimitReached] = useState(false);
  const [lastRefreshTime, setLastRefreshTime] = useState(null);
  const refreshIntervalRef = useRef(null);

  const MIN_REFRESH_INTERVAL = 30000;

  const convertEMI = (target) => {
    if (!emi || !exchangeRates || !exchangeRates[target]) {
      setConvertedAmount(0);
      return;
    }
    const rate = exchangeRates[target];
    setConvertedAmount((emi * rate).toFixed(2));
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const handleRefresh = async () => {
    const now = Date.now();

    if (lastRefreshTime && now - lastRefreshTime < MIN_REFRESH_INTERVAL) {
      setApiLimitReached(true);
      return;
    }

    setIsLoading(true);
    try {
      await refreshRates();
      setLastRefreshTime(now);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    convertEMI(targetCurrency);
  }, [emi, exchangeRates, targetCurrency]);

  useEffect(() => {
    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, []);

  if (exchangeError) {
    return (
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Failed to load exchange rates: {exchangeError}
        </Alert>
        <Button
          variant="contained"
          onClick={handleRefresh}
          startIcon={<RefreshIcon />}
          disabled={isLoading}
        >
          Retry
        </Button>
      </Paper>
    );
  }

  if (!exchangeRates) {
    return (
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size={24} sx={{ mr: 2 }} />
          <Typography>Loading exchange rates...</Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Currency Converter
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              label="EMI Amount"
              value={emi || 0}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <Typography sx={{ mr: 1 }}>{currency}</Typography>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography align="center">→</Typography>
          </Grid>

          <Grid item xs={12} sm={5}>
            <FormControl fullWidth>
              <InputLabel>Convert to</InputLabel>
              <Select
                value={targetCurrency}
                label="Convert to"
                onChange={handleTargetCurrencyChange}
                disabled={!exchangeRates}
              >
                {Object.keys(exchangeRates).map((curr) => (
                  <MenuItem key={curr} value={curr}>
                    {curr}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                my: 2,
              }}
            >
              {convertedAmount} {targetCurrency}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={handleRefresh}
              startIcon={
                isLoading ? <CircularProgress size={20} /> : <RefreshIcon />
              }
              disabled={isLoading}
              fullWidth
            >
              {isLoading ? "Refreshing..." : "Refresh Rates"}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={apiLimitReached}
        autoHideDuration={5000}
        onClose={() => setApiLimitReached(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="warning" onClose={() => setApiLimitReached(false)}>
          Please wait 30 seconds between rate refreshes to avoid exceeding API
          limits.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CurrencyConverter;
