import React, { PropTypes } from 'react'
import { merge, select as $ } from 'glamor'
import {hexToRgb} from '../utils/colors'
import { colors } from '../styles/variables'

const DropdownOption = ({
  children,
  color,
  index,
  selected,
  onClickAction
}) => {
  const selectedSS = selected
    ? {backgroundColor: color, color:'white'}
    : {}

  const optionSS = merge(
    {
      backgroundColor: colors.white,
      border: `1px solid rgba(${hexToRgb(color)}, 0.2)`,
      borderBottom: 'none',
      cursor: 'pointer',
      height: '2.8em',
      lineHeight: '2.8em',
      paddingLeft: '7em'
    },
    $(':hover', {
      backgroundColor: `rgba(${hexToRgb(color)}, 0.8)`,
      color: 'white'
    }),
    selectedSS
  )

  return (
    <div {...optionSS} id={index} onClick={onClickAction}>
      {children}
    </div>
  )
}

DropdownOption.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onClickAction: PropTypes.func.isRequired,
}

export default DropdownOption
