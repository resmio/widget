import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'

let colors = {
  grey: '#999'
}

let container  = style({
  color: 'white',
  width: '100%',
  padding: '1em 2em 1em'
})

let subtitle = style({
  fontSize: '1.8em',
  marginTop: '0'
})

let name = style({
  fontSize: '1.2em',
  marginTop: '0.2',
  marginBottom: '0.4em'
})

let Header = ({facility, bgImage, collapsed}) => (
  <div {...container}
    style={{
      backgroundImage: `url("${bgImage}")`,
      height: collapsed ? '40px' : '80px'
    }}
  >
     <h2 {...subtitle}>Online Booking</h2>
     <h1 {...name}>{ facility }</h1>
   </div>
)

Header.propTypes = {
  bgImage: PropTypes.string,
  collapsed: PropTypes.bool,
  facility: PropTypes.string
}

export default Header
