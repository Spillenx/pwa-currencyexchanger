import React from 'react'
import { useState, useEffect } from 'react'
import { fetchCurrencyAPI } from './api/fetchCurrencyAPI'
import Header from "./components/Header"
import ExchangeMain from "./components/ExchangeMain"
import Footer from './components/Footer'
import styled from 'styled-components'

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
    <AppWrapper>
      <Header />
      <ExchangeMain currency={currency}/>
      <Footer currency={currency}/>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: black;
  background: linear-gradient(rgba(0,0,0), rgba(0,128,128));
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`