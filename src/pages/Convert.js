import React, {useEffect, useState} from 'react'
import CurrencyRow from "../components/CurrencyRow";

const URL = 'https://60631a890133350017fd2964.mockapi.io/curr'

const Convert = () => {
    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState()
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency){
        toAmount = amount
        toAmount = (amount * exchangeRate).toFixed(2)
    }else{
        toAmount = amount
        fromAmount = (amount / exchangeRate).toFixed(2)
    }

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const mainCurrency = Object.keys(data[0].valute)[0]
                const firstCurrency = Object.keys(data[0].valute)[2]
                setCurrencyOptions([...Object.keys(data[0].valute)])
                setFromCurrency(mainCurrency)
                setToCurrency(firstCurrency)
                setExchangeRate(data[0].valute[firstCurrency].Value)
            })
    }, []);

    useEffect(() => {
        if(fromCurrency != null && toCurrency != null){
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setExchangeRate(data[0].valute[toCurrency].Value)
                })
        }
    }, [fromCurrency, toCurrency])

    const handleFromAmountChange = (e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    const handleToAmountChange = (e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    return(
        <div className="block my-6 max-w-2xl mx-auto text-center">
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                    onChangeAmount={handleFromAmountChange}
                    amount={fromAmount}
                    disabled
                />
                    <div> = </div>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={e => setToCurrency(e.target.value)}
                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}
                />
        </div>
    );
}

export default Convert