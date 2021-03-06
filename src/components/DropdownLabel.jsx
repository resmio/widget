import React, { PropTypes } from 'react'
import { style } from 'glamor'
import { colors } from  '../styles/variables'

const DropdownLabel = ({
  children,
  color,
  onClickAction
}) => {
  const dropdownLabelSS = style({
    background: colors.gallery,
    color: color,
    height: '2em',
    lineHeight: '2em',
    textAlign: 'center',
    width: '100%'
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
