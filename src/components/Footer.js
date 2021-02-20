import React from 'react'
import styled from 'styled-components'
import RefreshIcon from '@material-ui/icons/Refresh'

const Footer = ({ currency }) => {

  const refreshCurrencies = () => {}

  return (
    <FooterWrapper>
        { currency &&
          <p>Latest currency update: { currency.time_last_update_utc }</p>
        }
        <RefreshButton onClick={ refreshCurrencies }>
          <RefreshIcon />
        </RefreshButton> 
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  font-size: 10px;
  bottom: 0;
`

const RefreshButton = styled.div`
  padding: 5px;
  border-radius: 90px;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #83d8c3;
  } 
`