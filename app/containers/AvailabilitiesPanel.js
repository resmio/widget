import React from 'react';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import ViewActionCreators from '../actions/ViewActionCreators';

// Components
import PersonPicker from '../components/PersonPicker';
import WidgetMessage from '../components/WidgetMessage';
import SelectableDay from '../components/SelectableDay';

export default class AvailabilitiesPanel extends React.Component {

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
          onClick={this.handleClickOnAvailability.bind(this, availability)}
        >
          {availability.local_time_formatted}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <WidgetMessage
          facilityMessage={this.props.widgetMessage}
        />
        <PersonPicker
          selectedNumber={ this.state.covers }
          numbersInTotal={33}
          numbersPerGroup={5}
          handleChange={ this.handleCoverInputChange }
        />
        <SelectableDay
          date={ this.state.date }
        />

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
    this.filterAvailabilitiesByCover = this.filterAvailabilitiesByCover.bind(this);
  }

  filterAvailabilitiesByCover(availability) {
    return (availability.available >= this.state.covers);
  }

  handleCoverInputChange(event) {
    ViewActionCreators.changeNumberOfCovers(parseInt(event.target.value, 10));
  }

  handleClickOnAvailability(availability) {
    ViewActionCreators.timeslotSelected(availability);
  }
}

AvailabilitiesPanel.propTypes = {
  widgetMessage: React.PropTypes.string
};
