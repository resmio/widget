import React from 'react';
import AvailabilitiesStore from './stores/AvailabilitiesStore';
import ViewActionCreators from './actions/ViewActionCreators';
import formatDateForApi from './utils/formatDateForApi';

import PersonPicker from './components/PersonPicker';
import WidgetHeader from './components/WidgetHeader';
import WidgetMessage from './components/WidgetMessage';
import SelectableDay from './components/SelectableDay';

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

  renderAvailabilities() {
    const coveredAvailabilities = this.state.availabilities.filter(this.filterAvailabilitiesByCover);

    return coveredAvailabilities.map((availability) => {
      return (<li key={availability.checksum}>
        {availability.local_time_formatted}
      </li>);
    }
  );
  }

  render() {
    return (
      <div>
        <WidgetHeader
          facilityName={this.props.facilityName}
          reservationCovers={this.state.covers}
          reservationDate={this.state.date}
        />
        <WidgetMessage
          facilityMessage={this.props.widgetMessage}
        />
      <PersonPicker
        numberOfCovers={ this.state.covers }
        handleChange={ this.handleCoverInputChange }
      />
    <SelectableDay />

        <ul>{this.renderAvailabilities()}</ul>
      </div>
    );
  }

  constructor(props) {
    super(props);
    ViewActionCreators.setNewDate(formatDateForApi(new Date()));
    // ViewActionCreators.requestAvailabilities('2015-08-20');
    // We are just getting the availabilites for the state of the app for now
    // This will change in the future
    this.state = AvailabilitiesStore.getState();

    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleCoverInputChange = this.handleCoverInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.filterAvailabilitiesByCover = this.filterAvailabilitiesByCover.bind(this);
  }

  filterAvailabilitiesByCover(availability) {
    return (availability.available >= this.state.covers);
  }

  handleStoreChange() {
    this.setState(AvailabilitiesStore.getState());
  }

  handleCoverInputChange(event) {
    ViewActionCreators.changeNumberOfCovers(parseInt(event.target.value, 10));
  }

}

App.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  widgetMessage: React.PropTypes.string
};
