import './ExchangeMain.css'
import './Footer.css'
import './CurrencyList.css'
import { useState, useEffect } from 'react'
import { fetchAPI } from '../api/fetchAPI'
import RefreshIcon from '@material-ui/icons/Refresh'

const ExchangeMain = () => {

  const [currency, setCurrency] = useState(null)
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] =  useState('')
  const [fromIndex, setFromIndex] = useState(0)
  const [toIndex, setToIndex] = useState(0)
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [exchangeDirection, setExchangeDirection] = useState('')

  useEffect(() => {
    if(currency === null) {
      console.log('fetch')
      const fetchData = async() => {
        const result = await fetchAPI()
        setCurrency(result)
      }
      fetchData()
    }
  }, [currency])

  useEffect(() => {
    if(currency) {
      const rates = Object.values(currency.conversion_rates)

    const result = fromAmount * rates[toIndex] / rates[fromIndex]
    setToAmount(result.toFixed(2))
    }
  }, [fromAmount, currency, toIndex, fromIndex])

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

    if(exchangeDirection === '') {
      list.style.display = "none"
    }

    setExchangeDirection(direction)

    if (list.style.display === "none") {
      list.style.display = "block"
    } else {
      list.style.display = "none"
    }
  }

  const resetInputs = () => {
    setFromAmount(0)
    setToAmount(0)
    setToIndex(0)
    setFromIndex(0)
    setFromCurrency('')
    setToCurrency('')
  }

  return ( 
    <div>

      <div className="currency-list-content" id="currencyList">
        { currency &&
          listCurrencies()
        }
      </div>

      <div className="exchange-section">
        <div className="exchange-container">
          <div className="amount">
            <p>Give</p>
            <input className="exchange-input" id="exIn" onChange={ () => setFromAmount(document.getElementById('exIn').value) } type="number" />
          </div>
          <div className="exchange-button" id="selectFromCurrency" placeholder={ fromAmount } onClick={ () => showList('from') }>From<br />{ fromCurrency }</div>
        </div>

        <div className="exchange-container">
          <div className="amount">
            <p>Recieve</p>
            <div className="exchange-output">{ toAmount }</div>
          </div>
          <div className="exchange-button" id="selectToCurrency" onClick={ () => showList('to') }>To<br/>{ toCurrency }</div>
        </div>
      </div>

      <div className="reset-button" onClick={ resetInputs }>Reset</div>
       

      <div className="footer">
        { currency &&
          <p>Latest update: { currency.time_last_update_utc }</p>
        }
        <div className="refresh-button" onClick={ refreshCurrencies }><RefreshIcon /></div>
      </div>
    </div>
   )
}
 
export default ExchangeMain