import keyMirror from 'react/lib/keyMirror';

export default {
  API: 'https://app.resmio.com/v1',

  ActionTypes: keyMirror({
    AVAILABILITES_LOADED: null,
    LOAD_AVAILABILITES: null,
    SET_SELECTED: null   // Selects a timeslot
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
