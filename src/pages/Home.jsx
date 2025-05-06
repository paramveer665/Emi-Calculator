import React from "react";
import Header from "../components/Header";
import LoanForm from "../components/LoanForm";
import Results from "../components/Results";
import AmortizationTable from "../components/AmortizationTable";
import CurrencyConverter from "../components/CurrencyConverter";
import { Box, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <LoanForm />
          <Results />
          <CurrencyConverter />
          <AmortizationTable />
        </Box>
      </Container>
    </>
  );
};

export default Home;
