// react & redux
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'
import { getDisplayBooking, isNextButtonEnabled } from '../selectors'

// styles
import jss from 'jss'
import isolate from 'jss-isolate'
import preset from 'jss-preset-default'

// components
import Header from '../components/Header'
import PanelRouter from '../components/PanelRouter'
import Footer from '../components/Footer'

// Analytics
import { analyticsSetup, analyticsIframe } from '../utils/googleAnalytics'

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
    jss.setup(preset())
    // jss.use(isolate({reset: 'all'}))

    const styles = {
      widgetSS: {
        backgroundColor: 'white',
        fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
        fontSize: 10,
        height: renderAtMaxSize ? '100%' : defaultHeight,
        maxHeight: 736,
        maxWidth: 736,
        minHeight: 500,
        minWidth: 300,
        position: 'relative',
        width: renderAtMaxSize ? '100%' : defaultWidth,
        zIndex: '10000 !important'
      }
    }

    const {classes} = jss.createStyleSheet(styles, {isolate: true}).attach()

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
     <div className={classes.widgetSS}>
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

export default connect(mapStateToProps, mapDispachToProps)(AppBase)
