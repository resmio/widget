import React, { PropTypes } from 'react'
import { style } from 'glamor'

import resmioLogo from './resmioLogo'

const logoStyles = style({
  display: 'inline-block',
  flex: '1',
  marginLeft: '15px',
  maxWidth: '80px',
  minWidth: '30px',
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
