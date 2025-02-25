import { useState, useEffect } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { Inputbox } from "./components/index";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("ngn");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(0);
    setConvertedAmount(0);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="w-full ">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Inputbox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-1 border-white rounded-full px-3 py-1 bg-blue-600 text-white text-sm font-semibold"
                  onClick={swap}
                >
                  SWAP
                </button>
              </div>
              <div className="w-full mb-1">
                <Inputbox
                  label="To"
                  amount={convertedAmount}
                  amountDisabled={true}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                />
              </div>
              <button
                className="w-full bg-blue-600 py-2 rounded-lg mt-3 text-white font-semibold"
                type="submit"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
