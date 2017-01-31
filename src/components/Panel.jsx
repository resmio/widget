import React from 'react'
import { style } from 'glamor'

// Styles
const panel = style({
  bottom: '6em',
  left: '0',
  position: 'absolute',
  right: '0',
  top: '6em'
})

const Panel = ({children}) => (
  <section {...panel}>
    { children }
  </section>
)

export default Panel
