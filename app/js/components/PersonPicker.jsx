import React from 'react';

export default class PersonPicker extends React.Component {

  render() {
    return (
        <div id="person-picker">
          <label htmlFor="persons">Persons</label>
          <input
            type="number"
            onChange={this.props.handleChange}
            name="persons"
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
