import React, { PropTypes } from 'react'
import { style } from 'glamor'

const label = style({
  color: '#CCC',
  flex: '1',
  paddingLeft: '1em'
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
