import './SelectableDay.css';

import React from 'react';
import DayPicker from 'react-day-picker';

import formatDateForApi from '../utils/formatDateForApi';
import ViewActionCreators from '../actions/ViewActionCreators';

class SelectableDay extends React.Component {

  render() {
    return (
        <DayPicker
          enableOutsideDays={true}
          onDayClick={ this.handleDayClick }
        />
    );
  }

  constructor() {
    super();
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(event, date) {
    const formattedDate = formatDateForApi(date);
    ViewActionCreators.setNewDate(formattedDate);
  }

}

export default SelectableDay;
