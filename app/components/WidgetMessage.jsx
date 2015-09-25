import React from 'react';

export default class WidgetMessage extends React.Component {

  render() {
    return (
      <p className="widget__message">{ this.props.facilityMessage }</p>
    );
  }

}

WidgetMessage.propTypes = {
  facilityMessage: React.PropTypes.string.isRequired
};
