import keyMirror from 'react/lib/keyMirror';

export default {
  API: 'https://app.resmio.com/v1',

  ActionTypes: keyMirror({
    AVAILABILITES_LOADED: null,
    AVAILABILITIES_REQUESTED: null,
    BOOKING_POSTED: null,
    COLLAPSED_DATE_CLICKED: null,
    DATE_CHANGED: null,
    EMAIL_CHANGED: null,
    FACILITY_INFO_LOADED: null,
    NAME_CHANGED: null,
    NEWSLETTER_CHANGED: null,
    NUMBER_OF_COVERS_CHANGED: null,
    PANEL_NUMBER_INCREASED: null,
    PANEL_NUMBER_DECREASED: null,
    PERSON_PICKER_UI_STATE_CHANGED: null,
    PHONE_CHANGED: null,
    ROOT_COMPONENT_MOUNTED: null,
    TIMESLOT_GROUP_INCREASED: null,
    TIMESLOT_SELECTED: null,   // Selects a timeslot
    TIMESLOT_SELECTOR_EXPANDED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
