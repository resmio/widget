import React, { PropTypes } from 'react'

// The resulting svg has no stroke color so it will show no stroke, it needs
// to be applied via css, this is like this so it can change color on hover of
// the parent (check Footer.jsx for an example on how to style this)

const IconArrow = ({direction}) => {
  // The other two directions can be added here
  // now if no direction is provided we default to right
  const angle = direction === 'left'
    ? '90'
    : '270'

  // https://css-tricks.com/currentcolor/
  return (
    <svg x='0' y='0' viewBox='-1 -1 15 27'>
      <path
        d='M-5.78760153,6.32986167 L5.83237037,18.6879326 C6.20723427,19.0866079 6.81311587,19.0835684 7.18536117,18.68145 L18.7280933,6.21239927'
        id={`arrow-${direction}`}
        strokeWidth='1.3'
        fill='currentColor'
        transform={`translate(6.470246, 12.598699) rotate(${angle}.000000) translate(-6.470246, -12.598699) `}
      >
      </path>
    </svg>
  )
}

IconArrow.propTypes = {
  direction: PropTypes.string
}

export default IconArrow
