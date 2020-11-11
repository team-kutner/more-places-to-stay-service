import React from 'react';
import ReactDOM from 'react-dom';
// const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test'
    };
  };
  render () {
    return (
      <div>Hello</div>
    )
  }
};



ReactDOM.render(<App />, document.getElementById('app'));
