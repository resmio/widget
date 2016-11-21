import React, { PropTypes } from 'react'
import { merge, select as $ } from 'glamor'

const option = merge(
  {
    background: 'rgba(#DDD, 0.5)',
    height: '4rem',
    lineHeight: '4rem',
    paddingLeft: '9em',
    border: '1px solid #DDD',
    borderBottom: 'none',
    cursor: 'pointer'
  },
  $(':hover', {
    background: '#DDD',
    color: 'white'
  })
)

const DropdownOption = ({
  children,
  index,
  onClickAction
}) => (
  <li {...option} id={index} onClick={onClickAction}>
    {children}
  </li>
)

DropdownOption.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  onClickAction: PropTypes.func.isRequired,
}


export default DropdownOption
