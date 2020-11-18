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


const Listings = ({ dummyData }) => {
  const allListings = dummyData.map((listing, index) => {
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
// return (
//   <Body>
//     <Listing dummyData = {dummyData}/>
//     <ListingGap></ListingGap>
//     <Listing dummyData = {dummyData}/>
//     <ListingGap></ListingGap>
//     <Listing dummyData = {dummyData}/>
//     <ListingGap></ListingGap>
//     <Listing dummyData = {dummyData}/>
//     <ListingGap></ListingGap>
//     <Listing dummyData = {dummyData}/>
//     <ListingGap></ListingGap>
//     <Listing dummyData = {dummyData}/>
//   </Body>
// )
// }