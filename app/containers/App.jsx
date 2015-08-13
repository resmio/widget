import React from 'react';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import ViewActionCreators from '../actions/ViewActionCreators';
import formatDateForApi from '../utils/formatDateForApi';

// Containers
import GuestPanel from './GuestPanel';
import AvailabilitiesPanel from './AvailabilitiesPanel';

// Components
import WidgetHeader from '../components/WidgetHeader';
import PanelSwitcher from '../components/PanelSwitcher';

export default class App extends React.Component {

  // Invoked once immediately after the initial rendering occurs
  // We listen for changes to the stores to run a callback when they happen
  componentDidMount() {
    AvailabilitiesStore.addChangeListener(this.handleStoreChange);
  }

  // Invoked once immediately before the initial rendering occurs.
  // We remove previous binded event listener to get a clean state
  componentWillUnmount() {
    AvailabilitiesStore.removeChangeListener(this.handleStoreChange());
  }

  render() {
    const availabilitiesPanel = (<AvailabilitiesPanel
                                  widgetMessage={this.props.widgetMessage}
                                 />);
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.phone}</h2>
        <h2>{this.state.email}</h2>
        <WidgetHeader
          facilityName={this.props.facilityName}
          reservationCovers={this.state.covers}
          reservationDate={formatDateForApi(this.state.date)}
          reservationTimeslot={this.state.timeslot.local_time_formatted}
        />
        <h1>{this.state.showPanel}</h1>
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
    this.state = AvailabilitiesStore.getState();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  handleStoreChange() {
    this.setState(AvailabilitiesStore.getState());
  }

  handleClickOnNextButton() {
    ViewActionCreators.increasePanelNumber();
  }

  handleClickOnPreviousButton() {
    ViewActionCreators.decreasePanelNumber();
  }

  handleClickOnLastButton() {
    ViewActionCreators.postBooking(AvailabilitiesStore.getState());
  }
}

App.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  widgetMessage: React.PropTypes.string
};