import { useState } from "react";
import { Input as InputBox } from "./components/index";
import useCurrencyData from "./hooks/useCurrencyData";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [calculatedAmount, setCalculatedAmount] = useState(0);

  const currencyList  = useCurrencyData(from);
  const currencyOptions = Object.keys(currencyList);

  const calculateAmount = () => {
     setCalculatedAmount(amount * currencyList[to]);
  };

  const swap = () => {
    setTo(from);
    setFrom(to);
    setCalculatedAmount(amount)
    setAmount(calculatedAmount)
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculateAmount();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={currencyOptions}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  selectCurrency={to}
                  currencyOptions={currencyOptions}
                  amount={calculatedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
