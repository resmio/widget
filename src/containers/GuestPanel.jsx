import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import * as bookingActions from '../actions/bookingActions'

// components
import Panel from '../components/Panel'
import Form from '../components/Form'
import Input from '../components/Input'

class GuestPanel extends Component {

  render () {
    const {
      inputChanged
    } = this.props

    const {
      guestName,
      guestEmail,
      guestPhone
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
            onChange={(e)=>{inputChanged(e.target.id, e.target.value)}}
          />
          <Input
            label='Email'
            id='guestEmail'
            placeHolder='example@mail.com'
            key='email'
            defaultValue={guestEmail}
            onChange={(e)=>{inputChanged(e.target.id, e.target.value)}}
          />
          <Input
            label='Phone Number'
            id='guestPhone'
            placeHolder='017645990313'
            key='phone'
            defaultValue={guestPhone}
            onChange={(e)=>{inputChanged(e.target.id, e.target.value)}}
          />
          <input type='checkbox' id='newsletter'/>
          <label htmlFor='newsletter'>Follow restaurant newsletter</label>
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
