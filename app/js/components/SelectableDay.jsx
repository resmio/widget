import './SelectableDay.css';

import React from 'react';
import DayPicker from 'react-day-picker';

import formatDateForApi from '../utils/formatDateForApi';
import {isPastDay} from '../utils/DateUtils';
import ViewActionCreators from '../actions/ViewActionCreators';

class SelectableDay extends React.Component {

  render() {
    const modifiers = {
      // Add the `disabled` modifier to days in the past. The day cell will have
      // a `DayPicker-Day--disabled` CSS class
      'disabled': isPastDay
    };

    return (
        <DayPicker
          modifiers={ modifiers }
          enableOutsideDays={true}
          onDayClick={ this.handleDayClick }
        />
    );
  }

  constructor() {
    super();
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(event, date, modifiers) {
    if (modifiers.indexOf('disabled') > -1) {
      return;
    }
    const formattedDate = formatDateForApi(date);
    ViewActionCreators.setNewDate(formattedDate);
  }

}

export default SelectableDay;
