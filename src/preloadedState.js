import moment from 'moment'
// import availabilities from './data/availabilities'

const preloadedState = {
  booking: {
    availabilities: [
      {"available": 5, "available_authenticated": 5, "checksum": "741a63e3e215bfe34e41456046a888df", "date": "2017-01-17T23:00:00Z", "id": null, "local_date_formatted": "17 January 2017, 14:00", "local_time_formatted": "14:00", "message": null, "price_change": 0, "resource_uri": "/v1/facility/meson-california-2/availability/1484694000"},
      {"available": 5, "available_authenticated": 5, "checksum": "f62563b07e0d12ebeba3c3e08fef18e9", "date": "2017-01-17T23:30:00Z", "id": null, "local_date_formatted": "17 January 2017, 14:30", "local_time_formatted": "14:30", "message": null, "price_change": 0, "resource_uri": "/v1/facility/meson-california-2/availability/1484695800"},
      {"available": 5, "available_authenticated": 5, "checksum": "6fe504d63665e10c6e12a5a47a58b55c", "date": "2017-01-18T00:00:00Z", "id": null, "local_date_formatted": "17 January 2017, 15:00", "local_time_formatted": "15:00", "message": null, "price_change": 0, "resource_uri": "/v1/facility/meson-california-2/availability/1484697600"},
      {"available": 5, "available_authenticated": 5, "checksum": "0adb7808ce6017c3d7da731911dcb4d9", "date": "2017-01-18T00:30:00Z", "id": null, "local_date_formatted": "17 January 2017, 15:30", "local_time_formatted": "15:30", "message": null, "price_change": 0, "resource_uri": "/v1/facility/meson-california-2/availability/1484699400"},
      {"available": 5, "available_authenticated": 5, "checksum": "f041d04f269299eb666bcb82d03597d5", "date": "2017-01-18T01:00:00Z", "id": null, "local_date_formatted": "17 January 2017, 16:00", "local_time_formatted": "16:00", "message": null, "price_change": 0, "resource_uri": "/v1/facility/meson-california-2/availability/1484701200"}
    ],
    guestEmail: '',
    guestName: '',
    guestPhone: '',
    newsletterSubscription: false,
    maxGuests: 6,
    minGuests: 1,
    selectedDate: moment(),
    selectedGuests: 1,
    selectedAvailability: '',
    status: 'pending',
    timePeriodSelected: 0,
    timeFocused: '',
    timePeriods: [
      {'name': 'Breakfast', 'time': '10:00'},
      {'name': 'Lunch', 'time': '12:00'},
      {'name': 'Dinner', 'time': '18:00'}
    ]
  },
  custom: {
    buttonColor: '#3E4862',
    // Probably don't need the defaultHeight
    defaultHeight: '380px', // = 500px - 60px header - 60px footer
    defaultWidth: '330px',
    facility: 'meson-california-2',
    headerColor: '#53628C',
    headerImage: 'https://zenezake.files.wordpress.com/2015/07/img_6715.jpg',
    headerTextColor: 'white',
    numberOfPanels: 2,
    renderAtMaxSize: false
  },
  ui: {
    currentPanel: 1,
    guestSelectorState: 'collapsed',
    dateSelectorState: 'collapsed',
    timeSelectorState  : 'expanded',
    availabilitiesFetching: false,
    availabilitiesError: false
  }
}

export default preloadedState
