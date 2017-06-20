import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import {injectIntl, defineMessages, FormattedMessage} from 'react-intl';
import { style } from 'glamor'

import * as bookingActions from '../actions/bookingActions'

// components
import Panel from '../components/Panel'
import Form from '../components/Form'
import Input from '../components/Input'

const messages = defineMessages({
    'GuestPanelNameLabel': {
      id: 'guestpanel.name.label',
      description: 'GuestPanel name label',
      defaultMessage: 'Name'
    },
    'GuestPanelEmailLabel': {
      id: 'guestpanel.email.label',
      description: 'GuestPanel email label',
      defaultMessage: 'Email'
    },
    'GuestPanelPhoneLabel': {
      id: 'guestpanel.phone.label',
      description: 'GuestPanel phone label',
      defaultMessage: 'Phone Number'
    },
    'GuestPanelNewsletterLabel': {
      id: 'guestpanel.newsletter.label',
      description: 'GuestPanel newsletter label',
      defaultMessage: 'Follow restaurant newsletter'
    }
})

const newsletterSection = style({
  color: '#999',
  fontSize: '1.6em',
  marginTop: '2em'
})

const newsletterCheckbox = style({
  marginRight: '1em'
})

class GuestPanel extends Component {

  render () {
    const {
      checkboxChanged,
      inputChanged,
      intl
    } = this.props

    const {
      guestName,
      guestEmail,
      guestPhone,
      newsletterSubscription
    } = this.props.widget

    return (
      <Panel>
        <Form>
          <Input
            label={intl.formatMessage(messages.GuestPanelNameLabel)}
            id='guestName'
            placeHolder='John Doe'
            key='name'
            defaultValue={guestName}
            onChange={(e)=>{inputChanged('guestName', e.target.value)}}
          />
          <Input
            label={intl.formatMessage(messages.GuestPanelEmailLabel)}
            id='guestEmail'
            placeHolder='example@mail.com'
            key='email'
            defaultValue={guestEmail}
            onChange={(e)=>{inputChanged('guestEmail', e.target.value)}}
            type='email'
          />
          <Input
            label={intl.formatMessage(messages.GuestPanelPhoneLabel)}
            id='guestPhone'
            placeHolder='0555555555'
            key='phone'
            defaultValue={guestPhone}
            onChange={(e)=>{inputChanged('guestPhone', e.target.value)}}
            type='tel'
          />
          <div {...newsletterSection}>
            <input
              {...newsletterCheckbox}
              type='checkbox'
              checked={newsletterSubscription}
              id='newsletterSubscription'
              onChange={(e)=>{checkboxChanged('newsletterSubscription', e.target.checked)}}
             />
             <label htmlFor='newsletterSubscription'>
               {intl.formatMessage(messages.GuestPanelNewsletterLabel)}
             </label>
          </div>
        </Form>
      </Panel>
    )
  }
}

// FIXME:
// Only connect the elements needed here, instead of the whole state
function mapStateToProps({widget}) {
  return {
    widget
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(injectIntl(GuestPanel))
