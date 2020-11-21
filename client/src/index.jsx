import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TopRow from './components/TopRow.jsx';
import ToggleContainer from './components/ToggleContainer.jsx';
import Listings from './components/Listings.jsx';
import Listing from './components/Listing.jsx';
import App from './components/App.jsx';
import 'babel-polyfill';

ReactDOM.render(<App />, document.getElementById('app'));
