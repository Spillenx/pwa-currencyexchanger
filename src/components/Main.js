import './Main.css'
import { useState, useEffect } from 'react'
import { fetchCurrencyAPI } from '../api/fetchCurrencyAPI'
import Header from "./Header"
import ExchangeMain from "./ExchangeMain"
import Footer from './Footer'

const Main = () => {

  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    if(currency === null) {
      console.log('fetch')
      const fetchData = async() => {
        const result = await fetchCurrencyAPI()
        setCurrency(result)
      }
      fetchData()
    }
  }, [currency])
  
  return (

    <div className="main">
      <Header />
      <ExchangeMain currency={currency}/>
      <Footer currency={currency}/>
    </div>

   )
}
 
export default Main