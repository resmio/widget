// react & redux
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'
import { getDisplayBooking, isNextButtonEnabled } from '../selectors'

// styles
import injectSheet from 'react-jss'

// components
import Header from '../components/Header'
import PanelRouter from '../components/PanelRouter'
import Footer from '../components/Footer'

// Analytics
import { analyticsSetup, analyticsIframe } from '../utils/googleAnalytics'

// generate styles
const styles = {
  widget: {
    background: 'white',
    fontSize: '10px',
    fontFamily: 'sans-serif',
    height: props => props.state.renderAtMaxSize ? '100%' : props.state.defaultHeight,
    maxHeight: '736px',
    maxWidth: '736px',
    minHeight: '500px',
    minWidth: '300px',
    position: 'relative',
    width: props => props.state.renderAtMaxSize ? '100%' : props.state.defaultWidth,
    zIndex: '10000 !important'
  }
}

class AppBase extends Component {
  state = {
    analyticsCodeLoaded: false
  }

  componentDidMount() {
    // FIXME: Not sure about calling this here
    this.props.appInit()
    analyticsSetup()
    setTimeout(function() { this.setState({analyticsCodeLoaded: true}); }.bind(this), 3000)
  }

  render() {
    const {
      buttonColor,
      currentPanel,
      facility,
      headerColor,
      headerTextColor,
      headerImage,
      logoUrl,
      numberOfPanels
    } = this.props.state

    const {
      advancePanel,
      bookingInfo,
      buttonEnabled,
      postBooking,
      reducePanel,
      classes
    } = this.props

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
      <div className={classes.widget} >
        { this.state.analyticsCodeLoaded && <analyticsIframe /> }
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

const styledAppBase = injectSheet(styles)(AppBase)
export default connect(mapStateToProps, mapDispachToProps)(styledAppBase)
