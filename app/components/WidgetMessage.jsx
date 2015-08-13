import React from 'react';

export default class WidgetMessage extends React.Component {

  render() {
    return (
      <p>{ this.props.facilityMessage }</p>
    );
  }

}

WidgetMessage.propTypes = {
  facilityMessage: React.PropTypes.string.isRequired
};
