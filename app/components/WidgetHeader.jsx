import React from 'react';
import WidgetHeaderTitle from './WidgetHeaderTitle';

export default class WidgetHeader extends React.Component {

  render() {
    return (
      <div id="widgetHeader">
        <WidgetHeaderTitle facilityName={ this.props.facilityName } />
        <h3>{ this.props.reservationCovers } persons</h3>
        <h3>{ this.props.reservationDate }</h3>
        <h3>{ this.props.reservationHours }:{ this.props.reservationMinutes }</h3>
      </div>
    );
  }

}

WidgetHeader.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  reservationCovers: React.PropTypes.integer,
  reservationDate: React.PropTypes.string,
  reservationHours: React.PropTypes.string,
  reservationMinutes: React.PropTypes.string
};
