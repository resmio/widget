import React from 'react';

// components
import BookingPanel from '../containers/BookingPanel'
import GuestPanel from '../containers/GuestPanel'

const PanelRouter = ({panel})=> {
  switch (panel) {
    case 1: return (<BookingPanel />)
    case 2: return (<GuestPanel />)
    default: return (<BookingPanel />)
  }
}

export default PanelRouter
