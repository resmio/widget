import React, { PropTypes } from 'react'

// The resulting svg has no stroke color so it will show no stroke, it needs
// to be applied via css, this is like this so it can change color on hover of
// the parent (check Footer.jsx for an example on how to style this)
const getRotation = (direction) => {
  switch (direction) {
    case 'left':
      return '90'
    case 'right':
      return '270'
    case 'up':
      return '180'
    case 'down':
      return '0'
    default:
      return '270'
  }
}

const IconArrow = ({direction, size = '1.2rem'}) => {
  // https://css-tricks.com/currentcolor/
  return (
    <svg width={size} viewBox='-1 -1 15 27'>
      <path
        d='M-5.78760153,6.32986167 L5.83237037,18.6879326 C6.20723427,19.0866079 6.81311587,19.0835684 7.18536117,18.68145 L18.7280933,6.21239927'
        id={`arrow-${direction}`}
        strokeWidth='1.1'
        stroke='currentColor'
        fill='none'
        transform={`translate(6.470246, 12.598699) rotate(${getRotation(direction)}.000000) translate(-6.470246, -12.598699) `}
      >
      </path>
    </svg>
  )
}

IconArrow.propTypes = {
  direction: PropTypes.string
}

export default IconArrow
