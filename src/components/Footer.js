import React from 'react'
import RefreshIcon from '@material-ui/icons/Refresh'

const Footer = ({ currency }) => {

  const refreshCurrencies = () => {}

  return (
    <div className="footer">
      <div className="footer-container">   
        { currency &&
          <p className="footer-text">Latest currency update: { currency.time_last_update_utc }</p>
        }
        <div className="refresh-button" onClick={ refreshCurrencies }><RefreshIcon /></div>
      </div>  
    </div>
  )
}

export default Footer