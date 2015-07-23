import keyMirror from 'react/lib/keyMirror';

export default {
  API: 'https://app.resmio.com/v1',

  ActionTypes: keyMirror({
    AVAILABILITES_LOADED: null,
    AVAILABILITIES_REQUESTED: null,
    TIMESLOT_SELECTED: null   // Selects a timeslot
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};