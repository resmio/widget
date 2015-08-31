import React from 'react';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class PersonPicker extends React.Component {

  renderPeopleSelector() {
    return this.state.numberElements.map((number) => {
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
    let nextButton;
    let previousButton;
    let classString = 'person-picker--';
    if (this.props.isExpanded) {
      component = (<ul onClick={this.handlePersonPickerClick}>
                     {this.renderPeopleSelector()}
                   </ul>
                  );
      nextButton = (
        <a href="#"
          onClick={this.handleNextButtonClick}>
          &#10095;
        </a>
      );
      previousButton = (
        <a href="#"
          onClick={this.handlePreviousButtonClick}>
          &#10094;
        </a>
      );
      classString += 'is-expanded';
    }
    if (!this.props.isExpanded) {
      component = (<span className="person-picker" onClick={this.handlePersonPickerClick}>
                    {this.props.numberOfCovers}
                   </span>);
      classString += 'is-collapsed';
    }
    return (
      <div className={ classString }>
        <span className="component__label">People</span>
        { previousButton }
        { component }
        { nextButton }
      </div>
    );
  }

  constructor(props) {
    super(props);
    // We trigger the action to get the availabilities for today from here
    // This will update the state , so we render it properly
    this.state = AvailabilitiesStore.getState();
    this.state.numberElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleClickOnPeopleNumber = this.handleClickOnPeopleNumber.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
  }

  handleClickOnPeopleNumber(number) {
    ViewActionCreators.changeNumberOfCovers(number);
  }

  handlePersonPickerClick() {
    ViewActionCreators.changePersonPickerUiState();
  }

  handleNextButtonClick() {
    this.state.numberElements = this.state.numberElements.map((number) => {
      return number + 9;
    });
    this.forceUpdate();
  }

  handlePreviousButtonClick() {
    this.state.numberElements = this.state.numberElements.map((number) => {
      return number - 9;
    });
    this.forceUpdate();
  }
}

PersonPicker.propTypes = {
  numberOfCovers: React.PropTypes.number.isRequired,
  isExpanded: React.PropTypes.bool
};
