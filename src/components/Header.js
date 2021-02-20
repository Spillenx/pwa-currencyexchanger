import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return ( 
    <HeaderWrapper>
      <h1 className="header-title">Currency Converter</h1>
    </HeaderWrapper>
   )
}
 
export default Header

const HeaderWrapper = styled.div`
  height: 45px;
  position: absolute;
  background-color: teal;
  text-align: center;
  width: 100vw;
  top: 0;
` 