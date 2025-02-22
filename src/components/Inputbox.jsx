import React, { useId } from "react";

const Inputbox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  classname = "",
}) => {
  const Id = useId();
  return (
    <div className={`flex bg-white p-3 rounded-lg test-sm ${classname}`}>
      <div className="w-1-2">
        <label htmlFor={Id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          min={0}
          type="number"
          id={Id}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount..."
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1-2 flex flex-wrap justify-end text-right">
        <p className="mb-2 text-black/40 w-full">Currency Type</p>
        <select
          name=""
          id={Id}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inputbox;
