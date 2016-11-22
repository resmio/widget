import moment from 'moment'
import availabilities from './data/availabilities'

const preloadedState = {
  booking: {
    availabilities: availabilities,
    maxGuests: 6,
    minGuests: 1,
    selectedDate: moment(),
    selectedGuests: 1
  },
  custom: {
    buttonColor: '#3E4862',
    // Probably don't need the defaultHeight
    defaultHeight: '380px', // = 500px - 60px header - 60px footer
    defaultWidth: '330px',
    facility: 'Meson Baturro',
    headerColor: '#53628C',
    headerImage: 'https://zenezake.files.wordpress.com/2015/07/img_6715.jpg',
    headerTextColor: 'white',
    numberOfPanels: 3,
    renderAtMaxSize: false
  },
  ui: {
    calendarFocused: false,
    currentPanel: 1,
    guestSelectorState: 'collapsed',
    dateSelectorState: 'collapsed',
    timeslotSelectorState: 'expanded'
  }
}

export default preloadedState
