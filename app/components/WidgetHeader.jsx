import React from 'react';
import WidgetHeaderTitle from './WidgetHeaderTitle';

export default class WidgetHeader extends React.Component {

  render() {
    return (
      <div id="widgetHeader">
        <WidgetHeaderTitle facilityName={ this.props.facilityName } />
      </div>
    );
  }

}

WidgetHeader.propTypes = {
  facilityName: React.PropTypes.string.isRequired
};
