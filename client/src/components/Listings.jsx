// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Body = styled.div`
grid-area: listings;
overflow-x: hidden;
overflow-y: hidden;
display: flex;
justify-content: space-between;
background: white;
`;

const Listings = ({ listingData, clickStar, starred }) => {

  return (
    <Body>
      {
        listingData.map((listing, index) => {
          return <Listing listing = {listing} clickStar = { clickStar } starred = { starred } id = {index}/>
      })
      }
    </Body>
  )
}

export default Listings;



/////////////////////////
// console.log('listingData in listings: ', listingData);
// if (listingData) {
//   console.log('aloha');
//   const allListings = listingData.map((listing, index) => {
//     return <Listing listing = {listing}/>
//   })
// } else {
//   console.log('lollo');
//   const allListings = dummyData.map((listing, index) => {
//     return <Listing listing = {listing}/>
//   })
// }
