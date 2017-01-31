import React, { PropTypes } from 'react'
import { style } from 'glamor'
import { colors } from '../../styles/variables'

const label = style({
  color: colors.silver,
  paddingLeft: '6%',
  width: '35%'
})

const Label = ({children}) => (
  <div {...label}>
    { children }
  </div>
)

Label.propTypes = {
  children: PropTypes.node.isRequired
}

export default Label
