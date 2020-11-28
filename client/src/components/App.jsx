const { React } = window;
const { useState, useEffect } = React;
const { styled } = global;

import axios from 'axios';
import TopRow from './TopRow.jsx';
import ToggleContainer from './ToggleContainer.jsx';
import Listings from './Listings.jsx';
import Listing from './Listing.jsx';
import listingsService from './listingsService';
import { Container } from './StyledComponents.jsx';

const App = () => {
  const [name, setName] = useState('tom');
  const [listingData, setListingData] = useState([]);
  const [firstImg, setFirstImg] =  useState(0);
  const [lastImg, setLastImg] =  useState(4);
  const [pageNum, setPageNum] = useState(1);
  const [starred, setStarred] = useState([]);

  const clickStar = (value, id) => {
    const newListings = [...listingData];
    newListings[id].star = value;
    setListingData(newListings);
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

  const moldListings = (listings) => {
    const newListings = listings.map(house => { return { ...house, star: false } } );
    setListingData(newListings);
  };

  useEffect(() => {
    (async () => {
      let url = window.location.href;
      let id = url.split('/')[url.split('/').length - 1] || 59;
      const listings = await listingsService(id);
      moldListings(listings);
    })()
  }, []);

return (
      <Container>
        {listingData.length !== 0 &&
          <>
            <TopRow clickLeft = { clickLeft } clickRight = { clickRight } pageNum = { pageNum }/>
            <Listings listingData = { listingData.slice(firstImg, lastImg) } firstImg = { firstImg } clickStar = { clickStar } starred = { starred } />
          </>
        }
      </Container>
  )
}


export default App;