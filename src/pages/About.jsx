import { Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Loan Calculator
      </Typography>
      <Typography paragraph>
        This application helps you calculate loan EMIs with currency conversion.
      </Typography>
    </Container>
  );
};

export default About;
