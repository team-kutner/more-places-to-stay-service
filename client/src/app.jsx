// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';


const App = () => {
  const [name, setName] = useState('tom');

  return (
    <div>
      <p>hey hey hey</p>
      <p onClick={() => setName('jack')}>{name}</p>
    </div>
  )
}

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



ReactDOM.render(<App />, document.getElementById('app'));
