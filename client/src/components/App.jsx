// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';
import TopRow from './TopRow.jsx';
import ToggleContainer from './ToggleContainer.jsx';
import Listings from './Listings.jsx';



const Container = styled.div`
  display: grid;
  width: 1128px;
  height: 334px;
  grid-template-rows: 56px 278px;
  grid-template-areas: "header"
                       "listings";
  background-color: #fff;
  border-style: solid;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  `;

const App = () => {
  const [name, setName] = useState('tom');

return (
  <Container>
    <TopRow/>
    <Listings/>
  </Container>
)
}


export default App;




////////////////////////////////////////////////////////////////////////////////////////
//////////////////////ORGINAL///////////////////////////////////////////////////////////
// import React from 'react';
// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import styled from 'styled-components'
// import axios from 'axios';
// import TopRow from './TopRow.jsx';


// const Container = styled.div`
//   display: grid;
//   width: 1128px;
//   height: 334px;
//   grid-template-rows: 56px 278px;
//   grid-template-areas: "header"
//                        "listings";
//   background-color: #fff;
//   border-style: solid;
//   font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
// `
// const Header = styled.div`
//   grid-area: header;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-sizing: border-box;
//   padding-bottom: 24px;
//   background: tan;
// `;

// const Banner = styled.div`
//   font-size: 22px;
//   font-weight: 400;
// `;

// const Toggle = styled.div`
//   width: 118px;
//   display: flex;
//   justify-content: space-between;
//   font-size: 14px;
// `;

// const Circle = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   border: solid black;
//   text-align: center;
//   // box-shadow: 2px 2px black;
//   background-color: white;
// `;

// const leftArrow = styled.div`
// .arrow {
//   border: solid black;
//   border-width: 0 3px 3px 0;
//   display: inline-block;
//   padding: 3px;
//   transform: rotate(135deg)
// }
// `
// const rightArrow = styled.div`
// .arrow {
//   border: solid black;
//   border-width: 0 3px 3px 0;
//   display: inline-block;
//   // padding: 3px;
//   transform: rotate(-45deg);
// }
// `


// const PageNumberContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   // padding-top: 5px;
//   padding: 0px;
//   width: 25px;
//   height: 32px;
//   text-align: center;
//   // background-color: black;
// `;

// const PageNumberDigit = styled.div`
// `


// const Listings = styled.div`
//   grid-area: listings;
//   display: flex;
//   background: lightgreen;
// `;
// const Listing = styled.div`
//   border-style: solid;
//   width: 100%;
// `;

// const ListingImage = styled.div`
// `;
// const ListingDetails = styled.div`
// `;

// const App = () => {
//   const [name, setName] = useState('tom');

// return (
//   <Container>
//     {/* <p>nothing's up</p>
//     <TopRow/>
//     <p onClick={() => setName('jack')}>{name}</p> */}
//     <Header>
//       <Banner>More places to stay</Banner>
//       <Toggle>
//         <PageNumberContainer>
//           <PageNumberDigit>1/3</PageNumberDigit>
//         </PageNumberContainer>
//         <Circle>
//           <rightArrow></rightArrow>
//         </Circle>
//         <Circle>
//           <leftArrow></leftArrow>
//         </Circle>
//       </Toggle>
//     </Header>
//     <Listings>
//       <Listing>Listing 1</Listing>
//       <Listing>Listing 2</Listing>
//       <Listing>Listing 3</Listing>
//       <Listing>Listing 4</Listing>
//     </Listings>
//   </Container>
// )
// }


// export default App;