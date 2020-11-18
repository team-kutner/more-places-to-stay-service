// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Body = styled.div`
  border-style: solid;
  width: 267px;
  margin: 0px 10px 0px 10px;
`;
const ListingImageCont = styled.div`
  // box-sizing: content-box;
  flex: 0 0 267px;
  display: flex;
  height: 170px;
`
const ListingImage = styled.img`
  box-sizing: content-box;
  overflow: hidden;
  border-radius: 25px;
  object-fit: cover;
`;
const ListingDetails = styled.div`
  flex: 0 0 267px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  margin: 10px 0px 10px 0px;
  font-family: papyrus;
`;

const PinkSpan = styled.span`
  color: red;
  font-size: 25px;
`


const Listing = ({ listing }) => {
  return (
    <Body>
      <ListingImageCont>
        <ListingImage src={listing.img_url} alt={listing.name}></ListingImage>
      </ListingImageCont>
      <ListingDetails>
        <div><PinkSpan>⋆</PinkSpan> {listing.avg_rating} ({listing.reviews})</div>
        <div>{listing.home_type} • {listing.beds}</div>
        <div>{listing.name}</div>
        <div>${listing.cost_per_night} / night</div>
      </ListingDetails>
    </Body>
  )
}

export default Listing;