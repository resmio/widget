import React from 'react';

export default class WidgetHeaderTitle extends React.Component {

  render() {
    return (
      <div>
        <h1>{ this.props.facilityName }</h1>
        <h2>Online Reservation</h2>
      </div>
    );
  }

}

WidgetHeaderTitle.propTypes = {
  facilityName: React.PropTypes.string.isRequired
};
