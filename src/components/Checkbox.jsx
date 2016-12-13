import React from 'react'
import { style } from 'glamor'

const container = style({
  color: '#999',
  display: 'flex',
  fontSize: '1.4em',
  lineHeight: '1.5em',
  marginTop: '1em'
})

const label = style({
  display: 'block',
  marginLeft: '0.2em',
  maxWidth: '100%',
})

const checkbox = style({
  display: 'block',
  backgroundColor: 'white',
  border: '1px solid #999',
  padding: '0.1rem',
  borderRadius: '2px',
  cursor: 'pointer',
  borderColor: 'currentColor',
  position: 'relative',
  height: '2rem',
  width: '2rem',
  margin: '0.2rem 0 0 0',
  fontSize: '0px', // fixes weird white-space issues
  userSelect: 'none' // fixes text select on multi-click
})

const Checkbox = ({
  checked,
  onChange,
  id
}) => (
  <div {...container}>
    <input
      {...checkbox}
      type='checkbox'
      checked={checked}
      id={id}
      onChange={(e) =>{ onChange(e.target.id, e.target.checked)}}
     />
     <label {...label} htmlFor='newsletterSubscription'>Follow restaurant newsletter</label>
  </div>
)

export default Checkbox
