import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const ExchangeMain = ( {currency} ) => {

  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] =  useState('')
  const [fromIndex, setFromIndex] = useState(0)
  const [toIndex, setToIndex] = useState(0)
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [exchangeDirection, setExchangeDirection] = useState('')

  useEffect(() => {
    if(currency) {
      const rates = Object.values(currency.conversion_rates)

    const result = fromAmount * rates[toIndex] / rates[fromIndex]
    setToAmount(result.toFixed(2))
    }
  }, [fromAmount, currency, toIndex, fromIndex])

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
      <CurrencyList>
        { currencyKeys.map((curr, index) => 
          <ListItem key={ index } onClick={ () => selectedCurrency(curr, index) }> { curr } </ListItem>
        ) }
      </CurrencyList>
    )
  }

  const showList = (direction) => {

    const list = document.getElementById("currencyList")

    if(exchangeDirection === '') {
      list.style.display = "none"
    }

    setExchangeDirection(direction)

    list.style.display === "none"
      ? list.style.display = "block"
      : list.style.display = "none"
  }

  const resetStates = () => {
    setFromAmount(0)
    setToAmount(0)
    setToIndex(0)
    setFromIndex(0)
    setFromCurrency('')
    setToCurrency('')
    document.getElementById('amountIn').value = ''
  }

  return ( 
    <ExchangeWrapper>

      <CurrencyListContent id="currencyList">
        { currency &&
          listCurrencies()
        }
      </CurrencyListContent>

      <ExchangeSection>
        <ExchangeContainer>
          <Amount>
            <p>Give</p>
            <ExchangeInput id="amountIn" placeholder={ fromAmount } onChange={ e => setFromAmount(e.target.value) } type="number" />
          </Amount>
          <ExchangeButton onClick={ () => showList('from') }>From<br/>{ fromCurrency }</ExchangeButton>
        </ExchangeContainer>

        <ExchangeContainer>
          <Amount>
            <p>Recieve</p>
            <ExchangeOutput>{ toAmount }</ExchangeOutput>
          </Amount>
          <ExchangeButton onClick={ () => showList('to') }>To<br/>{ toCurrency }</ExchangeButton>
        </ExchangeContainer>
      </ExchangeSection>

      <ButtonContainer>
        <ResetButton onClick={ resetStates }>Reset</ResetButton>
      </ButtonContainer>

    </ExchangeWrapper>
   )
}
 
export default ExchangeMain

const ExchangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 960px;
  justify-content: center;
`

const ExchangeSection = styled.div`
  display: grid;
  justify-content: center;
`

const ExchangeContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  width: 100%;
  background-color: #63d4b2;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`

const ExchangeInput = styled.input`
  margin: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 90%;
  text-align: center;
  font-size: 16px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`

const ExchangeOutput = styled.div`
  margin: 5px;
  border: none;
  text-align: center;
`

const Amount = styled.div`
  width: 50%;
  padding: 16px;
  font-size: 16px;
  border: none;
  p {
    color: white;
    text-align: center;
  }
`

const ExchangeButton = styled.div`
  color: white;
  width: 50%;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  border: none;
`

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

const ResetButton = styled.div`
  color: white;
  max-width: 20vw;
  text-align: center;
  padding: 16px;
  margin: auto;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #83d8c3;
  }
`

const CurrencyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const CurrencyListContent = styled.div`
  position: absolute;
  display: none;
  height: 60vh;
  width: 90vw;
  top: 15vw;
  right: 5vw;
  overflow: scroll;
  background-color: #f9f9f9;
  color: black;
  padding: 12px 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  :hover {
    display: block;
  }
`

const ListItem = styled.div`
  margin: 5px;
  width: 20%;
  :hover {
    background-color: #f1f1f1;
  }
`