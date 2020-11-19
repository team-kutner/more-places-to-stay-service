// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Body = styled.div`
  // border-style: solid;
  width: 267px;
  margin: 0px 10px 0px 10px;
  transform: translate(-10px);
`;
const ListingImageCont = styled.div`
  // box-sizing: content-box;
  position: relative;
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

const Heart = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  top: 15;
  left: 215px;
  color: blue;
  background-color: red;
`
const ListingDetails = styled.div`
  flex: 0 0 267px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // overflow: scroll;
  margin: 10px 0px 10px 0px;
  // font-family: papyrus;
`;

const PinkSpan = styled.span`
  color: red;
  font-size: 25px;
`


const Listing = ({ listing, clickerConsole }) => {
  return (
    <Body>
      <ListingImageCont>
        <ListingImage src={listing.img_url} alt={listing.name}></ListingImage>
        <Heart>Hi</Heart>
      </ListingImageCont>
      <ListingDetails onClick = {clickerConsole}>
        <div><PinkSpan>⋆</PinkSpan> {listing.avg_rating} ({listing.reviews})</div>
        <div>{listing.home_type} • {listing.beds}</div>
        <div>{listing.name}</div>
        <div>${listing.cost_per_night} / night</div>
      </ListingDetails>
    </Body>
  )
}

export default Listing;