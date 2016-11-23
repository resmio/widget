// This needs serious refactoring like extracting components out
// and all that, will do after the behaviour is clear
import React, { PropTypes } from 'react'
import { style, merge, select as $ } from 'glamor'
import IconArrow from './IconArrow'
import DropdownOption from './DropdownOption'

const label = style({
  color: '#CCC',
  flex: '1',
  paddingLeft: '1em'
})

const input = style({
  color: '#555',
  flex: '1',
  role: 'input',
  tabindex: '0',
  textAlign: 'center'
})

const arrow = merge(
  {
    color: '#CCC',
    cursor: 'pointer',
    flex: '1',
    paddingRight: '1em',
    textAlign: 'right'
  },
  $(':hover', {
    color: '#555'
  })
)

const buttonGroup = style({
  flex: '1',
  paddingRight: '1em',
  textAlign: 'right'
})

const button = merge(
  {
    background: '#FFF',
    border: '1px solid #DDD',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '2rem',
    height: '3rem',
    width: '3rem'
  },
  $(':hover', {
    background: '#555',
    color: '#FFF'
  })
)

const dropdownSS = style({
  fontSize: '1.4rem',
  listStyle: 'none',
  maxHeight: '18rem',
  overflowY: 'scroll',
  padding: '0 1em',
  width: '100%'
})

const NumberPicker = ({
    state,
    legendSingular,
    legendPlural,
    max,
    min,
    number,
    onEditClicked,
    onNumberSelected,
    onPlusClicked,
    onMinusClicked,
    uiGuestDropdownChangeState
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
      contentHeight = '4em'
  }

  const numberPickerContainer = style({
    borderBottom: '1px solid #DDD',
    height: containerHeight,
  })

  const numberPicker = style({
    display: 'flex',
    height: contentHeight,
    width: '100%',
    fontSize: '1.4rem',
    alignItems: 'center',
    cursor: 'pointer',
  })

  const numbers = [...Array(max+1).keys()].slice(min)
  const action = (state === 'collapsed')
    ? (
      <div {...arrow} onClick={onEditClicked}>
        <IconArrow direction='down'/>
      </div>
    )
    : (
      <div {...buttonGroup}>
        <button {...button} onClick={onMinusClicked}>-</button>
        <button {...button} onClick={onPlusClicked}>+</button>
      </div>
    )

  const dropdown = (state === 'expanded')
   ? (
     <ul {...dropdownSS} >
        {
          numbers.map((num, i) => {
            const legend = num === 1 ? legendSingular : legendPlural
            return (
              <DropdownOption key={i} index={i} onClickAction={onNumberSelected}>
                {num} {legend}
              </DropdownOption>
            )
          })
        }
   </ul>
  )
  : null

  const legend = number === 1 ? legendSingular : legendPlural

  return (
    <div {...numberPickerContainer}>
      <div {...numberPicker}>
        <div {...label}>PEOPLE</div>
        <div {...input} onClick={onEditClicked}>{number} {legend}</div>
        {action}
      </div>
      {dropdown}
    </div>
  )
}

const { oneOf, func, number, string } = PropTypes

NumberPicker.propTypes = {
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
  legendSingular: string,
  legendPlural: string.isRequired,
  max: number.isRequired,
  min: number.isRequired,
  number: number.isRequired,
  onEditClicked: func.isRequired,
  onNumberSelected: func.isRequired,
  onPlusClicked: func.isRequired,
  onMinusClicked: func.isRequired,
}

export default NumberPicker
