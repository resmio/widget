import { createSelector } from 'reselect'
import { formatLocalDate } from '../utils/dates'

const getGuests = (state) => state.booking.selectedGuests
const getPanel = (state) => state.ui.currentPanel

const validGuestData = (state) => {
  // We can create more sophisticated validations later if needed
  return (
    state.booking.guestName !== ''
    && state.booking.guestEmail !== ''
    && state.booking.guestPhone !== ''
  )
}

export const getSelectedAvailability = (state) => {
  const { availabilities, selectedAvailability } = state.booking
  // we are returning an empty object at initialization
  // this is not a goood solution but it works for now
  // Probably we need to init with some availability in there before
  // rendering the time picker (componentDidMount for booking Panel)
  // We need the spinner logic first
  return availabilities.filter(
    availability => availability.checksum === selectedAvailability
  )[0] || {}
}

export const showAvailabilities = (state) => {
  const { availabilities } = state.booking
  return availabilities.filter(
    availability => availability.available > 0
  ) || []
}

export const getDisplayBooking = createSelector(
  [getGuests, getSelectedAvailability],
  (guests, availability) => {
    return `${guests} Guests, ${formatLocalDate(availability.local_date_formatted)}`
  }
)

// This can be a lot more elegant extracting every panel logic into its own
// selector
export const isNextButtonEnabled = createSelector(
  [getPanel, getSelectedAvailability, validGuestData],
  (panel, availability, guestData) => {
    // In the first panel we disable the button if there's
    // no availability selected
    if (panel === 1 && Object.keys(availability).length === 0) {
      return false
    }

    // In the second one we check for valid guest data
    if (panel === 2 && !guestData) {
      return false
    }

    return true
  }
)
