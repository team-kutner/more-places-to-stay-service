import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toggle, Circle, PageNumberContainer, PageNumberDigit, Arrow } from './StyledComponents.jsx';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';


const ToggleContainer = ({ clickRight, clickLeft, pageNum }) => {

  return (
    <Toggle>
      <PageNumberContainer>
        <PageNumberDigit>{pageNum}/3</PageNumberDigit>
      </PageNumberContainer>
      <Circle onClick = {() => clickLeft() }  >
        <Arrow><MdKeyboardArrowLeft size = {24}/></Arrow>
      </Circle>
      <Circle onClick = {() => clickRight() }>
        <Arrow><MdKeyboardArrowRight size = {24}/></Arrow>
      </Circle>
    </Toggle>
  )
}



export default ToggleContainer;
