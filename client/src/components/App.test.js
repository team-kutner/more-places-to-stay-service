import Enzyme from '../../../Enzyme.js'
import React from 'react';
import App from './App';
import TopRow from './TopRow';
import Listing from './Listing';
import Listings from './Listings';





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

describe('<TopRow /> has correct text', () => {
  it('should have the text "More places to stay"', () => {
    const wrapper = Enzyme.shallow(<TopRow />);
    const text = wrapper.find('Banner');
    expect(text.text()).toBe('More places to stay');
   });
});

describe('<Listing /> has correct text', () => {
  it('avg_rating to be defined', () => {
    const wrapper = Enzyme.shallow(<Listing />);
    const text = wrapper.find('#avg_rating');
    expect(text.text()).toBeDefined();
   });
   it('reviews to be defined', () => {
    const wrapper = Enzyme.shallow(<Listing />);
    const text = wrapper.find('#reviews');
    expect(text.text()).toBeDefined();
   });
   it('home_type_beds to be defined', () => {
    const wrapper = Enzyme.shallow(<Listing />);
    const text = wrapper.find('#home_type_beds');
    expect(text.text()).toBeDefined();
   });
   it('name', () => {
    const wrapper = Enzyme.shallow(<Listing />);
    const text = wrapper.find('#name');
    expect(text.text()).toBeDefined();
   });
});