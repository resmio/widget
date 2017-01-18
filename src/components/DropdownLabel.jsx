import React, { PropTypes } from 'react'
import { style } from 'glamor'
import {hexToRgb} from '../utils/colors'

const DropdownLabel = ({
  color,
  children,
  onClickAction
}) => {
  const dropdownLabelSS = style({
    width: '100%',
    textAlign: 'center',
    height: '3rem',
    background: `rgba(${hexToRgb(color)}, 0.3)`,
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
