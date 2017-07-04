import React, { PropTypes } from 'react'
import {injectIntl, defineMessages, FormattedMessage} from 'react-intl';
import { style } from 'glamor'

import moment from 'moment'
import { momentObj } from 'react-moment-proptypes'
import { DayPicker } from 'react-dates'
import { colors } from '../styles/variables'
import { hexToRgb } from '../utils/colors'

import '../styles/_datepicker.css'

import ExpandableSelector from './ExpandableSelector'

const messages = defineMessages({
    'DateLabel': {
      id: 'datepickersection.date',
      description: 'DatePicker label',
      defaultMessage: 'DATE'
    }
})

const isDisabled = (day) => {
  return moment(day).diff(moment(new Date()), 'days') < 0
}

const emptyFunction = () => {}

const DatePickerSection = ({
    color,
    state,
    selectedDate,
    onDateSelected,
    onFocusChange,
    intl
}) => {
  const dropdownLabelSS = style({
    background: colors.gallery,
    color: color,
    height: '2em',
    lineHeight: '2em',
    textAlign: 'center',
    width: '100%'
  })

  const datepickerDropdown = style({
    background: `rgba(${hexToRgb(color)}, 0.3)`,
    marginTop: '1em'
  })

  const onDateSelectedWrapper = (day) => {
    isDisabled(day) ? emptyFunction() : onDateSelected(day)
  }

  const modifiers = {
    isDisabled: isDisabled,
    isSelected: (day) => moment(day).isSame(selectedDate, 'day')
  }

  // override localized dateformats
  const localizedDateFormats = {
    de: 'dddd, Do MMM'
  }
  const dateFormat = localizedDateFormats[moment.locale()] || 'LL'

  const main = (
    <div {...datepickerDropdown}>
      <div {...dropdownLabelSS}>
        <FormattedMessage
          id="datepickerpicker.title"
          description="Date picker title"
          defaultMessage="Select day"/>
      </div>
      <DayPicker
        id="date_input"
        modifiers={modifiers}
        date={selectedDate}
        focused={state === 'expanded'}
        numberOfMonths={1}
        onDayClick={onDateSelectedWrapper}
      />
    </div>
  )

  return (
    <ExpandableSelector
      label={intl.formatMessage(messages.DateLabel)}
      displayedInfo={selectedDate.format(dateFormat)}
      onExpandClicked={onFocusChange}
      dropdown={main}
      state={state}
    />
  )
}

const { oneOf, func } = PropTypes

DatePickerSection.propTypes = {
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
  selectedDate: momentObj,
  onFocusChange: func,
  onDateSelected: func
}

export default injectIntl(DatePickerSection)
