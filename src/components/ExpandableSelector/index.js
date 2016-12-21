import React, { PropTypes } from 'react'
import { style } from 'glamor'

import Label from './Label'
import Value from './Value'
import ExpandButton from './ExpandButton'

const dropdownSS = style({
  fontSize: '1.4rem',
  maxHeight: '26rem',
  overflowY: 'scroll',
  padding: '0 1em',
  width: '100%'
})

const ExpandableSelector = ({
    state,
    label,
    displayedInfo,
    customButton,
    dropdown,
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
    borderBottom: '1px solid #DDD',
    height: containerHeight,
  })

  const main = style({
    display: 'flex',
    height: contentHeight,
    width: '100%',
    fontSize: '1.4rem',
    alignItems: 'center',
    cursor: 'pointer',
  })

  const dropdownSection = (
    state === 'expanded'
      ? <div {...dropdownSS}>{dropdown}</div>
      : (
        <div {...main}>
          <Label>{label}</Label>
          <Value onClickAction={onExpandClicked}>{displayedInfo}</Value>
          <ExpandButton state={state} onClickAction={onExpandClicked} />
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
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
  label: string,
  displayedInfo: string.isRequired,
  customButton: node,
  dropdown: node,
  onExpandClicked: func.isRequired,
}

export default ExpandableSelector
