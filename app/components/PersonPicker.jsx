import React from 'react';

export default class PersonPicker extends React.Component {

  render() {
    return (
        <div id="person-picker">
          <label htmlFor="persons">Persons</label>
          <input
            type="number"
            name="persons"
            min="1"
            step="1"
            onChange={this.props.handleChange}
            placeholder={ this.props.numberOfCovers}
          />
        </div>
    );
  }
}

PersonPicker.propTypes = {
  numberOfCovers: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func.isRequired
};
