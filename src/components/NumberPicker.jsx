import React, {PropTypes} from 'react'
import {injectIntl, intlShape, defineMessages, FormattedMessage} from 'react-intl';
import {style} from 'glamor'
import { colors } from '../styles/variables'

import ExpandableSelector from './ExpandableSelector'
import DropdownOption from './DropdownOption'

const messages = defineMessages({
    'ExpandableSelectorLabel': {
      id: 'NumberPicker.ExpandableSelector.Label',
      description: 'NumberPicker ExpandableSelector label',
      defaultMessage: 'PEOPLE'
    },
    'ExpandableSelectorMessageSingular': {
      id: 'NumberPicker.ExpandableSelector.MessageSingular',
      description: 'guests singular',
      defaultMessage: 'guest'
    },
    'ExpandableSelectorMessagePlural': {
      id: 'NumberPicker.ExpandableSelector.MessagePlural',
      description: 'guests plural',
      defaultMessage: 'guests'
    }
})

const dropdownLabel = style({
  background: colors.gallery,
  lineHeight: '2em',
  height: '2em',
  textAlign: 'center',
  width: '100%',
})
const NumberPicker = ({
    color,
    max,
    min,
    number,
    onEditClicked,
    onMinusClicked,
    onNumberSelected,
    onPlusClicked,
    state,
    intl
}) => {
  const numberPickerSS = style({
    color: color,
    marginTop: '1.2em'
  })

  const numbers = [...Array(max+1).keys()].slice(min)

  const dropdownOptions = (
    numbers.map((num, i) => {
      return (
        <DropdownOption
          selected={num === number}
          color={color}
          index={i}
          key={i}
          onClickAction={onNumberSelected}
        >
          {num}
        </DropdownOption>
      )
    })
  )

  const dropdown = (
    <div {...numberPickerSS}>
      <div {...dropdownLabel}>
        <FormattedMessage
          id="numberpicker.title"
          description="Number picker title"
          defaultMessage="Select amount of people"/>
      </div>
      {dropdownOptions}
    </div>
  )

  const legendSingular = intl.formatMessage(messages.ExpandableSelectorMessageSingular)
  const legendPlural = intl.formatMessage(messages.ExpandableSelectorMessagePlural)
  const legend = (num) => num === 1 ? legendSingular : legendPlural

  return (
    <ExpandableSelector
      color={color}
      displayedInfo={`${number} ${legend(number)}`}
      dropdown={dropdown}
      label={intl.formatMessage(messages.ExpandableSelectorLabel)}
      onExpandClicked={onEditClicked}
      state={state}
    />
  )
}

const { oneOf, func, number, string } = PropTypes

NumberPicker.propTypes = {
  color: string,
  max: number.isRequired,
  min: number.isRequired,
  number: number.isRequired,
  onEditClicked: func.isRequired,
  onMinusClicked: func,
  onNumberSelected: func.isRequired,
  onPlusClicked: func,
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
  intl: intlShape
}

export default injectIntl(NumberPicker)
