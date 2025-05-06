import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AppBar, Toolbar, Typography, IconButton, Switch } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          <Switch
            checked={darkMode}
            onChange={toggleTheme}
            color="default"
            inputProps={{ "aria-label": "toggle dark mode" }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
