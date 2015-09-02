import React from 'react';

export default class WidgetHeader extends React.Component {

  render() {
    return (
      <div className="booking-info">
        <span>{ this.props.reservationCovers } persons -</span>
        <span>{ this.props.reservationDate } -</span>
        <span>{ this.props.reservationTimeslot }</span>
      </div>
    );
  }
}

WidgetHeader.propTypes = {
  reservationCovers: React.PropTypes.number,
  reservationDate: React.PropTypes.string,
  reservationTimeslot: React.PropTypes.string
};
