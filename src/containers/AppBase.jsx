// Move all this stuff to AppBase
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'

// react & redux
import React from 'react';
import { style } from 'glamor'

// components
import Header from '../components/Header'
import PanelRouter from '../components/PanelRouter'
import Footer from '../components/Footer'

const AppBase = (props) => {
  const {
    buttonColor,
    defaultHeight,
    defaultWidth,
    facility,
    headerColor,
    headerTextColor,
    headerImage,
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
    height: renderAtMaxSize ? '100%' : defaultHeight,
    position: 'relative'
  })

  return (
    <div {...widgetSS}>
      <Header
        bgImage={headerImage}
        bgColor={headerColor}
        color={headerTextColor}
        subheaderText={ currentPanel === 1 ? facility : 'Booking Info' }
      />
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

// Wiring
const mapStateToProps = (state) => {
  return {
    custom: state.custom,
    ui: state.ui
  }
}

const  mapDispachToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(AppBase)
