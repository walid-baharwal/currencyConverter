/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useId } from "react";
const Input = ({
  label,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyOptions = [],
}) => {
  const id = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2 flex-col">
          <label
            htmlFor={id}
            className="text-black/40 mb-2 inline-block w-full text-left"
          >
            {label}
          </label>
          <input
            id={id}
            className="outline-none w-full bg-[#F3F4F6] py-1.5 rounded-md pl-1"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Input;
