import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorTest = () => {
  const navigate = useNavigate();

  const triggerError = () => {
    navigate("/non-existent-route");
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Error Testing Page
      </Typography>
      <Button variant="contained" color="error" onClick={triggerError}>
        Trigger 404 Error
      </Button>
    </Container>
  );
};

export default ErrorTest;
