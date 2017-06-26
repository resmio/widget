// react
import Raven from 'raven-js';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-intl-redux';

import store from './store'
import AppBase from './containers/AppBase';
import './styles/index';

if (process.env.NODE_ENV === 'production') {
    // Configure Sentry error tracking
    const key = process.env.REACT_APP_SENTRY_KEY
    const project = process.env.REACT_APP_SENTRY_PROJECT
    Raven.config(`https://${key}@sentry.resmio.io/${project}`).install();
}

var widgets = getWidgetsInstancesFromDOM();

function getWidgetsInstancesFromDOM() {
    var widgets = [];
    // Scan the page for all the widget instances
    var targets = document.getElementsByClassName('resmio-widget');

    // Extract the location and the data
    for (var i = 0; i < targets.length; i++) {
      var location = targets[i]
      // We remove the attribute so we don't get the data again on the next pass
      location.removeAttribute('resmio-widget');
      var options = {
        id: location.getAttribute('data-resmio-widget-id'),
        location: location
      };
      // Handle the case when no valid id is given
      if (!options.id) {
        console.error(
          'resmio reputation: no valid restaurant id found in the html, ' +
          'please provide a valid id in a data-resmio-reputation-id attribute'
        )
      } else {
        widgets.push(options)
      }
    }
    return widgets;
  }

function renderWidget(widget) {
  const MOUNT_NODE = widget.location
  const app = (
    <Provider store={store}>
      <AppBase />
    </Provider>
  )

  if (process.env.npm_lifecycle_event !== 'test') {
    // When testing we want to call the render from the test,
    // since it uses its own (fake) DOM
    render(app , MOUNT_NODE)
  }
}

for (var i=0 ; i < widgets.length ; i++) {
  renderWidget(widgets[i])
}
