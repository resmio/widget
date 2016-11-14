import React, { PropTypes } from 'react'

const Header = ({facility, bgImage, collapsed}) => (
  <div
    style={{
      backgroundImage: `url("${bgImage}")`,
      height: collapsed ? '40px' : '80px'
    }}
  >
     <h2>Online Booking</h2>
     <h1>{ facility }</h1>
   </div>
)

Header.propTypes = {
  bgImage: PropTypes.string,
  collapsed: PropTypes.bool,
  facility: PropTypes.string
}

export default Header
