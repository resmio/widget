import React from 'react';

export default class PersonPicker extends React.Component {

  render() {
    return (
        <div id="person-picker">
          <label htmlFor="persons">Persons</label>
          <input
            type="number"
            onChange={this.handleChange}
            name="persons"
            placeholder={ this.state.numberOfCovers}
            value={this.state.numberOfCovers}
          />
        </div>
    );
  }

  handleChange(event) {
    this.setState({numberOfCovers: event.target.value});
  }

  constructor() {
    super();
    this.state = {
      numberOfCovers: 2
    };
  }

}
