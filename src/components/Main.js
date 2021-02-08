import { useState, useEffect } from 'react'
import axios from 'axios'
import CurrencyList from './CurrencyList'

const Main = () => {
  const URL = 'https://v6.exchangerate-api.com/v6/86ac07a01d57484529525c6c/latest/SEK'
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    if(currency===null) {
      const fetchData = async() => {
        const result = await axios.get(URL)
        setCurrency(result.data)
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
          <CurrencyList currencies={ currency.conversion_rates }/>
        }
      </div>

      <div className="main-container">

        <div className="currenct-exchange-container">
          <div className="currency-select-container">
            <div className="dropdown">
              <button className="currency-button" id="from-currency" onClick={ showList }>Select currencies</button>
            </div>
          </div>
          <div className="currency-output-container">
            <p>Received amount: <span className="currency-received"></span></p>
          </div>
        </div>

        <div className="footer">
          { currency &&
            <p>Last update: { currency.time_last_update_utc }</p>
          }
          <button className="update-currencies" onClick={ refreshCurrencies }>Update currencies</button>
        </div>

      </div>

    </div>
   )
}
 
export default Main