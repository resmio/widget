// Get Availabilities
  // Convert times to 24 hr format
// Split the array each 5 elements
// Render first element
// Render list navigation
// Add a disabled class to unavailable timeslots
// Add a selected class to selected element
// Disable previous times for today

import React from 'react';
import WidgetStore from '../stores/WidgetStore';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class Timeslot extends React.Component {

  render() {
    if (this.props.listOfValues.length !== 0) {
      return (
        <div className="cell">
          <span className="cell__label">Time</span>
          { this.state.ui.timeslotCollapsed ?
              this._renderCollapsed() : this._renderExpanded() }
        </div>
      );
    }
    return (<div className="cell">No Availabilities sorry</div>);
  }

  constructor(props) {
    super(props);
    this.state = WidgetStore.getState();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this._filterAvailabilitiesByCover = this._filterAvailabilitiesByCover.bind(this);
    // We store the splitted array so we don't have to calculate every time
    this.state.listOfValuesGrouped = [];
  }

// -----------------------------------------------------------------------------
// State changers
// -----------------------------------------------------------------------------

  _filterAvailabilitiesByCover(availability) {
    return (availability.available >= this.props.limit);
  }

  _splitValuesIntoGroups() {
    // this splits the availabilities values into groups the size we want to
    // show in the UI
    this.state.listOfValuesGrouped = (
      this.props.listOfValues.filter(this._filterAvailabilitiesByCover).map((element, index) => {
        return index % this.props.groupSize === 0 ?
          this.props.listOfValues.slice(index, index + this.props.groupSize) :
          null;
      }).filter((element) => { return element; })
    );
  }

// -----------------------------------------------------------------------------
// Html Generators
// -----------------------------------------------------------------------------

  _renderCollapsed() {
    if (this.props.listOfValues) { // Need to change this to check after filtering
      return (
          <div
            className="clickable cell__content"
            onClick = { this._handleExpandTimeslotSelectorClick }
          >
            <span>
              { this._renderCollapsedMessage() }
            </span>
            <span className="arrow--down">&#10095;</span>
          </div>
      );
    }
    return (
      <div className="cell__content">NO AVAILABILITIES</div>
    );
  }

  _renderCollapsedMessage() {
    // If we have a timeslot already selected we show its time converted to
    // 24 hour format.
    // If not, we show a message
    return Object.keys(this.state.timeslot).length === 0 ?
      'Select Time' : this.state.timeslot.local_time_formatted;
  }

  _renderExpanded() {
    return (
      <div className="cell__content timeslots-selector">
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

  _renderNextGroupButton() {
    if ( this.state.ui.actualTimeslotsGroup < this.state.listOfValuesGrouped.length - 1 ) {
      return (<span className="list-button--next"
                    onClick={ this._showNextGroup }
              >
                &#10095;
              </span>
      );
    }
  }

  _renderPreviousGroupButton() {
    if ( this.state.ui.actualTimeslotsGroup > 0 ) {
      return (<span className="list-button--prev"
                    onClick={ this._showPreviousGroup }
              >
                &#10094;
              </span>
      );
    }
  }

  _renderVisibleGroup() {
    if (this.state.listOfValuesGrouped.length === 0) {
      return (
        <li>NO AVAILABILITIES</li>
      );
    }
    return this.state.listOfValuesGrouped[this.state.ui.actualTimeslotsGroup].map((availability) => {
      let classString = 'timeslot';
      const clickFunction = this.props.handleClick.bind(this, availability);
      if (availability.checksum === this.state.timeslot.checksum) {
        classString += ' timeslot--selected';
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


  // _renderListOfValues() {
  //   if (this.props.listOfValues) {
  //     // const coveredAvailabilities = this.props.listOfValues
  //     //                                   .filter(
  //     //                                     this._filterAvailabilitiesByCover
  //     //                                   );
  //     const filteredAvailabilities = this.props.listOfValues.splice(this.state.initial, 5);
  //   }
  // }

// -----------------------------------------------------------------------------
// Event handlers
// -----------------------------------------------------------------------------

  _handleExpandTimeslotSelectorClick() {
    ViewActionCreators.timeslotSelectorClicked();
  }

  _showNextGroup() {
    ViewActionCreators.timeslotsListNextClicked();
  }

  _showPreviousGroup() {
    ViewActionCreators.timeslotsListPreviousClicked();
  }
}

// -----------------------------------------------------------------------------
// Props validation
// -----------------------------------------------------------------------------

Timeslot.propTypes = {
  groupSize: React.PropTypes.number,
  limit: React.PropTypes.number,
  handleClick: React.PropTypes.func.isRequired,
  listOfValues: React.PropTypes.array
};
