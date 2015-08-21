import React from 'react';

export default class PanelSwitcher extends React.Component {
  render() {
    let previousButton;
    let nextButton;
    if (this.props.showPanel > 1) {
      previousButton = (<a
                          className="panelSwitcher__previous-button"
                          href="#"
                          onClick={this.props.handleClickOnPreviousButton}
                        >
                          Previous
                        </a>);
    }
    if (this.props.showPanel < this.props.numberOfPanels) {
      nextButton = (<a href="#"
                       onClick={this.props.handleClickOnNextButton}
                    >
                      Next
                    </a>);
    }
    if (this.props.showPanel === this.props.numberOfPanels) {
      nextButton = (<a href="#"
                       onClick={this.props.handleClickOnLastButton}
                    >
                      Post
                    </a>);
    }
    return (
      <div>
        { previousButton }
        { nextButton }
      </div>
    );
  }
}

PanelSwitcher.propTypes = {
  handleClickOnLastButton: React.PropTypes.func,
  handleClickOnNextButton: React.PropTypes.func,
  handleClickOnPreviousButton: React.PropTypes.func,
  numberOfPanels: React.PropTypes.number,
  showPanel: React.PropTypes.number
};
