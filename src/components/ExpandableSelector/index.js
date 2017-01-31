import React, { PropTypes } from 'react'
import { style } from 'glamor'
import { colors } from '../../styles/variables'

import Label from './Label'
import Value from './Value'
import ExpandButton from './ExpandButton'

// Styles
const dropdownSS = style({
  fontSize: '1.4em',
  maxHeight: '18.9em',
  overflowY: 'scroll',
  padding: '0 1em',
  width: '100%'
})

const ExpandableSelector = ({
    customButton,
    displayedInfo,
    dropdown,
    label,
    state,
    onExpandClicked
}) => {

  let containerHeight, contentHeight

  switch(state) {
    case 'collapsed':
      containerHeight = '15%'
      contentHeight = '100%'
      break

    case 'semicollapsed':
      containerHeight = '33.3%'
      contentHeight = '100%'
      break

    default:
      containerHeight = '70%'
      contentHeight = '100%'
  }

  const container = style({
    borderBottom: `1px solid ${colors.alto}`,
    height: containerHeight,
  })

  const main = style({
    display: 'flex',
    height: contentHeight,
    width: '100%',
    fontSize: '1.4em',
    alignItems: 'center',
    cursor: 'pointer',
  })

  const dropdownSection = (
    state === 'expanded'
      ? <div {...dropdownSS}>{dropdown}</div>
      : (
        <div {...main} onClick={onExpandClicked}>
          <Label>{label}</Label>
          <Value>{displayedInfo}</Value>
          <ExpandButton state={state} />
        </div>
      )
  )

  return (
    <div {...container}>
      { dropdownSection }
    </div>
  )
}

const { oneOf, func, string, node } = PropTypes

ExpandableSelector.propTypes = {
  customButton: node,
  displayedInfo: string.isRequired,
  dropdown: node,
  label: string,
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
  onExpandClicked: func.isRequired,
}

export default ExpandableSelector
