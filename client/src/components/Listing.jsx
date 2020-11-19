// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';


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
  border-radius: 10px;
  object-fit: cover;
`;

const Heart = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  width: 40px;
  top: 0px;
  left: 233px;
  color: white;
  // background-color: red;
`

const HeartTwo = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 0px;
  left: 100px;
  color: pink;
  // background-color: red;
`

const SuperhostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  height: 25px;
  width: 90px;
  top: 11px;
  left: 10px;
  color: black;
  background-color: white;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  text-align: center;
`
const SuperhostWriting = styled.div`
  font-size: 12px;
  font-weight: bold;
`

const ListingDetails = styled.div`
  flex: 0 0 267px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // overflow: scroll;
  margin: 10px 0px 10px 0px;
  text-transform: capitalize;
`;

const ListingPrice = styled.div`
text-transform: lowercase;
`;

const PinkSpan = styled.span`
  color: red;
  font-size: 25px;
`


const Listing = ({ listing, clickerConsole, clickStar }) => {
  return (
    <Body>
      <ListingImageCont>
        <ListingImage src={listing.img_url} alt={listing.name}></ListingImage>
        <Heart onClick = { (e) => clickStar(e) }><AiOutlineHeart  size={24} id = {listing.id}/></Heart>
        <HeartTwo><AiOutlineHeart/></HeartTwo>
        {listing.isSuperhost === 1 && <SuperhostContainer><SuperhostWriting>SUPERHOST</SuperhostWriting></SuperhostContainer>}
      </ListingImageCont>
      <ListingDetails onClick = {clickerConsole}>
        <div><PinkSpan>⋆</PinkSpan> {listing.avg_rating} ({listing.reviews})</div>
        <div>{listing.home_type} • {listing.beds}</div>
        <div>{listing.name}</div>
        <ListingPrice>${listing.cost_per_night} / night</ListingPrice>
      </ListingDetails>
    </Body>
  )
}

export default Listing;