// react
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'

import App from './App';
import './index.css';

const MOUNT_NODE = document.getElementById('root')
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app , MOUNT_NODE)
