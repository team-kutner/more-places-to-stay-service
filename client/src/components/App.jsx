// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';
import TopRow from './TopRow.jsx';
import ToggleContainer from './ToggleContainer.jsx';
import Listings from './Listings.jsx';
import Listing from './Listing.jsx';
import dummyData from '../dummydata.js';




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
  const [listingData, setListingData] = useState('');

  useEffect(() => {
    axios.get('/api/nearbyHomes/city')
    .then(res => {
      console.log('axios GET response: ', res.data);
      setListingData(res.data);
    })
    .catch(err => {
      console.log('error is ', err);
    })
  }, []);

return (
      <Container>
        {listingData.length !== 0 &&
          <>
          <TopRow/>
          <Listings listingData = {listingData}/>
          </>
        }
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
// import ToggleContainer from './ToggleContainer.jsx';
// import Listings from './Listings.jsx';
// import Listing from './Listing.jsx';
// import dummyData from '../dummydata.js';




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
//   `;

// const App = () => {
//   const [name, setName] = useState('tom');
//   const [listingData, setListingData] = useState('');

//   useEffect(() => {
//     axios.get('/api/nearbyHomes/city')
//     .then(res => {
//       console.log('here we are');
//       console.log(res.data);
//       setListingData(res.data);
//     })
//   }, []);

// return (
//   <Container>
//       {console.log('dummyData: ', dummyData)}
//       {console.log('listingData: ', listingData)}
//     <TopRow/>
//     <Listings dummyData = {dummyData} listingData = {listingData}/>
//   </Container>
// )
// }


// export default App;