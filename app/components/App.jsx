import React from 'react';
import WidgetHeader from './WidgetHeader';
import WidgetMessage from './WidgetMessage';

const SERVER_DATA = {
  message: 'El torito les desea felices pascuas',
  facilityName: 'El Torito',
  reservationCovers: 2,
  reservationDate: new Date()
};

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
      </div>
    );
  }
}
