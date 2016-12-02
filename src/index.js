// react
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'

import AppBase from './containers/AppBase';
import './styles/index';

const MOUNT_NODE = document.getElementById('root')
const app = (
  <Provider store={store}>
    <AppBase />
  </Provider>
)

render(app , MOUNT_NODE)
