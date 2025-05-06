import { useState, useEffect } from "react";
import axios from "axios";

const useExchangeRates = (baseCurrency) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/57b6968a9c2324251424c181/latest/${baseCurrency}`
      );
      if (response.data.result === "success") {
        setRates(response.data.conversion_rates);
      } else {
        throw new Error(response.data["error-type"] || "Failed to fetch rates");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching exchange rates:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    rates,
    loading,
    error,
    fetchRates,
  };
};

export default useExchangeRates;
