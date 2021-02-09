import { useState, useEffect } from 'react'
import CurrencyList from './CurrencyList'
import { fetchAPI } from '../api/fetchAPI'

const Main = () => {
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    if(currency === null) {
      const fetchData = async() => {
        const result = await fetchAPI()
        setCurrency(result)
      }
      fetchData()
    }
  }, [currency])

  function refreshCurrencies() {
    setCurrency(null)
  }

  function showList() {
    let list = document.getElementById("currencyList")
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
          <CurrencyList currencies={ currency.conversion_rates } />
        }
      </div>

      <div className="main-container">

        <div className="currenct-exchange-container">
          <input className="exchange-input"></input>
          <input className="exchange-input"></input>
        </div>

        <div className="currency-select-container">
          <button className="currency-button" id="fromCurrency" onClick={ showList }>From Currency</button>
          <button className="currency-button" id="toCurrency" onClick={ showList }>To Currency</button>
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