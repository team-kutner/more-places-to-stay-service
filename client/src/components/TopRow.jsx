// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ToggleContainer from './ToggleContainer.jsx';
import { AiOutlineHeart } from 'react-icons/ai';

const Header = styled.div`
grid-area: header;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding-bottom: 24px;
background: white;
`;

const Banner = styled.div`
font-size: 22px;
font-weight: 400;
`;


const TopRow = ( { clickRight, clickLeft, pageNum }) => {

  return (
    <Header>
      <Banner>More places to stay</Banner>
      <ToggleContainer clickLeft = { clickLeft } clickRight = { clickRight } pageNum = { pageNum }/>
    </Header>
  )
}

export default TopRow;

