import keyMirror from 'react/lib/keyMirror';

export default {
  API: 'https://app.resmio.com/v1',

  ActionTypes: keyMirror({
    AVAILABILITES_LOADED: null,
    AVAILABILITIES_REQUESTED: null,
    DATE_CHANGED: null,
    EMAIL_CHANGED: null,
    NAME_CHANGED: null,
    NUMBER_OF_COVERS_CHANGED: null,
    PANEL_NUMBER_INCREASED: null,
    PANEL_NUMBER_DECREASED: null,
    PHONE_CHANGED: null,
    TIMESLOT_SELECTED: null   // Selects a timeslot
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
