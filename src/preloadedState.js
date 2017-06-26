import moment from 'moment'

// this is function so moment is evaluated after locale is set
const preloadedState = (facilityId='the-fish') => {
  return {
    widget: {
      availabilities: [],
      bookingRefNum: '',
      guestEmail: '',
      guestName: '',
      guestPhone: '',
      newsletterSubscription: false,
      maxGuests: 6,
      minGuests: 1,
      selectedDate: moment(),
      selectedGuests: 2,
      selectedAvailability: '',
      status: 'pending',
      timePeriodSelected: 0,
      timeFocused: '',
      buttonColor: '#3E4862',
      // Probably don't need the defaultHeight
      defaultHeight: '380px', // = 500px - 60px header - 60px footer
      defaultWidth: '330px',
      facility: facilityId,
      headerColor: '#53628C',
      headerImage: 'https://zenezake.files.wordpress.com/2015/07/img_6715.jpg',
      headerTextColor: 'white',
      numberOfPanels: 2,
      renderAtMaxSize: false,
      currentPanel: 1,
      guestSelectorState: 'collapsed',
      dateSelectorState: 'collapsed',
      timeSelectorState  : 'expanded',
      availabilitiesFetching: false,
      availabilitiesError: false
    }
  }
}

export default preloadedState
