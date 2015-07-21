import React from 'react';
import PersonPicker from './components/PersonPicker';
import WidgetHeader from './components/WidgetHeader';
import WidgetMessage from './components/WidgetMessage';
import SERVER_DATA from '../FakeServerData';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <WidgetHeader
          facilityName={SERVER_DATA.facilityName}
          reservationDate={SERVER_DATA.reservationDate.toDateString()}
          reservationHours={SERVER_DATA.reservationDate.getHours()}
          reservationMinutes={SERVER_DATA.reservationDate.getMinutes()}
          reservationCovers={SERVER_DATA.reservationCovers}
        />
        <WidgetMessage
          facilityMessage={SERVER_DATA.message}
        />
        <PersonPicker />
      </div>
    );
  }
}
