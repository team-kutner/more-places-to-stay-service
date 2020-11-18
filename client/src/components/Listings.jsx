// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Body = styled.div`
grid-area: listings;
overflow: scroll;
display: flex;
justify-content: space-between;
background: lightgreen;
`;

const ListingGap = styled.div`
flex: 0 0 20px;
height: 278px;
// background-color: red;
`;


const Listings = ({ listingData }) => {

  const allListings = listingData.map((listing, index) => {
      return <Listing listing = {listing}/>
  })

  return (
    <Body>
      {allListings}
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
