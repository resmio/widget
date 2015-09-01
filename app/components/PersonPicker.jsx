import React from 'react';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class PersonPicker extends React.Component {

  render() {
    return (
      <div>
        <span className="component__label">People</span>
        { this.renderPreviousButton() }
        { this.renderListOfNumbers() }
        { this.renderNextButton() }
      </div>
    );
  }

  constructor(props) {
    super(props);
    // We trigger the action to get the availabilities for today from here
    // This will update the state , so we render it properly
    this.state = {};
    this.state.numberElements = this.generateViewArray();
    this.state.groupWithSelectedElement = this.getGroupWithSelectedElement();
    this.state.numberOfGroups = this.getNumberOfGroups();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
  }

// -----------------------------------------------------------------------------
// State changers
// -----------------------------------------------------------------------------

    generateViewArray() {
      // Creates an array with the numbers for the covers
      // We want it to start at one hence the +1 there
      const availableCovers = Array.from(new Array(this.props.numbersInTotal), (x, i) => i + 1);

      // Now  we split it into several arrays
      const availableCoversUiGroups = availableCovers.map( (element, index) => {
        return index % this.props.numbersPerGroup === 0 ? availableCovers.slice(index, index + this.props.numbersPerGroup) : null;
      })
      // We filter to remove the arrays with null
      .filter((element) => { return element; });

      return availableCoversUiGroups;
    }

    getGroupWithSelectedElement() {
      return Math.floor(this.props.selectedNumber / (this.props.numbersPerGroup + 1));
    }

    getNumberOfGroups() {
      return Math.floor(this.props.numbersInTotal / this.props.numbersPerGroup);
    }

// -----------------------------------------------------------------------------
// Html Generators
// -----------------------------------------------------------------------------

  renderListOfNumbers() {
    if (this.props.isExpanded) {
      return (
        <ul onClick={this.handlePersonPickerClick}>
          {this.renderNumbers()}
        </ul>
       );
    }
    if (!this.props.isExpanded) {
      return (
        <span
          className="person-picker"
          onClick={this.handleNumberListClick}
        >
          {this.props.selectedNumber}
        </span>);
    }
  }

  renderNumbers() {
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
                     onClick={this.handleNumberClick.bind(this, number)}
                   >
                     {number}
                   </li>
                 );
               });
  }

  renderNextButton() {
    // We check this before the state.groupWithSelectedElement is changed, so we add one to the check
    if (this.props.isExpanded && this.state.groupWithSelectedElement + 1 !== this.state.numberOfGroups) {
      return (
        <a href="#"
          onClick={this.handleNextButtonClick}>
          &#10095;
        </a>
      );
    }
  }

  renderPreviousButton() {
    if (this.props.isExpanded && this.state.groupWithSelectedElement !== 0) {
      return (
        <a href="#"
          onClick={this.handlePreviousButtonClick}>
          &#10094;
        </a>
      );
    }
  }

// -----------------------------------------------------------------------------
// Event handlers
// -----------------------------------------------------------------------------

  handleNumberClick(number) {
    ViewActionCreators.changeNumberOfCovers(number);
  }

  handleNumberListClick() {
    ViewActionCreators.changePersonPickerUiState();
  }

  handleNextButtonClick() {
    this.setState(
      {groupWithSelectedElement: this.state.groupWithSelectedElement + 1}
    );
  }

  handlePreviousButtonClick() {
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
  numbersPerGroup: React.PropTypes.number.isRequired,
  isExpanded: React.PropTypes.bool
};
