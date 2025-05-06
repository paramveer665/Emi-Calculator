import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ExchangeRates from "./pages/ExchangeRates";
import ErrorTest from "./pages/ErrorTest";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
            <Route path="/error-test" element={<ErrorTest />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
