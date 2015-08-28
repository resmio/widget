import React from 'react';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class PersonPicker extends React.Component {

  renderPeopleSelector() {
    const numberElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return numberElements.map((number) => {
      return (
        <li
          key={number}
          onClick={this.handleClickOnPeopleNumber.bind(this, number)}
        >
          {number}
        </li>
      );
    });
  }

  render() {
    return (
        <div className="person-picker">
          <span className="component__label">People</span>
            {this.renderPeopleSelector()}
        </div>
    );
  }

  handleClickOnPeopleNumber(number) {
    ViewActionCreators.changeNumberOfCovers(number);
  }
}
