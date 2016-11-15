import React, { PropTypes } from 'react'
import { style } from 'glamor'

const Header = ({bgImage, bgColor, children}) => {
  // styles
  // For the background image magic see:
  // https://css-tricks.com/snippets/css/transparent-background-images/
  const header = style({
    background: bgColor,
    height: '60px',
    position: 'relative',
    zIndex: '-1', // This is to put it at the same level as the bg image
    width: '100%',
    // This attaches the background image and gives it transparency
    '::before': {
      content: '""',
      background: `url(${bgImage})`,
      backgroundSize: 'cover',
      opacity: '0.5',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '-1' // We need this so it does not obscure the text
    }
  })

  return (
    <div className={`${header}`}>
      {children}
    </div>
  )
}

Header.propTypes = {
  bgImage: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
}

export default Header
