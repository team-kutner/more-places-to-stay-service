import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ListingBody, ListingImageCont, ListingImage, Heart, HeartTwo, SuperhostContainer, SuperhostWriting, ListingDetails, RatingsContainer, ListingPrice, StarContainer, StarText } from './StyledComponents.jsx';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Listing = ({ listing, clickStar, starred, id }) => {
  return (
    <ListingBody>
      <ListingImageCont>
        <ListingImage src={listing.img_url} alt={listing.name}></ListingImage>
        <Heart onClick = { (e) => clickStar(!listing.star, id) }>
          {listing.star ? (<AiFillHeart size={24} color={'hotpink'} borderRadius={25} id = {id}/>) :
                       (<AiOutlineHeart size={24} color={'white'} borderRadius={25} id = {id}/>) }
        </Heart>
        {listing.isSuperhost === 1 && <SuperhostContainer><SuperhostWriting>SUPERHOST</SuperhostWriting></SuperhostContainer>}
      </ListingImageCont>
      <ListingDetails>
        <RatingsContainer>
          <StarContainer>
            <StarText>⋆</StarText>
          </StarContainer>
          <div id="avg_rating">{listing.avg_rating}</div>
          <div id="reviews">({listing.reviews})</div>
        </RatingsContainer>
        <div id="home_type_beds">{listing.home_type} • {listing.beds}</div>
        <div id="name">{listing.name}</div>
        <ListingPrice>${listing.cost_per_night} / night</ListingPrice>
      </ListingDetails>
    </ListingBody>
  )
}

export default Listing;
