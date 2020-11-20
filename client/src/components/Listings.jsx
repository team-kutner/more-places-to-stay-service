import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Listing from './Listing.jsx';
import { ListingsBody } from './StyledComponents.jsx';


const Listings = ({ listingData, clickStar, starred, firstImg }) => {
  return (
    <ListingsBody>
      {
        listingData.map((listing, index) => {
          return <Listing listing = {listing} clickStar = { clickStar } starred = { starred } id = {firstImg + index}/>
      })
      }
    </ListingsBody>
  )
}

export default Listings;
