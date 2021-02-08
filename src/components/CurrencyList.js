import React from 'react'
import { useState } from 'react'

export default function CurrencyList( currencies ) {

  const [currency, setCurrency] = useState(currencies)
  console.log(currency)

  function listCurrencies() {
    return (
      <div className="selected-currency">{}</div>
    )
  }

  return (
    <div>
      { listCurrencies() }
    </div>
  )
}





