import { useEffect, useState } from "react";
import axios from "axios";
const currencyInfo = {
  USD: { name: "United States Dollar", country: "United States" },
  GBP: { name: "British Pound Sterling", country: "United Kingdom" },
  EUR: { name: "Euro", country: "European Union" },
  SAR: { name: "Saudi Riyal", country: "Saudi Arabia" },
  AED: { name: "UAE Dirham", country: "United Arab Emirates" },
  KWD: { name: "Kuwaiti Dinar", country: "Kuwait" },
  EGP: { name: "Egyptian Pound", country: "Egypt" },
};
export default function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("EGP");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await axios.get("https://open.er-api.com/v6/latest/EGP");
        setRates(res.data.rates);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRates();
  }, []);

  useEffect(() => {
    if (!rates[from] || !rates[to]) return;
    const baseValue = amount / rates[from];
    const converted = baseValue * rates[to];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult(converted);
  }, [amount, from, to, rates]);

  const swapCurrencies = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  if (loading)
    return <p className="text-center mt-10">Loading exchange rates...</p>;

  const currencies = Object.keys(rates);

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        Currency Converter
      </h1>

      <div className="mb-4">
        <label className="block font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded-lg outline-none"
        />
      </div>

      <div className="mb-4 flex items-center space-x-2">
        <div className="flex-1">
          <label className="block font-medium">From</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-lg"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}{currencyInfo[cur] ? " - " + currencyInfo[cur].country : null}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={swapCurrencies}
          className="text-xl mt-6 px-2 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          title="Swap currencies"
        >
          ↔️
        </button>

        <div className="flex-1">
          <label className="block font-medium">To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-lg"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}{currencyInfo[cur] ? " - " + currencyInfo[cur].country : null}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xl font-semibold">
          {amount} {from} ={" "}
          <span className="text-green-600">
            {result.toFixed(4)} {to}
          </span>
        </p>
      </div>
    </div>
  );
}
