import './styles/main.scss';

import React from 'react';
import App from './containers/App';

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App
                  facilityId="meson-california-2"
                  widgetMessage="Oye que bonito es California "
                />, app);
}

main();
