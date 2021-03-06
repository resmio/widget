import React, { PropTypes } from 'react'
import { style, merge, select as $ } from 'glamor'
import {injectIntl, FormattedMessage} from 'react-intl';

import Logo from './Logo'

// FIXME
// This (the icon arrow) is just missing the stroke color when it's not hovered
// somehow I can not make it work, it's just an aesthetic thing so I'm moving
// forward and we will fix it later if we have time.
// import IconArrow from './IconArrow'

// styles
const left = style({
  marginLeft: '15px'
})

const footer = style({
  alignItems: 'center',
  bottom: '0',
  display: 'flex',
  fontSize: '1.2em',
  height: '6em',
  justifyContent: 'center',
  left: '0',
  position: 'absolute',
  right: '0',
})

const stepCounter = style({
  color: '#DDD',
  flex:'1',
  textAlign: 'center'
})

const Footer = (props) => {
  const {
    buttonColor,
    buttonDisabled,
    currentPanel,
    numberOfPanels,
    onLastClicked,
    onNextClicked,
    onPreviousClicked,
  } = props

  // styles
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
      lineHeigth: '1',
      maxWidth: '100px',
      marginRight: '15px'
    },
    $('svg', {
      stroke: buttonColor,
      width: '40px'
    }),
    $(':hover', {
      background: buttonDisabled || buttonColor,
      color: buttonDisabled || 'white',
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

const disabled = style({
  background: 'white',
  color: '#EEEEEE',
  borderColor: '#EEEEEE'
})

  // helper functions
  // FIXME: Move this to a selector
  const isFirstPanel = currentPanel <= 1
  const isLastPanel = currentPanel >= numberOfPanels

  // what to render
  const leftElement = isFirstPanel
    ? <Logo />
    : <button {...merge(button, left)} onClick={onPreviousClicked}>
        <FormattedMessage
          id="footer.back"
          description="Footer back button"
          defaultMessage="Back"/>
      </button>

  const rightElement = isLastPanel
    ? <button {...merge(button, buttonDisabled && disabled)} onClick={onLastClicked} disabled={buttonDisabled}>
      <FormattedMessage
        id="footer.book"
        description="Footer book button"
        defaultMessage="Book"/>
    </button>
    : <button {...merge(button, buttonDisabled && disabled)} onClick={onNextClicked} disabled={buttonDisabled}>
      <FormattedMessage
        id="footer.next"
        description="Footer next button"
        defaultMessage="Next"/>
    </button>

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
  buttonColor: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  currentPanel: PropTypes.number,
  numberOfPanels: PropTypes.number,
  onNextClicked: PropTypes.func,
  onPreviousClicked: PropTypes.func,
  onLastClicked: PropTypes.func
}

export default injectIntl(Footer)
