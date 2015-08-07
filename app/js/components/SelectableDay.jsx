import './SelectableDay.css';

import React from 'react';
import DayPicker from 'react-day-picker';

import {isPastDay, isSameDay} from '../utils/DateUtils';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import ViewActionCreators from '../actions/ViewActionCreators';

class SelectableDay extends React.Component {

  render() {
    const modifiers = {
      // Add the `disabled` modifier to days in the past. The day cell will have
      // a `DayPicker-Day--disabled` CSS class
      'disabled': isPastDay,

      // We add a `DayPicker-Day--selected` CSS class to selected day
      'selected': (day) => isSameDay(this.state.selectedDay, day)
    };

    return (
        <DayPicker
          modifiers={ modifiers }
          enableOutsideDays={false}
          onDayClick={ this.handleDayClick }
        />
    );
  }

  constructor() {
    super();
    this.state = {
      selectedDay: AvailabilitiesStore.getState().date
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(event, date, modifiers) {
    // If the date is disabled we don't fire the action
    if (modifiers.indexOf('disabled') > -1) {
      return;
    }
    debugger;
    console.log('handleDayClick');
    ViewActionCreators.setNewDate(date);
  }

}

export default SelectableDay;
