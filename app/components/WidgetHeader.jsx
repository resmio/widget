import React from 'react';

export default class WidgetHeader extends React.Component {

  render() {
    return (
      <div className="widget-header">
        <h2 className="widget-header__subtitle">
          Online Booking
        </h2>
        <h1 className="widget-header__facility-name">
          { this.props.facilityName }
        </h1>
      </div>
    );
  }
}

WidgetHeader.propTypes = {
  facilityName: React.PropTypes.string.isRequired
};
