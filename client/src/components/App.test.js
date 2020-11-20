import Enzyme from '../../../Enzyme.js'
import React from 'react';
import App from './App';



describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     Enzyme.shallow(<App />);
   });
});

describe('</App> has no props', () => {
  const container = Enzyme.shallow(<App />);
  it('should match snapshot', () => {
     expect(container.html()).toMatchSnapshot();
   });
});