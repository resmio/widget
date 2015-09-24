import './styles/main.scss';

import React from 'react';
import App from './containers/App';

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App
                  facilityId="the-fish"
                  widgetMessage="It's okay to eat fish because they don't have
                  any feelings. - Kurt Cobain"
                />, app);
}

main();
