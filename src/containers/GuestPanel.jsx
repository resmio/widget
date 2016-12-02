import React, { Component } from 'react'

class GuestPanel extends Component {

  render () {
    return (
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
        <label htmlFor='phone'>Phone number</label>
        <input type='phone' id='phone' />
        <input type='checkbox' id='newsletter'/>
        <label htmlFor='newsletter'>Follow restaurant newsletter</label>
      </form>
    )
  }
}

export default GuestPanel
