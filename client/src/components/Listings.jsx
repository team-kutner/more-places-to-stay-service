const { React } = window;
const { useState, useEffect } = React;
const { styled } = global;
import Listing from './Listing.jsx';
import { ListingsBody } from './StyledComponents.jsx';

const Listings = ({ listingData, clickStar, starred, firstImg }) => {
  return (
    <ListingsBody>
      {
        listingData.map((listing, index) => {
          return <Listing listing = { listing } clickStar = { clickStar } starred = { starred } id = {firstImg + index} key = { index }/>;
        })
      }
    </ListingsBody>
  );
};

export default Listings;
