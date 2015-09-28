import React from 'react';

export default class Timeslot extends React.Component {

  render() {
    return (
      <ul className="timeslots-list">
        { this._renderListOfValues() }
      </ul>
    );
  }

  constructor(props) {
    super(props);
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this._filterAvailabilitiesByCover = this._filterAvailabilitiesByCover.bind(this);
  }

  _renderListOfValues() {
    if (this.props.listOfValues) {
      const coveredAvailabilities = this.props.listOfValues
                                        .filter(
                                          this._filterAvailabilitiesByCover
                                        );

      return coveredAvailabilities.map((availability) => {
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

  _filterAvailabilitiesByCover(availability) {
    return (availability.available >= this.props.limit); // FAILS!
  }

}

Timeslot.propTypes = {
  limit: React.PropTypes.number,
  handleClick: React.PropTypes.func.isRequired,
  listOfValues: React.PropTypes.array
};
