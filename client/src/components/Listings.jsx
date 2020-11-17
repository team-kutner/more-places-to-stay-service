// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Listing from './Listing.jsx';


const Listings = () => {
  const Body = styled.div`
    grid-area: listings;
    display: flex;
    background: lightgreen;
  `;

  return (
    <Body>
      <Listing/>
      <Listing/>
      <Listing/>
      <Listing/>
    </Body>
  )
}

export default Listings;
