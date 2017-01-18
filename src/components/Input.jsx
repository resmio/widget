import React, {PropTypes} from 'react'
import {style} from 'glamor'
import {colors} from '../styles/variables'

const inputSS = style({
  width: '100%',
  borderRadius: '4px',
  border: '1px solid',
  borderColor: colors.silver,
  padding: '0.6rem 1.2rem',
  height: '4rem',
  fontSize: '1.6em'
})

const labelSS = style({
  fontWeight: 400,
  fontSize: '1.5em',
  marginBottom: '0.5rem',
  marginTop: '2rem',
  display: 'block'
})

// const disabledSS = style({
//   cursor: 'not-allowed',
//   backgroundColor: colors.gallery
// })

const TextField = (props) => {
  // let borderColorStyle = Object.assign({},
  //   props.warning ? {borderColor: colors.goldenTainoi} : {},
  //   props.error ? {borderColor: colors.amaranth} : {}
  // )
  // let textColorStyle = Object.assign({},
  //   props.warning ? {color: colors.goldenTainoi} : {},
  //   props.error ? {color: colors.amaranth} : {}
  // )
  //
  // let computedInputStyle = Object.assign({},
  //   defaultStyle,
  //   borderColorStyle,
  //   props.disabled ? disabledStyle : {}
  // )
  // let computedLabelStyle = Object.assign({}, defaultLabelStyle, textColorStyle)
  // let computedHintStyle = Object.assign({marginTop: '0.5rem'}, textColorStyle)
  // let computedContainerStyle = Object.assign({marginBottom: '1rem'}, props.style)

  const inputField = (
    <input
      {...inputSS}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      id={props.id}
      onChange={props.onChange}
      placeholder={props.placeHolder}
      required={props.required}
      type={props.type}
      value={props.value}
    />
  )

  return (
    <div>
      <label {...labelSS}>{props.label}</label>
      {inputField}
    </div>
  )
}

const {
  bool,
  func,
  number,
  string,
  object,
  oneOfType
} = PropTypes

TextField.propTypes = {
  defaultValue: oneOfType([string, number]),
  disabled: bool,
  error: bool,
  hint: string,
  id: string,
  label: string,
  max: number,
  maxLength: number,
  min: number,
  minLength: number,
  multiLine: bool,
  onBlur: func,
  onChange: func,
  onClick: func,
  onFocus: func,
  placeHolder: string,
  required: bool,
  rows: number,
  style: object,
  type: string,
  value: oneOfType([string, number]),
  warning: bool
}

export default TextField
