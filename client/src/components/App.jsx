// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';
import TopRow from './TopRow.jsx';


const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 1128px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
`
const Header = styled.div`
  height: 56px;
  padding: 0px 0px 24px;
  border-style: solid;
`

const Listings = styled.div`
  display: flex;
  width: 1068px;
  height: 278px;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
`;
const Listing = styled.div`
  width: 267px;
  height: 278px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  background-color: green;
  border-style: solid;
`;
const App = () => {
  const [name, setName] = useState('tom');

  return (
    <Container>
      {/* <p>nothing's up</p>
      <TopRow/>
      <p onClick={() => setName('jack')}>{name}</p> */}
      <Header>This Is My Header</Header>
      <Listings>
        <Listing>Listing 1</Listing>
        <Listing>Listing 2</Listing>
        <Listing>Listing 3</Listing>
        <Listing>Listing 4</Listing>
      </Listings>
    </Container>
  )
}


export default App;