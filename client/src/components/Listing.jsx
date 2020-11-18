// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Body = styled.div`
  border-style: solid;
  width: 267px;
`;
const ListingImageCont = styled.div`
  box-sizing: content-box;
  flex: 0 0 267px;
  display: flex;
  height: 170px;

`
const ListingImage = styled.img`
  box-sizing: content-box;
  overflow: hidden;
  border-radius: 25px;
  // height: 170px;
  // margin: 40px;
  object-fit: cover;
`;
const ListingDetails = styled.div`
  flex: 0 0 267px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  font:
`;


const Listing = ({ listing }) => {
  return (
    <Body>
      <ListingImageCont>
        <ListingImage src={listing.img_url} alt={listing.name}></ListingImage>
      </ListingImageCont>
      <ListingDetails>
        <div>hi</div>
        <div>{listing.name}</div>
        <div>{listing.city}</div>
        <div>{listing.home_type}</div>
        <div>{listing.reviews}</div>
      </ListingDetails>
    </Body>
  )
}

export default Listing;