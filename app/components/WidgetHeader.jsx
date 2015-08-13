import React from 'react';

export default class WidgetHeader extends React.Component {

  render() {
    return (
      <div id="widgetHeader">
        <div>
          <h1>{ this.props.facilityName }</h1>
          <h2>Online Reservation</h2>
        </div>
        <h3>{ this.props.reservationCovers } persons</h3>
        <h3>{ this.props.reservationDate }</h3>
        <h3>{ this.props.reservationTimeslot }</h3>
      </div>
    );
  }
}

WidgetHeader.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  reservationCovers: React.PropTypes.number,
  reservationDate: React.PropTypes.string,
  reservationTimeslot: React.PropTypes.string
};
