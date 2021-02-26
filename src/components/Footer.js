import React from 'react'
import styled from 'styled-components'
import RefreshIcon from '@material-ui/icons/Refresh'

const Footer = ({ lastUpdate, resetCurrencies }) => {

  const formatDate = () => {
    const date = new Date(lastUpdate.time_last_update_utc)
    console.log(date.toLocaleString())

    return date.toLocaleString()
  }

  return (
    <FooterWrapper>
        { lastUpdate &&
          <p>Latest currency update: { formatDate() }</p>
        }
        <RefreshButton onClick={ resetCurrencies }>
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
  margin-bottom: 5px;
  border-radius: 90px;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #83d8c3;
  } 
`