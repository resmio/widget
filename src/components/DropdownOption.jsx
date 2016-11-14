import React, { PropTypes } from 'react'

const DropdownOption = ({
  children,
  index,
  onClickAction
}) => (
  <li id={index} onClick={onClickAction}>
    {children}
  </li>
)

DropdownOption.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  onClickAction: PropTypes.func.isRequired,
}


export default DropdownOption
