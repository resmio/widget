import React from 'react';
import WidgetStore from '../stores/WidgetStore';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class Timeslot extends React.Component {

  constructor(props) {
    super(props);
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this._filterAvailabilitiesByCover = this._filterAvailabilitiesByCover.bind(this);
    this.state = WidgetStore.getState();
  }

  render() {
    return (
      this.state.timeslotCollapsedOnUi ?
        this._renderCollapsed() : this._renderExpanded()
    );
  }

  _renderCollapsed() {
    let timeslotLegend = 'Select Time';
    if ( Object.keys(this.state.timeslot).length !== 0) {
      timeslotLegend = this.state.timeslot.local_time_formatted;
    }
    return (
      <div className="cell">
        <span className="cell__label">Time</span>
        <div
          className="cell__content"
          onClick = { this._handleExpandTimelostSelectorClick }
        >
          { timeslotLegend }
        </div>
      </div>
    );
  }

  _renderExpanded() {
    return (
      <div className="timeslots-selector">
        <ul className="timeslots-filter">
          <li onClick={this._filterByTime(0)}>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
        <a className="button-list--back" href="#">&lt;</a>
        <ul className="timeslots-list">
          { this._renderListOfValues() }
        </ul>
        <a className="button-list--forward" href="#">&gt;</a>
      </div>
    );
  }

  _renderListOfValues() {
    if (this.props.listOfValues) {
      const coveredAvailabilities = this.props.listOfValues
                                        .filter(
                                          this._filterAvailabilitiesByCover
                                        );

      return coveredAvailabilities.map((availability) => {
        return (
          <li
            key={availability.checksum}
            onClick={this.props.handleClick.bind(this, availability)}
          >
            {availability.local_time_formatted}
          </li>
        );
      });
    }
  }

  _filterAvailabilitiesByCover(availability) {
    return (availability.available >= this.props.limit); // FAILS!
  }

  _handleExpandTimelostSelectorClick() {
    ViewActionCreators.timeslotSelectorClicked();
  }

  _filterByTime(number) {
    console.log(number);
  }

}

Timeslot.propTypes = {
  limit: React.PropTypes.number,
  handleClick: React.PropTypes.func.isRequired,
  listOfValues: React.PropTypes.array
};
