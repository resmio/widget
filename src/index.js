// react
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actionCreators'
import store from './store'

// styles
// import styles from './styles.scss'

import Widget from './containers/Widget'

function mapStateToProps(state) { return state }
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    actionCreators,
    dispatch
  )
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget)

const MOUNT_NODE = document.getElementById('root')
render(<App store={store} />, MOUNT_NODE)
