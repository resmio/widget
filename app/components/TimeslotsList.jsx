import React from 'react';

export default class Timeslot extends React.Component {

  render() {
    return (
      <ul className="timeslots-list">
        { this._renderListOfValues() }
      </ul>
    );
  }

  _renderListOfValues() {
    return this.props.listOfValues.map((availability) => {
      return (
        <li
          key={availability.checksum}
          onClick={this.props.handleClick.bind(this, availability)}
        >
          {availability.local_time_formatted}
        </li>
      );
    });
  }

}

Timeslot.propTypes = {
  handleClick: React.PropTypes.func,
  listOfValues: React.PropTypes.object
};
