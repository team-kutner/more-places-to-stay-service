const { React } = window;
const { useState, useEffect } = React;
const { styled } = global;
import { Toggle, Circle, PageNumberContainer, PageNumberDigit, Arrow } from './StyledComponents.jsx';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';


const ToggleContainer = ({ clickRight, clickLeft, pageNum }) => {

  return (
    <Toggle>
      <PageNumberContainer>
        <PageNumberDigit>{ pageNum }/3</PageNumberDigit>
      </PageNumberContainer>
      <Circle onClick = { () => clickLeft() } >
        <Arrow><MdKeyboardArrowLeft size = { 24 }/></Arrow>
      </Circle>
      <Circle onClick = { () => clickRight() }>
        <Arrow><MdKeyboardArrowRight size = { 24 }/></Arrow>
      </Circle>
    </Toggle>
  );
};



export default ToggleContainer;
