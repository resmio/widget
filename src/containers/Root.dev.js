import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import Widget from '../widget'

const Root = ({ store }) => (
  <Provider store={ store }>
    <div>
      <Widget />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
