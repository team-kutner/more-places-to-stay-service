const { React } = window;
const { useState, useEffect } = React;
const { styled } = global;
import { Header, Banner } from './StyledComponents.jsx';
import ToggleContainer from './ToggleContainer.jsx';
import { AiOutlineHeart } from 'react-icons/ai';

Banner.displayName = 'Banner';

const TopRow = ( { clickRight, clickLeft, pageNum }) => {

  return (
    <Header>
      <Banner id="banner">More places to stay</Banner>
      <ToggleContainer clickLeft = { clickLeft } clickRight = { clickRight } pageNum = { pageNum }/>
    </Header>
  );
};

export default TopRow;
