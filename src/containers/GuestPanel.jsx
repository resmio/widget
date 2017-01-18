import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import { style } from 'glamor'

import * as bookingActions from '../actions/bookingActions'

// components
import Panel from '../components/Panel'
import Form from '../components/Form'
import Input from '../components/Input'

const newsletterSection = style({
  marginTop: '2rem',
  fontSize: '1.6rem',
  color: '#999'
})

const newsletterCheckbox = style({
  marginRight: '1rem'
})

class GuestPanel extends Component {

  render () {
    const {
      checkboxChanged,
      inputChanged
    } = this.props

    const {
      guestName,
      guestEmail,
      guestPhone,
      newsletterSubscription
    } = this.props.booking

    return (
      <Panel>
        <Form>
          <Input
            label='Name'
            id='guestName'
            placeHolder='John Doe'
            key='name'
            defaultValue={guestName}
            onChange={(e)=>{inputChanged('guestName', e.target.value)}}
          />
          <Input
            label='Email'
            id='guestEmail'
            placeHolder='example@mail.com'
            key='email'
            defaultValue={guestEmail}
            onChange={(e)=>{inputChanged('guestEmail', e.target.value)}}
          />
          <Input
            label='Phone Number'
            id='guestPhone'
            placeHolder='017645990313'
            key='phone'
            defaultValue={guestPhone}
            onChange={(e)=>{inputChanged('guestPhone', e.target.value)}}
          />
          <div {...newsletterSection}>
            <input
              {...newsletterCheckbox}
              type='checkbox'
              checked={newsletterSubscription}
              id='newsletterSubscription'
              onChange={(e)=>{checkboxChanged('newsletterSubscription', e.target.checked)}}
             />
             <label htmlFor='newsletterSubscription'>Follow restaurant newsletter</label>
          </div>
        </Form>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    booking: state.booking
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(GuestPanel)
