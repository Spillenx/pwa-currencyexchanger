import { useState, useEffect } from 'react'
import { fetchCurrencyAPI } from './api/fetchCurrencyAPI'
import Header from "./components/Header"
import ExchangeMain from "./components/ExchangeMain"
import Footer from './components/Footer'
import './App.css'

const App = () => {

  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    if(currency === null) {
      try{
        console.log('fetch')
        const fetchData = async() => {
          const result = await fetchCurrencyAPI()
          setCurrency(result)
        }
        fetchData()
      } catch (e) {
        console.log('Error: ', e)
      }
    }
  }, [currency])

  return (
    <div className="app">
        <Header />
        <ExchangeMain currency={currency}/>
        <Footer currency={currency}/>
    </div>
  )
}

export default App
