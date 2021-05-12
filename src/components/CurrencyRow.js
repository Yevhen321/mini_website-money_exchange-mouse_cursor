import React from 'react'

const CurrencyRow = ({currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount, disabled}) => (
    <div>
        <input
            type="number"
            className="border-solid border-2 border-light-blue-500 px-4 py-2 rounded-md"
            value={amount}
            onChange={onChangeAmount}
        />
        <select
            className="border-solid border-2 border-light-blue-500 px-3 py-1 ml-4 rounded-md"
            value={selectedCurrency}
            onChange={onChangeCurrency}
            disabled={disabled}
        >
            {currencyOptions.map((option, index) => <option value={option} key={index}>{option}</option>)}
        </select>
    </div>
)

export default CurrencyRow