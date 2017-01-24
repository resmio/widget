import React, { PropTypes } from 'react'
import { style, hover, merge } from 'glamor'

import IconArrow from '../IconArrow'

const arrow = style({
  color: '#CCC',
  cursor: 'pointer',
  textAlign: 'left',
  width: '10%'
})

const arrowHover = hover({
  color: '#555'
})

const ExpandButton= ({state}) => (
  <div {...merge(arrow, arrowHover)}>
    <IconArrow direction={state !== 'expanded' ? 'down' : 'up'} />
  </div>

)

ExpandButton.propTypes = {
  state: PropTypes.oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired
}

export default ExpandButton
