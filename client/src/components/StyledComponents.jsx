// import styled from 'styled-components';
const { styled } = global;

export const Container = styled.div`
display: grid;
width: 1128px;
height: 334px;
grid-template-rows: 56px 278px;
grid-template-areas: "header"
                     "listings";
background-color: #fff;
// border-style: solid;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`;

///

export const Header = styled.div`
grid-area: header;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding-bottom: 24px;
background: white;
`;

export const Banner = styled.div`
font-size: 22px;
font-weight: 400;
`;

///

export const ListingsBody = styled.div`
grid-area: listings;
overflow-x: hidden;
overflow-y: hidden;
display: flex;
justify-content: space-between;
background: white;
`;

///

export const ListingBody = styled.div`
  width: 267px;
  margin: 0px 10px 0px 10px;
  transform: translate(-10px);
`;
export const ListingImageCont = styled.div`
  position: relative;
  flex: 0 0 267px;
  display: flex;
  height: 170px;
`
export const ListingImage = styled.img`
  box-sizing: content-box;
  overflow: hidden;
  border-radius: 10px;
  object-fit: cover;
`;

export const Heart = styled.div`
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

export const HeartTwo = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 0px;
  left: 100px;
  color: pink;
  // background-color: red;
`

export const SuperhostContainer = styled.div`
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
export const SuperhostWriting = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const ListingDetails = styled.div`
  flex: 0 0 267px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // overflow: scroll;
  margin: 10px 0px 10px 0px;
  text-transform: capitalize;
`;

export const RatingsContainer =styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 25px;
`

export const ListingPrice = styled.div`
  text-transform: lowercase;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: red;
  font-size: 25px;
`
export const StarText = styled.div`
  font-size: 50px;
  padding-bottom: 5.5px;
`

///

export const Toggle = styled.div`
width: 118px;
display: flex;
justify-content: space-between;
font-size: 16px;
`;

export const Circle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 32px;
height: 32px;
border-radius: 50%;
border: solid black;
text-align: center;
// box-shadow: 2px 2px black;
background-color: white;
`;

export const PageNumberContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
// padding-top: 5px;
padding: 0px;
width: 25px;
height: 32px;
text-align: center;
// background-color: black;
`;

export const PageNumberDigit = styled.div`
`;

export const Arrow = styled.div`
.arrow {
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg)
}
`;