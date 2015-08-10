import React from 'react';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class PanelSwitcher extends React.Component {
  render() {
    let previousButton;
    let nextButton;
    if (this.props.showPanel > 1) {
      previousButton = (<a href="#"
                          onClick={this.handleClickOnPreviousButton}
                        >
                          Previous
                        </a>);
    }
    if (this.props.showPanel < this.props.numberOfPanels) {
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

  handleClickOnNextButton() {
    ViewActionCreators.increasePanelNumber();
  }

  handleClickOnPreviousButton() {
    ViewActionCreators.decreasePanelNumber();
  }
}

PanelSwitcher.propTypes = {
  numberOfPanels: React.PropTypes.number,
  showPanel: React.PropTypes.number
};
