// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ToggleContainer from './ToggleContainer.jsx';

const Header = styled.div`
grid-area: header;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding-bottom: 24px;
background: tan;
`;

const Banner = styled.div`
font-size: 22px;
font-weight: 400;
`;

const TopRow = () => {

  return (
    <Header>
      <Banner>More places to stay</Banner>
      <ToggleContainer/>
    </Header>
  )
}

export default TopRow;

