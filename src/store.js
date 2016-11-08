// import { action, computed, extendObservable, observable, useStrict } from 'mobx'
import { observable, useStrict } from 'mobx'
import moment from 'moment'

useStrict(true)

const widgetState = observable({
  calendarFocused: false,
  date: moment(new Date()),
  guests: 2,
  panel: 1
})

widgetState.panelUp = () => {
  this.panel ++
  console.log(this.panel)
}

export default widgetState
