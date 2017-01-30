import React, { PropTypes } from 'react'
import { style, hover, merge } from 'glamor'
import { colors } from '../../styles/variables'

import IconArrow from '../IconArrow'

const arrow = style({
  color: colors.silver,
  cursor: 'pointer',
  textAlign: 'left',
  width: '10%'
})

const arrowHover = hover({
  color: colors.emperor
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
