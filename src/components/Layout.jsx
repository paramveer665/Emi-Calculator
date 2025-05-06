import React, { useContext } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import { AppContext } from "../context/AppContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Layout = ({ children }) => {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ pt: 8 }}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
