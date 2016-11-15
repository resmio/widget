import React, { PropTypes } from 'react'
import { style } from 'glamor'

import Logo from './Logo'

const Footer = (props) => {

  const {
    currentPanel,
    numberOfPanels,
    onLastClicked,
    onNextClicked,
    onPreviousClicked
  } = props

  // styles
  const footer = style({
    borderTop: '1px solid #DDD',
    height: '60px',
    width: '100%',
  })

  const stepCounter = style({
    textAlign: 'center',
    color: '#DDD',
    display: 'inline-block',
    width: '13%',
  })

  const isFirstPanel = currentPanel <= 1
  const isLastPanel = currentPanel >= numberOfPanels

  const leftElement = isFirstPanel
    ? <Logo />
    : <button onClick={onPreviousClicked}>BACK</button>

  const rightElement = isLastPanel
    ? <button onClick={onLastClicked}>FINISH</button>
    : <button onClick={onNextClicked}>NEXT</button>


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
