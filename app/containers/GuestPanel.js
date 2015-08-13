import React from 'react';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import ViewActionCreators from '../actions/ViewActionCreators';

// Components
import HtmlInput from '../components/HtmlInput';

export default class GuestPanel extends React.Component {

  render() {
    return (
      <div>
        <p>Facebook Stuff</p>
        <HtmlInput
          inputType="text"
          onChange={this.handleNameInputChange}
          placeholder="name"
        />
        <HtmlInput
          inputType="tel"
          onChange={this.handlePhoneInputChange}
          placeholder="1234567"
        />
        <HtmlInput
          inputType="email"
          onChange={this.handleEmailInputChange}
          placeholder="name@domain.com"
        />
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
    this.handlePhoneInputChange = this.handlePhoneInputChange.bind(this);
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
  }

  handleNameInputChange(event) {
    ViewActionCreators.nameChanged(event.target.value);
  }
  handlePhoneInputChange(event) {
    ViewActionCreators.phoneChanged(event.target.value);
  }
  handleEmailInputChange(event) {
    ViewActionCreators.emailChanged(event.target.value);
  }
}
