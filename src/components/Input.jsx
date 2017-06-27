import React, {PropTypes} from 'react'
import {style} from 'glamor'
import {colors} from '../styles/variables'

const inputSS = style({
  border: '1px solid',
  borderColor: colors.silver,
  borderRadius: '4px',
  fontSize: '1.6em',
  height: '2.5em',
  padding: '0.6em 1.2em',
  width: '100%',
})

const labelSS = style({
  display: 'block',
  fontSize: '1.5em',
  fontWeight: 400,
  marginBottom: '0.5em',
  marginTop: '1em',
})

// FIXME: Add validations
// const disabledSS = style({
//   cursor: 'not-allowed',
//   backgroundColor: colors.gallery
// })

const TextField = ({
  defaultValue,
  disabled,
  id,
  label,
  onChange,
  placeHolder,
  required,
  type,
  value
}) => {
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
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      onChange={onChange}
      placeholder={placeHolder}
      required={required}
      type={type}
      value={value}
    />
  )

  return (
    <div>
      <label {...labelSS}>{label}</label>
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
