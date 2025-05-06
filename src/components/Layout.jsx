import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ pt: 8 }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
