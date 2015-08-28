import React from 'react';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
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
    let component;
    let classString = 'person-picker--';
    if (this.props.isExpanded) {
      component = (<ul>
                     {this.renderPeopleSelector()}
                   </ul>);
      classString += 'is-expanded';
    }
    if (!this.props.isExpanded) {
      component = (<span className="person-picker">
                    {this.props.numberOfCovers}
                   </span>);
      classString += 'is-collapsed';
    }
    return (
      <div className={ classString } onClick={this.handlePersonPickerClick}>
        <span className="component__label">People</span>
        { component }
      </div>
    );
  }

  constructor(props) {
    super(props);
    // We trigger the action to get the availabilities for today from here
    // This will update the state , so we render it properly
    this.state = AvailabilitiesStore.getState();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleClickOnPeopleNumber = this.handleClickOnPeopleNumber.bind(this);
  }

  handleClickOnPeopleNumber(number) {
    ViewActionCreators.changeNumberOfCovers(number);
  }

  handlePersonPickerClick() {
    ViewActionCreators.changePersonPickerUiState();
  }
}

PersonPicker.propTypes = {
  numberOfCovers: React.PropTypes.number.isRequired,
  isExpanded: React.PropTypes.bool
};
