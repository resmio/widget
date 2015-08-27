import React from 'react';

export default class WidgetHeader extends React.Component {

  render() {
    return (
      <div className="booking-info">
        { this.props.reservationCovers } persons -
        { this.props.reservationDate } -
        { this.props.reservationTimeslot }
      </div>
    );
  }
}

WidgetHeader.propTypes = {
  reservationCovers: React.PropTypes.number,
  reservationDate: React.PropTypes.string,
  reservationTimeslot: React.PropTypes.string
};
