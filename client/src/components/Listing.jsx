// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
// import { AiFillHeart } from ';'


const Body = styled.div`
  width: 267px;
  margin: 0px 10px 0px 10px;
  transform: translate(-10px);
`;
const ListingImageCont = styled.div`
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

const RatingsContainer =styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 25px;
`

const ListingPrice = styled.div`
  text-transform: lowercase;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: red;
  font-size: 25px;
`
const StarText = styled.div`
  font-size: 50px;
  padding-bottom: 5.5px;
`


const Listing = ({ listing, clickStar, starred, id }) => {
  // console.log('id is: ', id);
  // console.log('listing.starring is: ', listing.starring);
  // console.log('starred = ', starred);
  // if (starred) {
  //   for (var i = 0; i < starred.length; i++) {
  //     // console.log('listing.id: ', listing.id);
  //     // console.log('starred[' + i + ']', starred[i]);
  //     if ( listing.id.toString() === starred[i] ) {
  //       var isStarred = true;
  //     }
  //   }
  // }
// console.log('in listing for listing ', listing);
  return (
    <Body>
      <ListingImageCont>
        <ListingImage src={listing.img_url} alt={listing.name}></ListingImage>
        <Heart onClick = { (e) => clickStar(!listing.star, id) }>
          {listing.star ? (<AiFillHeart size={24} color={'hotpink'} borderRadius={25} id = {id}/>) :
                       (<AiOutlineHeart size={24} color={'white'} borderRadius={25} id = {id}/>) }
        </Heart>
        {/* <Heart>
          {isStarred ? (<AiFillHeart  onClick = { (e) => clickStar(e) } size={24} color={'hotpink'} borderRadius={25} id = {id}/>) :
                       (<AiOutlineHeart  onClick = { (e) => clickStar(e) } size={24} color={'white'} borderRadius={25} id = {id}/>) }
        </Heart> */}
        {listing.isSuperhost === 1 && <SuperhostContainer><SuperhostWriting>SUPERHOST</SuperhostWriting></SuperhostContainer>}
      </ListingImageCont>
      <ListingDetails>
        <RatingsContainer>
          <StarContainer>
            <StarText>⋆</StarText>
          </StarContainer>
          <div>{listing.avg_rating}</div>
          <div>({listing.reviews})</div>
        </RatingsContainer>
        <div>{listing.home_type} • {listing.beds}</div>
        <div>{listing.name}</div>
        <ListingPrice>${listing.cost_per_night} / night</ListingPrice>
      </ListingDetails>
    </Body>
  )
}

export default Listing;




///////////////////////////////////ORGINAL//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Listing = ({ listing, clickStar, starred }) => {
//   // console.log('starred = ', starred);
//   if (starred) {
//     for (var i = 0; i < starred.length; i++) {
//       // console.log('listing.id: ', listing.id);
//       // console.log('starred[' + i + ']', starred[i]);
//       if ( listing.id.toString() === starred[i] ) {
//         var isStarred = true;
//       }
//     }
//   }
//   console.log('isStarred = ', isStarred);
//   return (
//     <Body>
//       <ListingImageCont>
//         <ListingImage src={listing.img_url} alt={listing.name}></ListingImage>
//         <Heart>
//           {isStarred ? (<AiFillHeart  onClick = { (e) => clickStar(e) } size={24} color={'hotpink'} borderRadius={25} id = {listing.id}/>) :
//                        (<AiOutlineHeart  onClick = { (e) => clickStar(e) } size={24} color={'white'} borderRadius={25} id = {listing.id}/>) }
//         </Heart>
//         {listing.isSuperhost === 1 && <SuperhostContainer><SuperhostWriting>SUPERHOST</SuperhostWriting></SuperhostContainer>}
//       </ListingImageCont>
//       <ListingDetails>
//         <RatingsContainer>
//           <StarContainer>
//             <StarText>⋆</StarText>
//           </StarContainer>
//           <div>{listing.avg_rating}</div>
//           <div>({listing.reviews})</div>
//         </RatingsContainer>
//         <div>{listing.home_type} • {listing.beds}</div>
//         <div>{listing.name}</div>
//         <ListingPrice>${listing.cost_per_night} / night</ListingPrice>
//       </ListingDetails>
//     </Body>
//   )
// }

// export default Listing;