import React, { PropTypes } from 'react'
import { style, merge, select as $ } from 'glamor'

import Logo from './Logo'

// This (the icon arrow) is just missing the stroke color when it's not hovered
// somehow I can not make it work, it's just an aesthetic thing so I'm moving
// forward and we will fix it later if we have time.
// import IconArrow from './IconArrow'

const Footer = (props) => {
  const {
    currentPanel,
    numberOfPanels,
    onLastClicked,
    onNextClicked,
    onPreviousClicked,
    buttonColor,
    buttonDisabled
  } = props

  // styles
  const footer = style({
    alignItems: 'center',
    fontSize: '1.2rem',
    display: 'flex',
    height: '6em',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    justifyContent: 'center',
  })

  const stepCounter = style({
    color: '#DDD',
    flex:'1',
    textAlign: 'center'
  })

  const button = merge(
    {
      fontSize: '1.3em',
      background: 'white',
      border: `1px solid ${buttonColor}`,
      borderRadius: '4px',
      color: buttonColor,
      cursor: 'pointer',
      flex: '1',
      height: '35px',
      maxWidth: '100px',
      marginRight: '15px'
    },
    $('svg', {
      stroke: 'red',
      width: '40px'
    }),
    $(':hover', {
      background: buttonColor,
      color: 'white',
    }),
    $(':focus', {
      outline: 'none'
    }),
    // Next two styles are for the arrows svg included in the buttons, the
    // reason to style them here is because we want the hover on the parent
    // change its stroke color.
    // Check this http://stackoverflow.com/a/38510022/2565132
    // And this for how we use glamor:
    // https://github.com/threepointone/glamor/blob/master/docs/howto.md#pseudoclasses
    $(':hover svg', {
      stroke: 'white',
    })
  )

  const left = style({
    marginLeft: '15px'
  })

  // helper functions
  const isFirstPanel = currentPanel <= 1
  const isLastPanel = currentPanel >= numberOfPanels

  // what to render
  const leftElement = isFirstPanel
    ? <Logo />
    : <button {...merge(button, left)} onClick={onPreviousClicked}>Back</button>

  const rightElement = isLastPanel
    ? <button {...button} onClick={onLastClicked} disabled={buttonDisabled}>Book Now</button>
    : <button {...button} onClick={onNextClicked} disabled={buttonDisabled}>Next</button>

  // actual render
  return (
    <footer {...footer}>
      {leftElement}
      <span {...stepCounter}>{`${currentPanel}/${numberOfPanels}`}</span>
      {rightElement}
    </footer>
  )
}

Footer.propTypes = {
  currentPanel: PropTypes.number,
  numberOfPanels: PropTypes.number,
  onNextClicked: PropTypes.func,
  onPreviousClicked: PropTypes.func,
  onLastClicked: PropTypes.func
}

export default Footer
