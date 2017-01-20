import React, { PropTypes } from 'react'

const IconCheckmark = ({size = '1.2rem'}) => {
  // https://css-tricks.com/currentcolor/
  return (
    <svg width={size} viewBox='0 0 32 32'>
       <path
        d='M16.5,29 C23.4035594,29 29,23.4035594 29,16.5 C29,9.59644063 23.4035594,4 16.5,4 C9.59644063,4 4,9.59644063 4,16.5 C4,23.4035594 9.59644063,29 16.5,29 Z M10,16.5782127 L13.8077294,20.4499607 C14.1971647,20.8459435 14.8330391,20.8406944 15.2187705,20.4476358 L23.5089287,12'
        strokeWidth='1.1'
        stroke='currentColor'
        fill='none'
        transform='translate(0, -2)'
      />
    </svg>
  )
}

IconCheckmark.propTypes = {
  size: PropTypes.string
}

export default IconCheckmark
