import React from 'react';
// import ViewActionCreators from '../actions/ViewActionCreators';

export default class PanelSwitcher extends React.Component {
  render() {
    let previousButton;
    let nextButton;
    if (this.props.panelNumber > 1) {
      previousButton = (<a href="#"
                          onClick={this.handleClickOnPreviousButton}
                        >
                          Previous
                        </a>);
    }
    if (this.props.panelNumber < 3) {
      nextButton = (<a href="#"
                          onClick={this.handleClickOnNextButton}
                    >
                      Next
                    </a>);
    }
    return (
      <div>
        { previousButton }
        { nextButton }
      </div>
    );
  }

  constructor(props) {
    super(props);
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleClickOnPreviousButton = this.handleClickOnPreviousButton.bind(this);
  }

  handleClickOnPreviousButton() {
    console.log('Carabiruri');
  }
}

PanelSwitcher.propTypes = {
  numberOfPanels: React.PropTypes.number,
  panelNumber: React.PropTypes.number
};
