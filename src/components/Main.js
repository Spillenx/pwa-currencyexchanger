import { useState, useEffect } from 'react'
import { fetchAPI } from '../api/fetchAPI'

const Main = () => {
  const [currency, setCurrency] = useState(null)
  const [fromCurrency, setFromCurrency] = useState('currency')
  const [toCurrency, setToCurrency] =  useState('currency')
  const [fromIndex, setFromIndex] = useState(0)
  const [toIndex, setToIndex] = useState(0)
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)

  let exchangeDirection = ''

  useEffect(() => {
    if(currency === null) {
      const fetchData = async() => {
        const result = await fetchAPI()
        setCurrency(result)
      }
      fetchData()
    }
  }, [currency])

  const refreshCurrencies = () => {
    setCurrency(null)
  }

  const selectedCurrency = (curr, index) => {

    if(exchangeDirection === 'from') {
      setFromIndex(index)
      setFromCurrency(curr)
    } else if(exchangeDirection === 'to') {
      setToIndex(index)
      setToCurrency(curr)
    } else {
      showList()
    }

    showList()
  }

  const listCurrencies = () => {
    const currencyKeys = Object.keys(currency.conversion_rates)

    return (
      <div className="currency-list">
        { currencyKeys.map((curr, index) => 
          <div className="list-item" key={ index } onClick={ () => selectedCurrency(curr, index) }> { curr } </div>
        ) }
      </div>
    )
  }

  const showList = (direction) => {
    let list = document.getElementById("currencyList")
    exchangeDirection = direction

    if (list.style.display === "none") {
      list.style.display = "block"
    } else {
      list.style.display = "none"
    }
  }

  const performExchange = () => {
    const rates = Object.values(currency.conversion_rates)

    let result = fromAmount * rates[toIndex] / rates[fromIndex]
    setToAmount(result.toFixed(2))
  }

  return (

    <div className="main">

      <div className="currency-list-content" id="currencyList">
        { currency &&
          listCurrencies()
        }
      </div>

      <div className="main-container">

        <div className="exchange-container">
          <div className="amount">
            <p>Give</p>
            <input className="exchange-input" id="ex-in" placeholder={ fromAmount } onChange={ () => setFromAmount(document.getElementById('ex-in').value)} type="number" />
          </div>
          <div className="currency-button" id="selectFromCurrency" onClick={ () => showList('from') }>From<br/>{ fromCurrency }</div>
        </div>

        <div className="exchange-container">
          <div className="amount">
            <p>Recieve</p>
            <div className="exchange-output">{ toAmount }</div>
          </div>
          <div className="currency-button" id="selectToCurrency" onClick={ () => showList('to') }>To<br/>{ toCurrency }</div>
        </div>

        <div className="exchange-button" onClick={ performExchange }>Exchange</div>

        <div className="footer">
          { currency &&
            <p>Latest update: { currency.time_last_update_utc }</p>
          }
          <button className="exchange-button" onClick={ () => refreshCurrencies }>Update currencies</button>
        </div>

      </div>

    </div>
   )
}
 
export default Main