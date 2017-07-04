// react & redux
import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import { style } from 'glamor'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'
import { getSelectedAvailability, isNextButtonEnabled } from '../selectors'
import { formatLocalDate } from '../utils/dates'

// components
import Header from '../components/Header'
import PanelRouter from '../components/PanelRouter'
import Footer from '../components/Footer'

// Analytics
import { analyticsSetup, analyticsIframe } from '../utils/googleAnalytics'

const messages = defineMessages({
    'AppBaseMessageSingular': {
      id: 'AppBase.MessageSingular',
      description: 'guests singular',
      defaultMessage: 'guest'
    },
    'AppBaseMessagePlural': {
      id: 'AppBase.MessagePlural',
      description: 'guests plural',
      defaultMessage: 'guests'
    }
})


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
      facilityEntity,
      headerColor,
      headerTextColor,
      headerImage,
      logoUrl,
      numberOfPanels,
      renderAtMaxSize,
      selectedGuests
    } = this.props.widget

    const {
      advancePanel,
      buttonEnabled,
      postBooking,
      reducePanel,
      availability,
      intl
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

    let bookingInfo = ''
    if (availability) {
      const legendSingular = intl.formatMessage(messages.AppBaseMessageSingular)
      const legendPlural = intl.formatMessage(messages.AppBaseMessagePlural)
      const legend = selectedGuests === 1 ? legendSingular : legendPlural
      bookingInfo = `${selectedGuests} ${legend}, ${formatLocalDate(availability.local_date_formatted)}`
    }

    return (
      <div {...widgetSS}>
        { this.analyticsCodeLoaded && <analyticsIframe /> }
        <Header
          bgImage={headerImage}
          bgColor={headerColor}
          color={headerTextColor}
          subheaderText={ currentPanel === 1 ? (facilityEntity && facilityEntity.name) : bookingInfo }
        />
        <PanelRouter panel={currentPanel} />
        { currentPanel <= numberOfPanels ? footer : null }
      </div>
    )
  }
}

// Wiring
const mapStateToProps = ({widget}) => {
  return {
    widget,
    availability: getSelectedAvailability(widget),
    buttonEnabled: isNextButtonEnabled(widget)
  }
}

const  mapDispachToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(injectIntl(AppBase))
