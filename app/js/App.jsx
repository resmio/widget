import React from 'react';
import AvailabilitiesStore from './stores/AvailabilitiesStore';
import formatDateForApi from './utils/formatDateForApi';

// Components
import WidgetHeader from './components/WidgetHeader';
import AvailabilitiesPanel from './components/AvailabilitiesPanel';
import PanelSwitcher from './components/PanelSwitcher';

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
    return (
      <div>
        <WidgetHeader
          facilityName={this.props.facilityName}
          reservationCovers={this.state.covers}
          reservationDate={formatDateForApi(this.state.date)}
          reservationTimeslot={this.state.timeslot}
        />
        <AvailabilitiesPanel
          widgetMessage={this.props.widgetMessage}
        />
      <PanelSwitcher panelNumber={this.state.panel} numberOfPanels={3}/>
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
}

App.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  widgetMessage: React.PropTypes.string
};
