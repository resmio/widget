import React from 'react';
import WidgetStore from '../stores/WidgetStore';
import ViewActionCreators from '../actions/ViewActionCreators';
import formatDateForApi from '../utils/formatDateForApi';

// Containers
import GuestPanel from './GuestPanel';
import AvailabilitiesPanel from './AvailabilitiesPanel';

// Components
import WidgetHeader from '../components/WidgetHeader';
import BookingInfo from '../components/BookingInfo';
import PanelSwitcher from '../components/PanelSwitcher';

export default class App extends React.Component {

  // Invoked once immediately after the initial rendering occurs
  // We listen for changes to the stores to run a callback when they happen
  componentDidMount() {
    WidgetStore.addChangeListener(this.handleStoreChange);
  }

  // Invoked once immediately before the initial rendering occurs.
  // We remove previous binded event listener to get a clean state
  componentWillUnmount() {
    WidgetStore.removeChangeListener(this.handleStoreChange());
  }

  render() {
    const availabilitiesPanel = (<AvailabilitiesPanel
                                  facilityId={this.props.facilityId}
                                  widgetMessage={this.props.widgetMessage}
                                 />);
    return (
      <div className="widget-container">
        <div className="widget-header-container">
          <WidgetHeader
            facilityName={this.state.name}
          />
          <BookingInfo
            reservationCovers={this.state.covers}
            reservationDate={formatDateForApi(this.state.date)}
            reservationTimeslot={this.state.timeslot.local_time_formatted}
          />
        </div>
          {(() => {
            switch (this.state.showPanel) {
              case 1: return availabilitiesPanel;
              case 2: return (<GuestPanel />);
              default: return availabilitiesPanel;
            }
          })()}
          <PanelSwitcher showPanel={this.state.showPanel}
                         numberOfPanels={2}
                         handleClickOnLastButton={this.handleClickOnLastButton}
                         handleClickOnNextButton={this.handleClickOnNextButton}
                         handleClickOnPreviousButton={
                                                      this.
                                                      handleClickOnPreviousButton
                                                     }
          />
      </div>
    );
  }

  constructor(props) {
    super(props);
    // We trigger the action to get the availabilities for today from here
    // This will update the state , so we render it properly
    this.state = WidgetStore.getState();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentWillMount() {
    ViewActionCreators.initializeWidget(this.props.facilityId);
  }

  handleStoreChange() {
    this.setState(WidgetStore.getState());
  }

  handleClickOnNextButton() {
    ViewActionCreators.increasePanelNumber();
  }

  handleClickOnPreviousButton() {
    ViewActionCreators.decreasePanelNumber();
  }

  handleClickOnLastButton() {
    ViewActionCreators.postBooking(WidgetStore.getState());
  }
}

App.propTypes = {
  facilityId: React.PropTypes.string.isRequired,
  widgetMessage: React.PropTypes.string
};
