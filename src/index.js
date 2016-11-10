// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actionCreators'
import store from './store'

import AppBase from './AppBase';
import './index.css';

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    actionCreators,
    dispatch
  )
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBase)

const MOUNT_NODE = document.getElementById('root')
render(<App store={store} />, MOUNT_NODE)
