// import { action, computed, extendObservable, observable, useStrict } from 'mobx'
import {action, observable, useStrict} from 'mobx'
import moment from 'moment'
useStrict(true)

const defaults = {
  calendarFocused: false,
  currentPanel: 1,
  palette: {
    main: 'red',
    secondary: 'yellow'
  },
  selectedDate: moment(new Date()),
  selectedGuests: 2
}

class WidgetStore {
  @observable calendarFocused
  @observable selectedDate
  @observable selectedGuests
  @observable currentPanel

  constructor(initialState) {
    this.calendarFocused = initialState.calendarFocused
    this.currentPanel = initialState.currentPanel
    this.palette = initialState.palette
    this.selectedDate = initialState.selectedDate
    this.selectedGuests = initialState.selectedGuests
  }

  @action changeSelectedDate = (newDate) => {
    this.selectedDate = newDate
  }

  @action switchFocusOnCalendar = () => {
    console.log('HEY')
    this.calendarFocused = !this.calendarFocused
  }

  @action addGuest() {
    console.info('previous',this.selectedGuests)
    this.selectedGuests = this.selectedGuests + 1
  }
}

const widgetStore = new WidgetStore(defaults)

export default widgetStore
export {WidgetStore}
