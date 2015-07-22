import './css/main.css';

import React from 'react';
import App from './js/App';
import ServerData from './FakeServerData';
import ApiUtils from './js/utils/ApiUtils';

// load mock availabilities data into localStorage
ServerData.init();

// load mock API call
ApiUtils.getAvailabilities();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App
                  facilityName="El Torito"
                  widgetMessage="Lleva botines y no va descalzo"
                />, app);
}

main();
