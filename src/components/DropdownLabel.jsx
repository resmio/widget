import React, { PropTypes } from 'react'
import { style } from 'glamor'

import { colors } from  '../styles/variables'

const DropdownLabel = ({
  children,
  color,
  onClickAction
}) => {
  const dropdownLabelSS = style({
    width: '100%',
    color: color,
    textAlign: 'center',
    height: '3rem',
    background: colors.gallery,
    lineHeight: '3rem'
  })

  return (
    <div {...dropdownLabelSS} onClick={onClickAction}>
      {children}
    </div>
  )
}

DropdownLabel.propTypes = {
  children: PropTypes.node.isRequired,
  onClickAction: PropTypes.func,
}

export default DropdownLabel
