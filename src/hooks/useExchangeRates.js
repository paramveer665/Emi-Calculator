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
        `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/${baseCurrency}`
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
