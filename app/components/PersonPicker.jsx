import React from 'react';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class PersonPicker extends React.Component {

  render() {
    const component = this.generateHtmlListOfCovers();
    const nextButton = this.generateHtmlNextButton();
    const previousButton = this.generateHtmlPreviousButton();

    return (
      <div>
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
    this.state.numberElements = this.generateViewArray();
    this.state.groupWithSelectedElement = this.getGroupWithSelectedElement();
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
      // this.state.maxNumberOfCovers
      const availableCovers = Array.from(new Array(27), (x, i) => i + 1);

      // Now  we split it into several arrays
      const availableCoversUiGroups = availableCovers.map( (element, index) => {
        return index % 9 === 0 ? availableCovers.slice(index, index + 9) : null;
      })
      // We filter to remove the arrays with null
      .filter((element) => { return element; });

      return availableCoversUiGroups;
    }

    getGroupWithSelectedElement() {
      return Math.floor(this.state.covers / (this.state.numberOfCoversOnUi + 1));
    }

// -----------------------------------------------------------------------------
// Html Generators
// -----------------------------------------------------------------------------

  generateHtmlListOfCovers() {
    if (this.props.isExpanded) {
      return (
        <ul onClick={this.handlePersonPickerClick}>
          {this.generateHtmlNumbers()}
        </ul>
       );
    }
    if (!this.props.isExpanded) {
      return (
        <span
          className="person-picker"
          onClick={this.handlePersonPickerClick}
        >
          {this.props.numberOfCovers}
        </span>);
    }
  }

  generateHtmlNumbers() {
    return this.state
               .numberElements[this.state.groupWithSelectedElement]
               .map((number) => {
                 return (
                   <li
                     className={
                       number === this.state.covers ?
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

  generateHtmlNextButton() {
    if (this.props.isExpanded && this.state.groupWithSelectedElement !== 2) {
      return (
        <a href="#"
          onClick={this.handleNextButtonClick}>
          &#10095;
        </a>
      );
    }
  }

  generateHtmlPreviousButton() {
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

  handlePersonPickerClick() {
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
  numberOfCovers: React.PropTypes.number.isRequired,
  isExpanded: React.PropTypes.bool
};
