import React, { PropTypes } from 'react'
import { style } from 'glamor'
import { colors } from '../../styles/variables'

const value = style({
  color: colors.emperor,
  role: 'input',
  tabindex: '0',
  textAlign: 'left',
  width: '60%'
})

const Value = ({children}) => (
  <div {...value}>
    { children }
  </div>
)

Value.propTypes = {
  children: PropTypes.node.isRequired
}

export default Value
