import React from 'react';
import DayPicker from 'react-day-picker';
import {isSameDay} from '../utils/DateUtils';
// import './SelectableDay.css';
import ViewActionCreators from '../actions/ViewActionCreators';
import {formatDateForApi} from '../utils/ApiUtils';

class SelectableDay extends React.Component {

  render() {
    const { selectedDay } = this.state;

    // Add the `selected` modifier to the cell corresponding to the day that
    // has been clicked. The cell will have a `DayPicker-Day--selected` CSS class.
    const modifiers = {
      'selected': (day) => isSameDay(selectedDay, day)
    };

    return (
      <div>
        <DayPicker enableOutsideDays={true} modifiers={ modifiers } onDayClick={ this.handleDayClick } />
        <p>
          Selected: { selectedDay.toLocaleDateString() }
        </p>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      selectedDay: new Date()
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(e, day) {
    this.setState({
      selectedDay: day
    });
    debugger;
    ViewActionCreators.requestAvailabilities(formatDateForApi(day));
  }

}

export default SelectableDay;
