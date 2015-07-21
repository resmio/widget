import React from 'react';
import PersonPicker from './components/PersonPicker';
import WidgetHeader from './components/WidgetHeader';
import WidgetMessage from './components/WidgetMessage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <WidgetHeader
          facilityName={this.props.facilityName}
        />
        <WidgetMessage
          facilityMessage={this.props.widgetMessage}
        />
        <PersonPicker />
      </div>
    );
  }
}

App.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  widgetMessage: React.PropTypes.string
};
