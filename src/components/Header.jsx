import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Box,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const open = Boolean(anchorEl);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Exchange Rates", path: "/exchange-rates" },
    { name: "About", path: "/about" },
    { name: "Error Test", path: "/error-test" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>

        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{ mx: 1 }}
              >
                {item.name}
              </Button>
            ))}
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              color="default"
              inputProps={{ "aria-label": "toggle dark mode" }}
            />
          </Box>
        ) : (
          <>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.path}
                  component={Link}
                  to={item.path}
                  onClick={handleClose}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
