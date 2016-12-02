// import { createSelector } from 'reselect'

// const getGuests = (state) => state.booking.selectedGuests
// const getDate = (state) => state.booking.selectedDate

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

//
// export const getSelectedTime = createSelector(
//   []
// )
//
// export const getVisibleTodos = createSelector(
//   [ getVisibilityFilter, getTodos ],
//   (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case 'SHOW_ALL':
//         return todos
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed)
//     }
//   }
// )
