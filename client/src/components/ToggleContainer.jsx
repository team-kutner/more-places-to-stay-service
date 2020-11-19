import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'


const Toggle = styled.div`
width: 118px;
display: flex;
justify-content: space-between;
font-size: 14px;
`;

const Circle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 32px;
height: 32px;
border-radius: 50%;
border: solid black;
text-align: center;
// box-shadow: 2px 2px black;
background-color: white;
`;

const PageNumberContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
// padding-top: 5px;
padding: 0px;
width: 25px;
height: 32px;
text-align: center;
// background-color: black;
`;

const PageNumberDigit = styled.div`
`;

const leftArrow = styled.div`
.arrow {
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg)
}
`;
const rightArrow = styled.div`
.arrow {
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
// padding: 3px;
transform: rotate(-45deg);
`;


// const ToggleContainer = () => {
const ToggleContainer = ({ clickRight, clickLeft, pageNum }) => {
  console.log('pageNum: ', pageNum);

  return (
    <Toggle>
      <PageNumberContainer>
  <PageNumberDigit>{pageNum}/3</PageNumberDigit>
      </PageNumberContainer>
      <Circle onClick = {() => clickLeft() }  >
        <rightArrow></rightArrow>
        <rightArrow></rightArrow>
      </Circle>
      <Circle onClick = {() => clickRight() }>
        <leftArrow></leftArrow>
      </Circle>
    </Toggle>
  )
}



export default ToggleContainer;
