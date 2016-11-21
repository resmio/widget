// This needs serious refactoring
import React, { PropTypes } from 'react'
import { style, hover, merge } from 'glamor'
import IconArrow from './IconArrow'
import DropdownOption from './DropdownOption'

const numberPicker = style({
  display: 'flex',
  fontSize: '1.4rem',
  height: '4rem',
  width: '100%',
  alignItems: 'center',
  borderBottom: '1px solid #DDD'
})

const label = style({
  color: '#CCC',
  flex: '1',
  paddingLeft: '1em'
})

const input = style({
  flex: '1',
  color: '#555',
  textAlign: 'center'
})

const arrow = style(
  {
    textAlign: 'right',
    cursor: 'pointer',
    flex: '1',
    paddingRight: '1em',
    color: '#CCC'
  }
)

const arrowHover = hover({
  color: '#555'
})

const dropdownSS = style({
  background: 'yellow',
  width: '100%'
})

const NumberPicker = ({
    collapsed,
    legendSingular,
    legendPlural,
    max,
    min,
    number,
    onEditClicked,
    onNumberSelected,
    onPlusClicked,
    onMinusClicked,
    uiOpenGuestDropdown
}) => {
  const numbers = [...Array(max+1).keys()].slice(min)
  const action = collapsed
    ? (
      <div {...merge(arrow, arrowHover)} onClick={onEditClicked}>
        <IconArrow direction='down'/>
      </div>
    )
    : (
      <div>
        <button onClick={onPlusClicked}>+</button>
        <button onClick={onMinusClicked}>-</button>
      </div>
    )

  const dropdown = collapsed
   ? null
   : (
     <ul {...dropdownSS}>
        { numbers.map((num, i) => {
          const legend = num === 1 ? legendSingular : legendPlural
          return (
            <DropdownOption
              key={i}
              index={i}
              onClickAction={onNumberSelected}
            >
              {num} {legend}
            </DropdownOption>)
        })}
     </ul>
   )
   const legend = number === 1 ? legendSingular : legendPlural
  return (
    <div>
      <div {...numberPicker}>
        <div {...label}>PEOPLE</div>
        <div {...input} onClick={onEditClicked}>{number} {legend}</div>
        {action}
      </div>
      {dropdown}
    </div>
  )
}

const { bool, func, number, string } = PropTypes

NumberPicker.propTypes = {
  collapsed: bool,
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
