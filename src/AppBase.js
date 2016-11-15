// react & redux
import React from 'react';

// components
import PanelRouter from './components/PanelRouter'
import Footer from './components/Footer'

const AppBase = (props) => (
  <div className="widget">
    <PanelRouter panel={props.currentPanel} />
    <Footer
      currentPanel={props.currentPanel}
      logo={props.logoUrl}
      numberOfPanels={props.numberOfPanels}
      onLastClicked={props.postBooking}
      onNextClicked={props.increasePanel}
      onPreviousClicked={props.decreasePanel}
    />
  </div>
)

export default AppBase;
