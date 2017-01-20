import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'

import {style} from 'glamor'
import {colors} from '../styles/variables'

// components
import Panel from '../components/Panel'
import IconCheckmark from '../components/IconCheckmark'
// import IconCircledX from '../components/IconCircledX'
// import IconWarning from '../components/IconWarning'

const successSS = style({
    color: colors.java,
    padding: '5rem 3rem'
})

const messageSS = style({
  fontSize: '1.6rem',
  margin: '0',
  marginTop: '0.4rem',
  marginBottom: '0.4rem'
})

const smallTextSS = style({
  fontSize: '1.3rem',
  lineHeight: '1.9rem',
  marginTop: '2rem',
  color: colors.dustyGray
})

const codeSS = style({
  color: colors.mineShaft
})

const hr = style({
  display: 'block',
  height: '1px',
  border: '0',
  borderTop: `1px solid ${colors.alto}`,
  margin: '1em auto',
  padding: '0',
  width: '7rem'
})

const success = (
  <div {...successSS}>
    <IconCheckmark size='3.5rem'/>
    <p {...messageSS}>Thank you!</p>
    <p {...messageSS}>Your booking is confirmed</p>
    <p {...smallTextSS}>
      An email to {'EMAIL@EMAIL.COM'} was sent with your booking confirmation and reservation code - <span {...codeSS}>{'CODE'}</span>
    </p>
  </div>
)
const unconfirmed = <h1>Unconfirmed</h1>
const pending = <h1>Pending</h1>
const error = <h1>Error</h1>

const PanelRouter = (status)=> {
  switch (status) {
    case 'confirmed': return (success)
    case 'unconfirmed': return (unconfirmed)
    case 'pending': return (pending)
    default: return (error)
  }
}

class ConfirmationPanel extends Component {

  render () {
    const {
      status
    } = this.props.booking

    return (
      <Panel>
        {PanelRouter(status)}
        <span {...hr}/>
        <button>Create new booking</button>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    custom: state.custom,
    booking: state.booking
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(ConfirmationPanel)
