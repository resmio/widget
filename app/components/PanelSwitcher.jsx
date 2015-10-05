import React from 'react';

export default class PanelSwitcher extends React.Component {
  render() {
    const opts = {};
    if (this.props.disabled) {
      opts.disabled = 'disabled';
    }
    let previousButton;
    let nextButton;
    if (this.props.showPanel > 1) {
      previousButton = (<button
                          className="panelSwitcher__button--previous"
                          onClick={this.props.handleClickOnPreviousButton}
                        >
                          Previous
                        </button>);
    }
    if (this.props.showPanel < this.props.numberOfPanels) {
      nextButton = (<button className="panelSwitcher__button--next"
                       {...opts}
                       onClick={this.props.handleClickOnNextButton}
                    >
                      Next
                    </button>);
    }
    if (this.props.showPanel === this.props.numberOfPanels) {
      nextButton = (<button className="panelSwitcher__button--final"
                       onClick={this.props.handleClickOnLastButton}
                    >
                      Post
                    </button>);
    }
    return (
      <div>
        { previousButton }
        { this.props.showPanel }/{this.props.numberOfPanels}
        { nextButton }
      </div>
    );
  }
}

PanelSwitcher.propTypes = {
  disabled: React.PropTypes.bool,
  handleClickOnLastButton: React.PropTypes.func,
  handleClickOnNextButton: React.PropTypes.func,
  handleClickOnPreviousButton: React.PropTypes.func,
  numberOfPanels: React.PropTypes.number,
  showPanel: React.PropTypes.number
};
