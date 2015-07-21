import './css/main.css';

import React from 'react';
import App from './js/App';

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App
                  facilityName="El Torito"
                  widgetMessage="Lleva botines y no va descalzo"
                />, app);
}

main();
