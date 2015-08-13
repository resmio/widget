import React from 'react';

export default class HtmlInput extends React.Component {
  render() {
    return (
      <input type={this.props.inputType}
             placeholder={this.props.placeholder}
             onChange={this.props.onChange}
      />
    );
  }
}

HtmlInput.propTypes = {
  inputType: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
};
