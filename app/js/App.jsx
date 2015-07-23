import React from 'react';
import AvailabilitiesStore from './stores/AvailabilitiesStore';
import ViewActionCreators from './actions/ViewActionCreators';

import PersonPicker from './components/PersonPicker';
import WidgetHeader from './components/WidgetHeader';
import WidgetMessage from './components/WidgetMessage';

export default class App extends React.Component {

  componentDidMount() {
    AvailabilitiesStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadAvailabilities('2015-08-22');
  }

  componentWillUnmount() {
    AvailabilitiesStore.removeChangeListener(this.handleStoreChange());
  }

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

  constructor(props) {
    super(props);
    this.state = AvailabilitiesStore.getState();

    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  handleStoreChange() {
    this.setState(AvailabilitiesStore.getState());
  }
}

App.propTypes = {
  facilityName: React.PropTypes.string.isRequired,
  widgetMessage: React.PropTypes.string
};
