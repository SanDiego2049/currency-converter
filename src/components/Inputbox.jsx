import React, { useId, useState } from "react";

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
  const inputId = useId();
  const selectId = useId();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(amount.toString());

  return (
    <div className={`flex bg-white p-3 rounded-lg test-sm ${classname}`}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          min={0}
          type="number"
          id={inputId}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount..."
          value={isFocused && amount === 0 ? "" : amount}
          disabled={amountDisabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (inputValue === "") {
              setInputValue("0"); // Reset to "0" if empty on blur
              onAmountChange(0);
            }
            setIsFocused(false)
          }}
          
          onChange={(e) => {
            const value = e.target.value;
            setInputValue(value);
            if (onAmountChange && value !== "") {
              onAmountChange(Number(value));
            }
            if (value !== "") {
              onAmountChange(Number(value)); // Update the state if it's not empty
            }
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="mb-2 text-black/40 w-full">Currency Type</p>
        <select
          id={selectId}
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
