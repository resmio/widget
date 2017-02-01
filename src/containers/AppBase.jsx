// react & redux
import React, { Component } from 'react';
import { style } from 'glamor'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'
import { getDisplayBooking, isNextButtonEnabled } from '../selectors'

// components
import Header from '../components/Header'
import PanelRouter from '../components/PanelRouter'
import Footer from '../components/Footer'

class AppBase extends Component {
  componentDidMount() {
    // FIXME: Not sure about calling this here
    this.props.appInit()
  }

  render() {
    const {
      buttonColor,
      currentPanel,
      defaultHeight,
      defaultWidth,
      facility,
      headerColor,
      headerTextColor,
      headerImage,
      logoUrl,
      numberOfPanels,
      renderAtMaxSize
    } = this.props.state

    const {
      advancePanel,
      bookingInfo,
      buttonEnabled,
      postBooking,
      reducePanel
    } = this.props

    // generate styles
    const widgetSS = style({
      fontSize: '10px',
      height: renderAtMaxSize ? '100%' : defaultHeight,
      maxHeight: '736px',
      maxWidth: '736px',
      minHeight: '500px',
      minWidth: '300px',
      position: 'relative',
      width: renderAtMaxSize ? '100%' : defaultWidth,
      zIndex: '10000 !important'
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
    state,
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
