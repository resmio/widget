import './styles/main.scss';

import React from 'react';
import App from './containers/App';

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App
                  facilityId="the-fish"
                  widgetMessage="Lleva botines y no va descalzo"
                />, app);
}

main();
