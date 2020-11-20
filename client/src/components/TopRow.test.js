import Enzyme from '../../../enzyme.js'
import React from 'react';
import ReactDOM from 'react-dom';
import TopRow from './TopRow';


describe('<TopRow /> has correct text', () => {
  it('should have the text "More places to stay"', () => {
    const wrapper = Enzyme.shallow(<TopRow />);
    // const text = wrapper.find('#banner');
    const text = wrapper.find('Banner');
    // const text = wrapper.find('div div');

    expect(text.text()).toBe('More places to stay');
   });
});