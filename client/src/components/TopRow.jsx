import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Header, Banner } from './StyledComponents.jsx';
import ToggleContainer from './ToggleContainer.jsx';
import { AiOutlineHeart } from 'react-icons/ai';


Banner.displayName = "Banner";


const TopRow = ( { clickRight, clickLeft, pageNum }) => {

  return (
    <Header>
      <Banner id="banner">More places to stay</Banner>
      <ToggleContainer clickLeft = { clickLeft } clickRight = { clickRight } pageNum = { pageNum }/>
    </Header>
  )
}

export default TopRow;
