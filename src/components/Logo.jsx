import React, { PropTypes } from 'react'
import { style } from 'glamor'

import resmioLogo from './resmioLogo'

const logoStyles = style({
  display: 'inline-block',
  minWidth: '30px',
  maxWidth: '80px',
  marginLeft: '15px',
  flex: '1'
})

const Logo = (props) => {
  const logo = props.logo || resmioLogo
  return (
    <span {...logoStyles}>
      { logo }
    </span>
  )
}

Logo.propTypes = {
  logoUrl: PropTypes.string
}

export default Logo
