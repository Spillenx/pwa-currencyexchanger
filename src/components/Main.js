import { useState, useEffect } from 'react'
import { fetchAPI } from '../api/fetchAPI'

const Main = () => {
  const [currency, setCurrency] = useState(null)
  const [fromCurrency, setFromCurrency] = useState('currency')
  const [toCurrency, setToCurrency] =  useState('currency')

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

  const selectedCurrency = (curr) => {
    if(exchangeDirection === 'from') {
      setFromCurrency(curr)
    } else if(exchangeDirection === 'to') {
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
          <div className="list-item" key={ index } onClick={ () => selectedCurrency(curr) }> { curr } </div>
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
            <input className="exchange-input"></input>
          </div>
          <div className="currency-button" id="selectFromCurrency" onClick={ () => showList('from') }>From<br/>{ fromCurrency }</div>
        </div>

        <div className="exchange-container">
        <div className="amount">
            <p>Recieve</p>
            <input className="exchange-input"></input>
          </div>
          <div className="currency-button" id="selectToCurrency" onClick={ () => showList('to') }>To<br/>{ toCurrency }</div>
        </div>

        <div className="footer">
          { currency &&
            <p>Latest update: { currency.time_last_update_utc }</p>
          }
          <button className="update-currencies" onClick={ refreshCurrencies }>Update currencies</button>
        </div>

      </div>

    </div>
   )
}
 
export default Main