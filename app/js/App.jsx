import React from 'react';
import AvailabilitiesStore from './stores/AvailabilitiesStore';
import ViewActionCreators from './actions/ViewActionCreators';
import formatDateForApi from './utils/formatDateForApi';

// Components
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
    // We need to probably filter on the store
    // Move it when refactoring
    const coveredAvailabilities = this.state
                                      .availabilities
                                      .filter(this.filterAvailabilitiesByCover);

    return coveredAvailabilities.map((availability) => {
      return (
        <li
          key={availability.checksum}
          onClick={this.handleClickOnAvailability.bind(this)}
        >
          {availability.local_time_formatted}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <WidgetHeader
          facilityName={this.props.facilityName}
          reservationCovers={this.state.covers}
          reservationDate={formatDateForApi(this.state.date)}
        />
        <WidgetMessage
          facilityMessage={this.props.widgetMessage}
        />
        <PersonPicker
          numberOfCovers={ this.state.covers }
          handleChange={ this.handleCoverInputChange }
        />
        <SelectableDay />

        <ul>
          {this.renderAvailabilities()}
        </ul>

      </div>
    );
  }

  constructor(props) {
    super(props);
    ViewActionCreators.setNewDate(new Date());
    // We trigger the action to get the availabilities for today from here
    // This will update the state , so we render it properly
    this.state = AvailabilitiesStore.getState();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleCoverInputChange = this.handleCoverInputChange.bind(this);
    this.handleClickOnAvailability = this.handleClickOnAvailability.bind(this);
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

  handleClickOnAvailability(event) {
    ViewActionCreators.timeslotSelected(event.target.date);
    console.log(event.target.date);
  }

}

App.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  widgetMessage: React.PropTypes.string
};
