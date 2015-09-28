import React from 'react';
import DayPicker from 'react-day-picker';

import {isPastDay, isSameDay} from '../utils/DateUtils';
import formatDateForView from '../utils/FormatDateForView';
import ViewActionCreators from '../actions/ViewActionCreators';

class SelectableDay extends React.Component {

  render() {
    return (<div className="cell">
              <span className="cell__label--top">Date</span>
              <div className="cell__content">
                { this._renderMainComponent() }
              </div>
            </div>
           );
  }

  _renderMainComponent() {
    let component = '';
    // We check if the element is collapsed and return accordingly
    if (this.props.collapsed) {
      component = this._renderCollapsedComponent();
    } else {
      component = this._renderExpandedComponent();
    }
    return component;
  }

  _renderCollapsedComponent() {
    return (<div className="clickable DayPicker--collapsed"
                 onClick={this._handleClickOnCollapsedDate }
            >
              { formatDateForView(this.props.date) }
              <span className="arrow--down">&#10095;</span>
            </div>
          );
  }

  _renderExpandedComponent() {
    const modifiers = {
      // Add the `disabled` modifier to days in the past. The day cell will have
      // a `DayPicker-Day--disabled` CSS class
      'disabled': isPastDay,

      // We add a `DayPicker-Day--selected` CSS class to selected day
      'selected': (day) => isSameDay(this.props.date, day)
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
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(event, date, modifiers) {
    // If the date is disabled we don't fire the action
    if (modifiers.indexOf('disabled') > -1) {
      return;
    }
    ViewActionCreators.dateClicked(this.props.facilityId, date);
  }

  _handleClickOnCollapsedDate() {
    ViewActionCreators.collapsedDateClicked();
  }

}

SelectableDay.propTypes = {
  collapsed: React.PropTypes.bool.isRequired,
  date: React.PropTypes.object.isRequired,
  facilityId: React.PropTypes.string.isRequired
};

export default SelectableDay;
