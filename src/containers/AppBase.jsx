// Move all this stuff to AppBase
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'
import { getDisplayBooking, isNextButtonEnabled } from '../selectors'

// react & redux
import React, { Component } from 'react';
import { style } from 'glamor'

// components
import Header from '../components/Header'
import PanelRouter from '../components/PanelRouter'
import Footer from '../components/Footer'

class AppBase extends Component {
  componentDidMount() {
    this.props.appInit()
  }

  render() {
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
    } = this.props.custom

    const {
      currentPanel
    } = this.props.ui

    const {
      reducePanel,
      advancePanel,
      bookingInfo,
      postBooking,
      buttonEnabled
    } = this.props

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

    const footer = (
      <Footer
        currentPanel={currentPanel}
        logo={logoUrl}
        buttonColor={buttonColor}
        numberOfPanels={numberOfPanels}
        onLastClicked={postBooking}
        onNextClicked={advancePanel}
        onPreviousClicked={reducePanel}
        buttonDisabled={!buttonEnabled}
      />
    )

    return (
      <div {...widgetSS}>
        <Header
          bgImage={headerImage}
          bgColor={headerColor}
          color={headerTextColor}
          subheaderText={ currentPanel === 1 ? facility : bookingInfo }
        />
        <PanelRouter panel={currentPanel} />
        { currentPanel <= numberOfPanels ? footer : null }
      </div>
    )
  }
}

// Wiring
const mapStateToProps = (state) => {
  return {
    custom: state.custom,
    ui: state.ui,
    bookingInfo: getDisplayBooking(state),
    buttonEnabled: isNextButtonEnabled(state)
  }
}

const  mapDispachToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(AppBase)
