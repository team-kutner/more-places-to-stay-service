// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

const {React} = window
const {ReactDOM} = window

import App from './components/App.jsx';
import 'babel-polyfill';

ReactDOM.render(<App />, document.getElementById('NearbyApp'));
// window.React = React;
// window.ReactDOMnearby = ReactDOM;
// window.NearbyHomesApp = App;
