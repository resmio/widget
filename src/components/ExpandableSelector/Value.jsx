import React, { PropTypes } from 'react'
import { style } from 'glamor'

const value = style({
  color: '#555',
  flex: '1',
  role: 'input',
  tabindex: '0',
  textAlign: 'center'
})

const Value = ({children, onClickAction}) => (
  <div {...value} onClick={onClickAction}>
    { children }
  </div>
)

Value.propTypes = {
  children: PropTypes.node.isRequired,
  onClickAction: PropTypes.func
}

export default Value
