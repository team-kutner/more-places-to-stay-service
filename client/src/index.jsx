import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'babel-polyfill';

// ReactDOM.render(<App />, document.getElementById('app'));
window.React = React;
window.ReactDOM = ReactDOM;
window.NearbyHomesApp = App;
