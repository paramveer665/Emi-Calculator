import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useContext } from "react";
import { AppContext, AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import ExchangeRates from "./pages/ExchangeRates";
import ErrorTest from "./pages/ErrorTest";

function AppWrapper() {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/error-test" element={<ErrorTest />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
}

export default App;
