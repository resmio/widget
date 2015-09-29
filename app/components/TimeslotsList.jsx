// Get Availabilities
// Split the array each 5 elements
// Render first element
// Render list navigation
// Add a disabled class to unavailable timeslots
// Add a selected class to selected element
// Implement shortcut buttons actions
// Implement shortcut buttons highlighting
// Disable previous times for today

import React from 'react';
import WidgetStore from '../stores/WidgetStore';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class Timeslot extends React.Component {

  constructor(props) {
    super(props);
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this._filterAvailabilitiesByCover = this._filterAvailabilitiesByCover.bind(this);
    this._showNextGroup = this._showNextGroup.bind(this);
    this._showPreviousGroup = this._showPreviousGroup.bind(this);
    this.state = WidgetStore.getState();
    this.state.initial = 0;
    // This should be passed as props
    this.state.arraySize = 5;
    this.state.groupOfValues = [];
  }

  render() {
    return (
      this.state.timeslotCollapsedOnUi ?
        this._renderCollapsed() : this._renderExpanded()
    );
  }

  _renderCollapsed() {
    return (
      <div className="cell">
        <span className="cell__label">Time</span>
        <div
          className="cell__content"
          onClick = { this._handleExpandTimeslotSelectorClick }
        >
          { this._renderCollapsedMessage() }
        </div>
      </div>
    );
  }

  _renderCollapsedMessage() {
    // If we have a timeslot already selected we show its time
    // If not, we show a message
    return Object.keys(this.state.timeslot).length === 0 ?
      'Select Time' : this.state.timeslot.local_time_formatted;
  }

  _renderExpanded() {
    return (
      <div className="timeslots-selector">
        <ul className="timeslots-filter">
          <li onClick={this._filterByTime(0)}>Breakfast</li>
          <li onClick={this._filterByTime(5)}>Lunch</li>
          <li>Dinner</li>
        </ul>
        { this._renderPreviousGroupButton() }
        <ul className="timeslots-list">
          { this._renderListOfValues() }
        </ul>
        { this._renderNextGroupButton() }
      </div>
    );
  }

  _renderListOfValues() {
    if (this.props.listOfValues) {
      this._splitValuesIntoGroups();
      return this._renderVisibleGroup();
    }
  }

  _splitValuesIntoGroups() {
    // this splits the availabilities values into groups the size we want to
    // show in the UI
    this.state.groupsOfValues = this.props.listOfValues.map((element, index) => {
      return index % this.state.arraySize === 0 ?
        this.props.listOfValues.slice(index, index + this.state.arraySize) :
        null;
    }).filter((e) => { return e; });
  }

  _renderVisibleGroup() {
    return this.state.groupsOfValues[this.state.ui.actualTimeslotsGroup].map((availability) => {
      let classString = '';
      let clickFunction = this.props.handleClick.bind(this, availability);
      if (this._filterAvailabilitiesByCover(availability)) {
        classString = 'disabled';
        clickFunction = null;
      }
      if (availability.checksum === this.state.timeslot.checksum) {
        classString = 'selected';
      }
      return (
        <li
          key={availability.checksum}
          onClick={clickFunction}
          className={classString}
        >
          {availability.local_time_formatted}
        </li>
      );
    });
  }

  _renderNextGroupButton() {
    if ( this.state.ui.actualTimeslotsGroup < this.state.groupsOfValues.length - 1 ) {
      return (<span className="button-list--backward"
                    onClick={ this._showNextGroup }
              >
                &gt;
              </span>
      );
    }
  }

  _renderPreviousGroupButton() {
    if ( this.state.ui.actualTimeslotsGroup > 0 ) {
      return (<span className="button-list--backward"
                    onClick={ this._showPreviousGroup }
              >
                &lt;
              </span>
      );
    }
  }

  // _renderListOfValues() {
  //   if (this.props.listOfValues) {
  //     // const coveredAvailabilities = this.props.listOfValues
  //     //                                   .filter(
  //     //                                     this._filterAvailabilitiesByCover
  //     //                                   );
  //     const filteredAvailabilities = this.props.listOfValues.splice(this.state.initial, 5);
  //   }
  // }

  _filterAvailabilitiesByCover(availability) {
    return (availability.available <= this.props.limit);
  }

  _handleExpandTimeslotSelectorClick() {
    ViewActionCreators.timeslotSelectorClicked();
  }

  _filterByTime(number) {
    this.state.initial = number;
  }

  _showNextGroup() {
    ViewActionCreators.timeslotsListNextClicked();
  }

  _showPreviousGroup() {
    ViewActionCreators.timeslotsListPreviousClicked();
  }

}

Timeslot.propTypes = {
  limit: React.PropTypes.number,
  handleClick: React.PropTypes.func.isRequired,
  listOfValues: React.PropTypes.array
};
