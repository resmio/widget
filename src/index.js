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

if (process.env.npm_lifecycle_event !== 'test') {
  // When testing we want to call the render from the test,
  // since it uses its own (fake) DOM
  render(app , MOUNT_NODE)  
}
