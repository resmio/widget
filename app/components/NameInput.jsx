import React from 'react';

export default class NameInput extends React.Component {
  render() {
    return (
      <input type="text"
             placeholder="Name"
             onChange={this.props.onChange}
      />
    );
  }
}

NameInput.propTypes = {
  onChange: React.PropTypes.function
};
