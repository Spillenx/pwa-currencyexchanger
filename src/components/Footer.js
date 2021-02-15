import React from 'react'
import RefreshIcon from '@material-ui/icons/Refresh'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
      {/*     
        { currency &&
          <p className="footer-text">Latest update: { currency.time_last_update_utc }</p>
        }
        <div className="refresh-button" onClick={ refreshCurrencies }><RefreshIcon /></div>
         */}
         <p className="footer-text">Latest update: </p>
        <div className="refresh-button"><RefreshIcon /></div>
      </div>  
    </div>
  )
}

export default Footer