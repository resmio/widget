import React from 'react';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import ViewActionCreators from '../actions/ViewActionCreators';

// Components
import NameInput from '../components/NameInput';

export default class GuestPanel extends React.Component {

  render() {
    return (
      <div>
        <p>Facebook Stuff</p>
        <NameInput
          onChange={this.handleNameInputChange}
        />
        <input type="phone">Phone</input>
        <input type="email">Email</input>
        <input type="checkbox">Newsletter</input>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = AvailabilitiesStore.getState();
    // We need to bind functions here so this won't refer to React
    // Will be solved in ES7
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
  }

  handleNameInputChange(event) {
    ViewActionCreators.nameChanged(event.target.value);
  }
}
