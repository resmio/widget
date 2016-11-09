// import { action, computed, extendObservable, observable, useStrict } from 'mobx'
import {action, observable, useStrict} from 'mobx'
import moment from 'moment'
useStrict(true)

class WidgetStore {
  @observable palette = {
    main: 'red',
    secondary: 'yellow'
  }
  @observable calendarFocused = false
  @observable selectedDate = moment()
  @observable selectedGuests = 2
  @observable currentPanel = 1

  @action changeSelectedDate = (newDate) => {
    this.selectedDate = newDate
  }

  @action switchFocusOnCalendar = () => {
    console.log('HEY')
    this.calendarFocused = !this.calendarFocused
  }

  @action addGuest = () => {
    console.info('previous',this.selectedGuests)
    this.selectedGuests = this.selectedGuests + 1
  }
}

export default WidgetStore
