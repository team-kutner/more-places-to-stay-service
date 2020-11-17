// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import ToggleContainer from './ToggleContainer.jsx';


const Listings = () => {
  const Body = styled.div`
    grid-area: listings;
    display: flex;
    background: lightgreen;
  `;
  const Listing = styled.div`
    border-style: solid;
    width: 100%;
  `;

  const ListingImage = styled.div`
  `;
  const ListingDetails = styled.div`
  `;

  return (
    <Body>
      <Listing>Listing 1</Listing>
      <Listing>Listing 1</Listing>
      <Listing>Listing 1</Listing>
      <Listing>Listing 1</Listing>
    </Body>
  )
}

export default Listings;
