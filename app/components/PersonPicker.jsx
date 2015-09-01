import React from 'react';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class PersonPicker extends React.Component {

  render() {
    return (
      <div className="panel__input">
        <span className="component__label">People</span>
        { this._renderPreviousButton() }
        { this._renderListOfNumbers() }
        { this._renderNextButton() }
      </div>
    );
  }

  constructor(props) {
    super(props);
    // We trigger the action to get the availabilities for today from here
    // This will update the state , so we render it properly
    this.state = {};
    this.state.numberElements = this._generateViewArray();
    this.state.groupWithSelectedElement = this._getGroupWithSelectedElement();
    this.state.numberOfGroups = this._getNumberOfGroups();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this._handleNumberClick = this._handleNumberClick.bind(this);
    this._handleNextButtonClick = this._handleNextButtonClick.bind(this);
    this._handlePreviousButtonClick = this._handlePreviousButtonClick.bind(this);
  }

// -----------------------------------------------------------------------------
// State changers
// -----------------------------------------------------------------------------

    _generateViewArray() {
      // Creates an array with the numbers for the covers
      // We want it to start at one hence the +1 there
      const availableCovers = Array.from(
                                new Array(this.props.numbersInTotal),
                                (x, i) => i + 1
                              );

      // Now  we split it into several arrays
      const availableCoversUiGroups = availableCovers.map( (element, index) => {
        return index % this.props.numbersPerGroup === 0 ?
          availableCovers.slice(index, index + this.props.numbersPerGroup)
          : null;
      })
      // We filter to remove the arrays with null
      .filter((element) => { return element; });

      return availableCoversUiGroups;
    }

    _getGroupWithSelectedElement() {
      return Math.floor(
        this.props.selectedNumber / (this.props.numbersPerGroup + 1)
      );
    }

    _getNumberOfGroups() {
      return Math.floor(this.props.numbersInTotal / this.props.numbersPerGroup);
    }

// -----------------------------------------------------------------------------
// Html Generators
// -----------------------------------------------------------------------------

  _renderListOfNumbers() {
    return (
      <ul onClick={this._handlePersonPickerClick}>
        {this._renderNumbers()}
      </ul>
     );
  }

  _renderNumbers() {
    return this.state
               .numberElements[this.state.groupWithSelectedElement]
               .map((number) => {
                 return (
                   <li
                     className={
                       number === this.props.selectedNumber ?
                        'person-picker__number--selected' :
                        'person-picker__number'
                     }
                     key={number}
                     onClick={this._handleNumberClick.bind(this, number)}
                   >
                     {number}
                   </li>
                 );
               });
  }

  _renderNextButton() {
    // We check this before the state.groupWithSelectedElement is changed,
    // so we add one to the check
    if (this.state.groupWithSelectedElement + 1 !== this.state.numberOfGroups) {
      return (
        <a href="#"
          className="person-picker__button--next"
          onClick={this._handleNextButtonClick}>
          &#10095;
        </a>
      );
    }
  }

  _renderPreviousButton() {
    if (this.state.groupWithSelectedElement !== 0) {
      return (
        <a href="#"
          className="person-picker__button--previous"
          onClick={this._handlePreviousButtonClick}>
          &#10094;
        </a>
      );
    }
  }

// -----------------------------------------------------------------------------
// Event handlers
// -----------------------------------------------------------------------------

  _handleNumberClick(number) {
    ViewActionCreators.changeNumberOfCovers(number);
  }

  _handleNextButtonClick() {
    this.setState(
      {groupWithSelectedElement: this.state.groupWithSelectedElement + 1}
    );
  }

  _handlePreviousButtonClick() {
    this.setState(
      {groupWithSelectedElement: this.state.groupWithSelectedElement - 1}
    );
  }
}

// -----------------------------------------------------------------------------
// Props validation
// -----------------------------------------------------------------------------

PersonPicker.propTypes = {
  selectedNumber: React.PropTypes.number.isRequired,
  numbersInTotal: React.PropTypes.number.isRequired,
  numbersPerGroup: React.PropTypes.number.isRequired
};
