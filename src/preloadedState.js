import moment from 'moment'
// import availabilities from './data/availabilities'

const preloadedState = {
  booking: {
    availabilities: [],
    guestEmail: '',
    guestName: '',
    guestPhone: '',
    newsletterSubscription: false,
    maxGuests: 6,
    minGuests: 1,
    selectedDate: moment(),
    selectedGuests: 1,
    selectedAvailability: '',
    status: 'confirmed',
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
    currentPanel: 3,
    guestSelectorState: 'collapsed',
    dateSelectorState: 'collapsed',
    timeSelectorState  : 'expanded',
    availabilitiesFetching: false,
    availabilitiesError: false
  }
}

export default preloadedState
