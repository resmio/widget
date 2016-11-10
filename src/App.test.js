import React from 'react';
import ReactDOM from 'react-dom';
import AppBase from './AppBase';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppBase />, div);
});
