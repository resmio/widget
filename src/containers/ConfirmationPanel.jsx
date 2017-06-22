import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import {injectIntl, FormattedMessage} from 'react-intl';
import { style, merge, select as $ } from 'glamor'

import { colors } from '../styles/variables'
import { hexToRgb } from '../utils/colors'
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'

// components
import Panel from '../components/Panel'
import Spinner from '../components/Spinner'
import IconCheckmark from '../components/IconCheckmark'
import IconCircledX from '../components/IconCircledX'
import IconWarning from '../components/IconWarning'

const successSS = style({
    color: colors.java,
    padding: '5em 3em'
})

const unconfirmedSS = style({
  color: colors.goldenTainoi,
  padding: '5em 3em'
})

const errorSS = style({
  color: colors.amaranth,
  padding: '5em 3em'
})

const messageSS = style({
  fontSize: '1.6em',
  margin: '0',
  marginTop: '0.4em',
  marginBottom: '0.4em'
})

const smallTextSS = style({
  color: colors.dustyGray,
  fontSize: '1.3em',
  lineHeight: '1.9em',
  marginTop: '2em',
})

const blackerSS = style({
  color: colors.mineShaft
})

const hr = style({
  border: '0',
  borderTop: `1px solid ${colors.alto}`,
  display: 'block',
  height: '1px',
  margin: '1em auto',
  padding: '0',
  width: '7em'
})

const success = (guestEmail, bookingRefNum) => {
  return (
    <div {...successSS}>
      <IconCheckmark size='3.5em'/>
      <p {...messageSS}>
        <FormattedMessage
          id="confirmationpanel.thanks"
          description="ConfirmationPanel thank you message"
          defaultMessage="Thank you!"/>
      </p>
      <p {...messageSS}>
        <FormattedMessage
          id="confirmationpanel.confirmed"
          description="ConfirmationPanel confirmed message"
          defaultMessage="Your booking is confirmed"/>
      </p>
      <p {...smallTextSS}>
        <FormattedMessage
          id="confirmationpanel.message"
          description="ConfirmationPanel message"
          defaultMessage="An email to {guestEmail} was sent with your booking confirmation and reservation code"
          values={{
            guestEmail: guestEmail
          }}/>
          - <span {...blackerSS}>{bookingRefNum}</span>
      </p>
    </div>
  )
}

const unconfirmed = (
  <div {...unconfirmedSS}>
    <IconWarning size='3.5em'/>
    <p {...messageSS}>
      <FormattedMessage
        id="confirmationpanel.unconfirmed.thankyou"
        description="ConfirmationPanel unconfirmed thank you"
        defaultMessage="Thank you"/>
    </p>
    <p {...messageSS}>
      <FormattedMessage
        id="confirmationpanel.unconfirmed.request"
        description="ConfirmationPanel unconfirmed request"
        defaultMessage="Booking request received"/>
    </p>
    <p {...smallTextSS}>
      <FormattedMessage
        id="confirmationpanel.unconfirmed.notconfirmed"
        description="ConfirmationPanel unconfirmed alert"
        defaultMessage="Your booking has not been confirmed yet."/>
      <FormattedMessage
        id="confirmationpanel.unconfirmed.contactyou"
        description="ConfirmationPanel unconfirmed alert"
        defaultMessage="We will contact you as soon as we know whether we can accomodate your request."/>
    </p>
  </div>
)

const error = (
  <div {...errorSS}>
    <IconCircledX size='3.5em'/>
    <p {...messageSS}>Ooops!</p>
    <p {...messageSS}>
      <FormattedMessage
        id="confirmationpanel.error"
        description="ConfirmationPanel error"
        defaultMessage="Something went wrong"/>
    </p>
    <p {...smallTextSS}>
      <FormattedMessage
        id="confirmationpanel.error.tryagain"
        description="ConfirmationPanel error"
        defaultMessage="Please try again or call us at Phone number."/>
      <FormattedMessage
        id="confirmationpanel.error.apologize"
        description="ConfirmationPanel error"
        defaultMessage="We apologize for the inconvenience."/>
    </p>
  </div>
)

const pending = <Spinner />

const PanelRouter = ({
  status,
  guestEmail,
  bookingRefNum
})=> {
  switch (status) {
    case 'confirmed': return (success(guestEmail, bookingRefNum))
    case 'unconfirmed': return (unconfirmed)
    case 'pending': return (pending)
    default: return (error)
  }
}

class ConfirmationPanel extends Component {

  render () {
    const {
      buttonColor
    } = this.props.widget

    const {
      newBooking,
      intl
    } = this.props

    const button = merge(
      {
        background: `rgba(${hexToRgb(buttonColor)}, 0.8)`,
        border: '1px solid white',
        borderRadius: '4px',
        color: 'white',
        cursor: 'pointer',
        display: 'block',
        fontSize: '1.4em',
        margin: '4em auto',
        padding: '1em 3em',
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
        {PanelRouter(this.props.widget)}
        <span {...hr}/>
        <button {...button} onClick={newBooking}>
          <FormattedMessage
            id="confirmationpanel.createnewbooking"
            description="ConfirmationPanel create new booking button"
            defaultMessage="Create new booking"/>
        </button>
      </Panel>
    )
  }
}

// FIXME:
// Only connect the elements needed here, instead of the whole state
// No big deal, since we don't plan to rerender this often
// But just to keep up with good practices
function mapStateToProps({widget}) {
  return { widget }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(injectIntl(ConfirmationPanel))
