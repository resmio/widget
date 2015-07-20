import React from 'react';

export default class PersonPicker extends React.Component {

  render() {
    return (
        <div id="person-picker">
          <label htmlFor="persons">Persons</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="persons"
            placeholder={ this.state.numberOfPersons}
            value={this.value}
          />
        </div>
    );
  }

  handleChange(event) {
    this.setState({numberOfPersons: event.target.value});
  }

  constructor() {
    super();
    this.state = {
      numberOfPersons: 2
    };
  }

}
