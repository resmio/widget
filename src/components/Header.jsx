import React, { PropTypes } from 'react'
import { style, merge } from 'glamor'
import { withTranslate } from 'react-redux-multilingual'

const heading = style({
  fontSize: '18px',
  fontWeight: 'bold',
  paddingLeft: '15px',
  paddingTop: '12px'
})

const subHeading = style({
  fontSize: '14px',
  fontWeight: 'normal',
  paddingLeft: '15px',
  paddingTop: '4px'
})

const Header = ({bgImage, bgColor, color, subheaderText, translate}) => {
  // styles
  // For the background image magic see:
  // https://css-tricks.com/snippets/css/transparent-background-images/
  const header = style({
    background: bgColor,
    height: '6em',
    position: 'relative',
    zIndex: '-1', // This is to put it at the same level as the bg image
    width: '100%',
    // This attaches the background image and gives it transparency
    '::before': {
      content: '""',
      background: `url(${bgImage})`,
      backgroundSize: 'cover',
      bacgroundPosition: 'middle',
      opacity: '0.5',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '-1' // We need this so it does not obscure the text
    }
  })

  const headerText = style({
    color: color
  })

  return (
    <header {...header}>
      <h2 {...merge(heading, headerText)}>
        {translate('Online Booking')}
      </h2>
      <h1 {...merge(subHeading, headerText)}>
        {subheaderText}
      </h1>
    </header>
  )
}

const {string} = PropTypes

Header.propTypes = {
  bgImage: string,
  bgColor: string,
  subheaderText: string
}

export default withTranslate(Header)
