import Currency from '../../components/currency/Currency'
import "./home.css"
import { useEffect, useState } from 'react';
const BASE_URL = 'https://economia.awesomeapi.com.br/last/USD-BRL' 

export default function Home() {
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amountValue, setAmountValue] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => 
      setExchangeRate(data.USDBRL.ask)      
      )
  })
  
  let dolarValue, realValue;

  if (amountInFromCurrency) {
    dolarValue = amountValue;

    realValue = dolarValue * exchangeRate    

  } else {
    realValue = amountValue;
    dolarValue = realValue / exchangeRate;
  }

  function handleFromValue(e) {
    setAmountValue(e.target.value);
    setAmountInFromCurrency(false)    
  }

  function handleInValue(e) {
    setAmountValue(e.target.value);
    setAmountInFromCurrency(true)    
  }

  // add , after the first number

  
  return (
    
    <div className="home-container">
        <div className="home-title">
            <h2 className='title'>Conversor de Dólar</h2>
        </div>
        <div className="currency">
            <Currency 
            typeOfCurrency={"R$"}
            onChangeAmount={handleFromValue}
            currencyValue={parseFloat(realValue).toFixed(2)}/>
        </div>
        <div className="currency">
            
            <Currency 
            typeOfCurrency={"U$"}
            onChangeAmount={handleInValue}
            currencyValue={parseFloat(dolarValue).toFixed(2)}
            />
        </div>
    </div>
    
    
    
  )
}
