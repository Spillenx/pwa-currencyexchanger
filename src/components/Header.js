import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return ( 
    <HeaderWrapper>
      <h2>Currency Converter</h2>
    </HeaderWrapper>
   )
}
 
export default Header

const HeaderWrapper = styled.div`
  height: 45px;
  position: absolute;
  background-color: transparent;
  text-align: center;
  width: 100vw;
  top: 0;
  padding: 10px;
  h2 {
    color: #63d4b2;
    font-weight: normal;
  }
` 