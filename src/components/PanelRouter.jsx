import React from 'react';

// components
import BookingPanel from '../containers/BookingPanel'
import GuestPanel from '../containers/GuestPanel'
import ConfirmationPanel from '../containers/ConfirmationPanel'

const PanelRouter = ({panel})=> {
  switch (panel) {
    case 1: return (<BookingPanel />)
    case 2: return (<GuestPanel />)
    case 3: return (<ConfirmationPanel />)
    default: return (<BookingPanel />)
  }
}

export default PanelRouter
