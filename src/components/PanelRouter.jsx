import React from 'react';

import BookingPanel from '../containers/BookingPanel'
import GuestPanel from '../containers/GuestPanel'

const PanelRouter = (props)=> {
  switch (props.panel) {
    case 1: return (<BookingPanel />)
    case 2: return (<GuestPanel />)
    default: return (<h1>Default</h1>)
  }
}

export default PanelRouter
