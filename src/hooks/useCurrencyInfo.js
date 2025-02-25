import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      { signal }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => setData(result[currency]))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      });

    return () => controller.abort(); // Cleanup function to cancel fetch on unmount
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
