import React from 'react';
// import AvailabilitiesStore from '../stores/AvailabilitiesStore';
// import ViewActionCreators from '../actions/ViewActionCreators';

// Components
import NameInput from './NameInput';

export default class GuestPanel extends React.Component {

  render() {
    return (
      <div>
        <p>Facebook Stuff</p>
        <NameInput />
        <input type="phone">Phone</input>
        <input type="email">Email</input>
        <input type="checkbox">Newsletter</input>
      </div>
    );
  }
}
