import moment from 'moment'
import availabilities from './data/availabilities'

const preloadedState = {
  booking: {
    availabilities: availabilities,
    guestEmail: '',
    guestName: '',
    guestPhone: '',
    newsletterSubscription: false,
    maxGuests: 6,
    minGuests: 1,
    selectedDate: moment(),
    selectedGuests: 1,
    selectedAvailability: '',
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
    facility: 'the-fish',
    headerColor: '#53628C',
    headerImage: 'https://zenezake.files.wordpress.com/2015/07/img_6715.jpg',
    headerTextColor: 'white',
    numberOfPanels: 2,
    renderAtMaxSize: false
  },
  ui: {
    currentPanel: 2,
    guestSelectorState: 'collapsed',
    dateSelectorState: 'collapsed',
    timeSelectorState  : 'expanded',
    availabilitiesError: false
  }
}

export default preloadedState
