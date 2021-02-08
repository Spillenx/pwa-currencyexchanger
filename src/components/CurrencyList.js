import React from 'react'
import { useState } from 'react'

export default function CurrencyList( currencies ) {

  const [currency] = useState(currencies)

  function listCurrencies() {
    const currencyKeys = Object.keys(currency.currencies)

    return (
      <div className="currency-list">{ currencyKeys.map(key => <div className="list-item"><a> { key } </a></div> ) }</div>
    )
  }

  return (
    <div>
      { listCurrencies() }
    </div>
  )
}





