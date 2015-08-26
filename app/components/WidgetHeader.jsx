import './WidgetHeader.css';
import React from 'react';

export default class WidgetHeader extends React.Component {

  render() {
    return (
      <div className="widget-header">

        <div className="widget-header__facility-info">
          <h1 className="widget-header__facility-name">
            { this.props.facilityName }
          </h1>
          <h2 className="widget-header__subtitle">
            Online Reservation
          </h2>
        </div>

        <div className="widget-header__reservation-info">
          <h3>{ this.props.reservationCovers } persons</h3>
          <h3>{ this.props.reservationDate }</h3>
          <h3>{ this.props.reservationTimeslot }</h3>
        </div>
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
