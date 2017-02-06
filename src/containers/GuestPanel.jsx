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
      inputChanged
    } = this.props

    const {
      guestName,
      guestEmail,
      guestPhone,
      newsletterSubscription
    } = this.props.state

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
            type='email'
          />
          <Input
            label='Phone Number'
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
             <label htmlFor='newsletterSubscription'>Follow restaurant newsletter</label>
          </div>
        </Form>
      </Panel>
    )
  }
}

// FIXME:
// Only connect the elements needed here, instead of the whole state
function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(GuestPanel)
