// react & redux
import React from 'react';
import { style } from 'glamor'

// components
import PanelRouter from '../components/PanelRouter'
import Footer from '../components/Footer'

const AppBase = (props) => {
  const {
    // Variables
    buttonColor,
    defaultHeight,
    defaultWidth,
    logoUrl,
    numberOfPanels,
    renderAtMaxSize
  } = props.custom

  const {
    currentPanel
  } = props.ui

  const {
    reducePanel,
    advancePanel,
    postBooking
  } = props

  // generate styles
  const widgetSS = style({
    minWidth: '300px',
    maxWidth: '736px',
    maxHeight: '736px',
    minHeight: '500px',
    width: renderAtMaxSize ? '100%' : defaultWidth,
    heigth: renderAtMaxSize ? '100%' : defaultHeight
  })

  return (
    <div {...widgetSS}>
      <PanelRouter panel={currentPanel} />
      <Footer
        currentPanel={currentPanel}
        logo={logoUrl}
        buttonColor={buttonColor}
        numberOfPanels={numberOfPanels}
        onLastClicked={postBooking}
        onNextClicked={advancePanel}
        onPreviousClicked={reducePanel}
      />
    </div>
  )
}

export default AppBase;
