import React from 'react';
import ReactDOM from 'react-dom';
import app from './index';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<app />, div);
});
