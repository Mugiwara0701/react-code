import { useEffect, useState } from "react";

// we created the custom hook and return the whole function

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res[currency]));
  }, [currency]);
  // we cannot return setData or [Data, setData] Hooks are usually designed to return only the necessary data or functions.
  return data;
}

export default useCurrencyInfo;
