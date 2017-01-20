import React, { PropTypes } from 'react'

const IconCircledX = ({size = '1.2rem'}) => {
  // https://css-tricks.com/currentcolor/
  return (
    <svg width={size} viewBox='0 0 32 32'>
      <path
        d='M16,30 C23.1797017,30 29,24.1797017 29,17 C29,9.82029825 23.1797017,4 16,4 C8.82029825,4 3,9.82029825 3,17 C3,24.1797017 8.82029825,30 16,30 Z M21.3061224,11.6938776 L10.6938776,22.3061224 M10.6938776,11.6938776 L21.3061224,22.3061224'
        stroke='currentColor'
        strokeWidth='1.3'
        fill='none'
      />
    </svg>
  )
}

IconCircledX.propTypes = {
  size: PropTypes.string
}

export default IconCircledX
