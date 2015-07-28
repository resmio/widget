import React from 'react';
import DayPicker from 'react-day-picker';
import {isSameDay} from '../utils/DateUtils';

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
  }

  handleDayClick(e, day) {
    console.log('Day %s has been clicked', day.toString());
  }

}

export default SelectableDay;
