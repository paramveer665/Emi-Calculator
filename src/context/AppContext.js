import React, { createContext, useState, useEffect, useMemo } from "react";
import useExchangeRates from "../hooks/useExchangeRates";
import { createTheme } from "@mui/material/styles";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  useEffect(() => {
    refreshRates();
  }, []);
  const [darkMode, setDarkMode] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [amortizationData, setAmortizationData] = useState([]);
  const [, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#9c27b0",
          },
        },
      }),
    [darkMode]
  );

  const {
    rates: exchangeRates,
    loading: exchangeLoading,
    error: exchangeError,
    fetchRates: refreshRates,
  } = useExchangeRates(currency);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        currency,
        setCurrency,
        principal,
        setPrincipal,
        interestRate,
        setInterestRate,
        loanTerm,
        setLoanTerm,
        emi,
        setEmi,
        amortizationData,
        setAmortizationData,
        exchangeRates,
        setExchangeRates,
        loading,
        setLoading,
        error,
        setError,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
