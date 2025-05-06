import { Container } from "@mui/material";
import ExchangeRateTable from "../components/ExchangeRateTable";

const ExchangeRates = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ExchangeRateTable />
    </Container>
  );
};

export default ExchangeRates;
