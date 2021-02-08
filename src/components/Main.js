import { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
  //const currencies = {}
  const URL = 'https://v6.exchangerate-api.com/v6/86ac07a01d57484529525c6c/latest/SEK'
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios.get(URL)
      setCurrency(result.data)
    }
    fetchData()
    console.log(currency)
  }, [currency===null])

  function refreshCurrencies() {
    setCurrency(null)
  }

  return ( 
    <div className="main">
      <div className="main-container">
        <div className="currenct-exchange-container">
          <div className="currency-select-container">
            <div className="dropdown">
              <button className="currency-button" id="from-currency">From</button>
              <button className="currency-button" id="to-currency">To</button>
              <div className="dropdown-content"></div>
            </div>
          </div>
          <div className="currency-input-container">
            <input className="currency-select" id="from-currency"></input>
            <input className="currency-select" id="to-currency"></input>
          </div>
          <div className="currency-output-container">
            <p>Received amount: <span className="currency-received"></span></p>
          </div>
        </div>
          <button className="update-currencies" onClick={ refreshCurrencies }>Update currencies</button>
        </div>
    </div>
   )
}
 
export default Main