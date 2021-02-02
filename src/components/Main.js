import FetchCurrencies from '../api/FetchCurrencies'

const Main = () => {

  let currencies = {}

  const fetchCurrencies = async() => {
    const data = await FetchCurrencies()

    currencies = data
    console.log(currencies.conversion_rates)
  }

  return ( 
    <div className="main">
      <div className="main-container">
        <div className="currenct-exchange-container">
          <div className="currency-select-container">

          </div>
          <div className="currency-input-container">
            <input className="currency-select" id="fromCurrenct"></input>
            <input className="currency-select" id="toCurrency"></input>
          </div>

          <div className="currency-output-container">
            <p>Received amount: <span className="currency-received"></span></p>
          </div>

        </div>
        <button onClick={fetchCurrencies}>Update</button>
        </div>
    </div>
   )
}
 
export default Main