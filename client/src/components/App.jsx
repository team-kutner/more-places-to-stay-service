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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';




const Container = styled.div`
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

const App = () => {
  const [name, setName] = useState('tom');
  const [listingData, setListingData] = useState('');
  const [firstImg, setFirstImg] =  useState(0);
  const [lastImg, setLastImg] =  useState(4);
  const [pageNum, setPageNum] = useState(1);
  const [starred, setStarred] = useState([]);

  const clickStar = (e) => {
    console.log('e.target is: ', e.target);
    console.log('e.target.id is: ', e.target.id);
    let newArr = starred.slice();
    newArr.push(e.target.id);
    setStarred(newArr);
    console.log('starred: ', starred);
  }

  const clickLeft = () => {
    if (firstImg !== 0) {
      setFirstImg(firstImg - 4);
      setLastImg(lastImg - 4);
      setPageNum(pageNum - 1);
    } else {
      setFirstImg(8);
      setLastImg(12);
      setPageNum(3);
    }
  };

  const clickRight = () => {
    if (firstImg !== 8) {
      setFirstImg(firstImg + 4);
      setLastImg(lastImg + 4);
      setPageNum(pageNum + 1);
    } else {
      setFirstImg(0);
      setLastImg(4);
      setPageNum(1);
    }
  };

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
            <TopRow clickLeft = { clickLeft } clickRight = { clickRight } pageNum = { pageNum }/>
            <Listings listingData = { listingData.slice(firstImg, lastImg) } clickStar = { clickStar }/>
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