import React from 'react';
import WidgetStore from '../stores/WidgetStore';
import ViewActionCreators from '../actions/ViewActionCreators';

// Components
import NumberPicker from '../components/NumberPicker';
import WidgetMessage from '../components/WidgetMessage';
import SelectableDay from '../components/SelectableDay';

export default class AvailabilitiesPanel extends React.Component {

  renderAvailabilities() {
    // We need to check if availabilities have been retrieved from the server
    // otherwise this returns undefined and breaks the app
    if (this.state.availabilities) {
      const coveredAvailabilities = this.state
                                        .availabilities
                                        .filter(
                                          this.filterAvailabilitiesByCover
                                        );

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
  }

  render() {
    return (
      <div className="panel">
        <WidgetMessage
          facilityMessage={this.props.widgetMessage}
        />
        <NumberPicker
          selectedNumber={ this.state.covers }
          numbersInTotal={19}
          numbersPerGroup={6}
          handleChange={ this.handleCoverInputChange }
        />
        <SelectableDay
          date={ this.state.date }
          facilityId = { this.props.facilityId }
        />

        <ul>
          {this.renderAvailabilities()}
        </ul>

      </div>
    );
  }

  constructor(props) {
    super(props);
    ViewActionCreators.setNewDate(this.props.facilityId, new Date());
    // We trigger the action to get the availabilities for today from here
    // This will update the state , so we render it properly
    this.state = WidgetStore.getState();
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
  facilityId: React.PropTypes.string,
  widgetMessage: React.PropTypes.string
};
