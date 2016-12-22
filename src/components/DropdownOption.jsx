import React, { PropTypes } from 'react'
import { merge, select as $ } from 'glamor'
import {hexToRgb} from '../utils/colors'

const DropdownOption = ({
  color,
  children,
  index,
  onClickAction
}) => {
  const optionSS = merge(
    {
      background: `rgba(${hexToRgb(color)}, 0.1)`,
      height: '4rem',
      lineHeight: '4rem',
      paddingLeft: '9em',
      border: `1px solid rgba(${hexToRgb(color)}, 0.2)`,
      borderBottom: 'none',
      cursor: 'pointer'
    },
    $(':hover', {
      background: color,
      color: 'white'
    })
  )

  return (
    <div {...optionSS} id={index} onClick={onClickAction}>
      {children}
    </div>
  )
}

DropdownOption.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  onClickAction: PropTypes.func.isRequired,
}

export default DropdownOption
