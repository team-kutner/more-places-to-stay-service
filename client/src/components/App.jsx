// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';

import TopRow from './TopRow.jsx';


const App = () => {
  const [name, setName] = useState('tom');

  return (
    <div>
      <p>what's up</p>
      <TopRow/>
      <p onClick={() => setName('jack')}>{name}</p>
    </div>
  )
}


export default App;
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       test: 'test'
//     };
//   };
//   render () {
//     return (
//       <div className="container">hola</div>
//     )
//   }
// };



// ReactDOM.render(<App />, document.getElementById('app'));
