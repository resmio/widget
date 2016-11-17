// react & redux
import React from 'react';
import { style } from 'glamor'

// components
import PanelRouter from './components/PanelRouter'
import Footer from './components/Footer'

const AppBase = (props) => {
  const widgetStyle = style({
    minWidth: '300px',
    maxWidth: '736px',
    minHeight: '500px',
    maxHeight: '736px',
    width: props.renderAtMaxSize ? '100%' : props.defaultWidth,
    heigth: props.renderAtMaxSize ? '100%' : props.defaultHeight
  })

  return (
    <div {...widgetStyle}>
      <PanelRouter panel={props.currentPanel} />
      <Footer
        currentPanel={props.currentPanel}
        logo={props.logoUrl}
        buttonColor={props.buttonColor}
        numberOfPanels={props.numberOfPanels}
        onLastClicked={props.postBooking}
        onNextClicked={props.increasePanel}
        onPreviousClicked={props.decreasePanel}
      />
    </div>
  )
}

export default AppBase;
