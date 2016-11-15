import React, { PropTypes } from 'react'
import { style } from 'glamor'

import resmioLogo from './resmioLogo'

const logoStyles = style({
  display: 'inline-block',
  width: '30%',
  minWidth: '30px',
  maxWidth: '80px',
  margin: '15px 12% 15px 5%'
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
