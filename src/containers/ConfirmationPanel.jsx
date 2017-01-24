import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'

import {hexToRgb} from '../utils/colors'

import { style, merge, select as $ } from 'glamor'
import {colors} from '../styles/variables'

// components
import Panel from '../components/Panel'
import IconCheckmark from '../components/IconCheckmark'
import IconCircledX from '../components/IconCircledX'
import IconWarning from '../components/IconWarning'

const successSS = style({
    color: colors.java,
    padding: '5rem 3rem'
})

const unconfirmedSS = style({
  color: colors.goldenTainoi,
  padding: '5rem 3rem'
})

const errorSS = style({
  color: colors.amaranth,
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

const blackerSS = style({
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

const success = (guestEmail, bookingId) => {
  return (
    <div {...successSS}>
      <IconCheckmark size='3.5rem'/>
      <p {...messageSS}>Thank you!</p>
      <p {...messageSS}>Your booking is confirmed</p>
      <p {...smallTextSS}>
        An email to {guestEmail} was sent with your booking confirmation and reservation code - <span {...blackerSS}>{bookingId}</span>
      </p>
    </div>
  )
}

const unconfirmed = (
  <div {...unconfirmedSS}>
    <IconWarning size='3.5rem'/>
    <p {...messageSS}>Thank you!</p>
    <p {...messageSS}>Booking request received</p>
    <p {...smallTextSS}>
      Atention, your booking <span {...blackerSS}>has not been confirmed yet</span>, but we will contact you as soon as we know whether we can accomodate your request.
    </p>
  </div>
)

const error = (
  <div {...errorSS}>
    <IconCircledX size='3.5rem'/>
    <p {...messageSS}>Ooops!</p>
    <p {...messageSS}>Something went wrong</p>
    <p {...smallTextSS}>
      Please try again or call us at <span {...blackerSS}>Phone number</span>. We apologize for the inconvenience.
    </p>
  </div>
)

const pending = <h1>Pending</h1>

const PanelRouter = ({status, guestEmail, bookingId})=> {
  switch (status) {
    case 'confirmed': return (success(guestEmail, bookingId))
    case 'unconfirmed': return (unconfirmed)
    case 'pending': return (pending)
    default: return (error)
  }
}

class ConfirmationPanel extends Component {

  render () {
    const {
      buttonColor
    } = this.props.state

    const {
      newBooking
    } = this.props

    const button = merge(
      {
        background: `rgba(${hexToRgb(buttonColor)}, 0.8)`,
        border: '1px solid white',
        borderRadius: '4px',
        color: 'white',
        cursor: 'pointer',
        display: 'block',
        fontSize: '1.4rem',
        padding: '1rem 3rem',
        margin: '4rem auto'
      },
      $(':hover', {
        background: 'white',
        border: `1px solid ${buttonColor}`,
        color: buttonColor,
      }),
      $(':focus', {
        outline: 'none'
      })
    )

    return (
      <Panel>
        {PanelRouter(this.props.state)}
        <span {...hr}/>
        <button {...button} onClick={newBooking}>Create new booking</button>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(ConfirmationPanel)
